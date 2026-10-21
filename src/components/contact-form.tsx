"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { services } from "@/data/services";
import { budgets, validateInquiry, type InquiryErrors } from "@/lib/contact";

export function ContactForm({
  available,
  initialService = "",
  email,
}: {
  available: boolean;
  initialService?: string;
  email?: string;
}) {
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [sending, setSending] = useState(false);
  const [token, setToken] = useState("");
  const [ready, setReady] = useState(false);
  const [connectionAttempt, setConnectionAttempt] = useState(0);
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status) statusRef.current?.focus();
  }, [status]);
  useEffect(() => {
    if (!available) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    fetch("/api/contact", {
      signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10000)]),
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.available && typeof result.token === "string") {
          setToken(result.token);
          timer = setTimeout(() => setReady(true), 2100);
        } else
          setStatus({
            message:
              "Online inquiries are temporarily unavailable. Please try again later.",
            success: false,
          });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setStatus({
            message:
              "The form could not connect. Retry below; any details you entered will stay here.",
            success: false,
          });
      });
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [available, connectionAttempt]);
  function feedback(message: string, success = false) {
    setStatus({ message, success });
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const raw = {
      ...Object.fromEntries(fields),
      consent: fields.get("consent") === "on",
    };
    const result = validateInquiry(raw);
    setErrors(result.errors);
    setStatus(null);
    if (!result.data) {
      feedback(
        "Please check the highlighted fields before sending your inquiry.",
      );
      return;
    }
    if (!available || !ready) {
      feedback(
        "Online inquiries are not available yet. No information has been sent.",
      );
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          website: fields.get("website"),
          token,
        }),
        signal: AbortSignal.timeout(15000),
      });
      const payload = await response.json();
      if (!response.ok) {
        setErrors(payload.errors ?? {});
        feedback(
          payload.message ??
            "We couldn't send your inquiry. Please try again later.",
        );
      } else {
        form.reset();
        feedback(payload.message, true);
      }
    } catch {
      feedback(
        "We couldn't confirm delivery. Please check your connection and try again later.",
      );
    } finally {
      setSending(false);
    }
  }
  const attributes = (field: keyof InquiryErrors) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });
  const error = (field: keyof InquiryErrors) =>
    errors[field] && (
      <p className="field-error" id={`${field}-error`}>
        {errors[field]}
      </p>
    );
  if (status?.success) {
    return (
      <div
        className="contact-panel contact-confirmation"
        ref={statusRef}
        tabIndex={-1}
        role="status"
      >
        <h2>Thank you for reaching out.</h2>
        <p>{status.message}</p>
        <p>
          We’ll use the email address you provided to follow up about your
          project.
        </p>
        <Link className="text-link" href="/">
          Back to home <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    );
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      noValidate
      aria-label="Project inquiry"
      aria-describedby={!available ? "contact-unavailable" : undefined}
    >
      <div className="contact-form-intro">
        <h2>Tell us about your idea.</h2>
        <p>All fields are required unless marked optional.</p>
      </div>
      {!available && (
        <div className="form-notice" id="contact-unavailable">
          <strong>Online inquiries are not open yet.</strong>
          <p>
            You can fill out the fields, but sending is currently unavailable.
          </p>
          {email && (
            <p>
              You can email us at <a href={`mailto:${email}`}>{email}</a>.
            </p>
          )}
        </div>
      )}
      <div aria-live="polite" aria-atomic="true">
        {status && (
          <div
            ref={statusRef}
            tabIndex={-1}
            className="form-status status-error"
          >
            <p>{status.message}</p>
            {!ready && (
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setStatus(null);
                  setConnectionAttempt((attempt) => attempt + 1);
                }}
              >
                Retry connection
              </button>
            )}
          </div>
        )}
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
            {...attributes("name")}
          />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="email">Business email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
            {...attributes("email")}
          />
          {error("email")}
        </div>
        <div className="field">
          <label htmlFor="company">
            Company name <span>(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            maxLength={150}
            placeholder="Your company"
            {...attributes("company")}
          />
          {error("company")}
        </div>
        <div className="field">
          <label htmlFor="service">Service of interest</label>
          <select
            id="service"
            name="service"
            defaultValue={initialService}
            required
            {...attributes("service")}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.shortTitle}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
          {error("service")}
        </div>
        <div className="field field-wide">
          <label htmlFor="description">Tell us about your project</label>
          <textarea
            id="description"
            name="description"
            required
            minLength={20}
            maxLength={5000}
            rows={6}
            placeholder="What are you looking to build, solve, or improve?"
            {...attributes("description")}
          />
          {error("description")}
        </div>
        <div className="field field-wide">
          <label htmlFor="budget">
            Budget range <span>(optional, USD)</span>
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            {...attributes("budget")}
          >
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
          {error("budget")}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="form-consent">
        <input
          type="checkbox"
          name="consent"
          required
          {...attributes("consent")}
        />
        <span>
          I agree to Blynite using these details to respond to my inquiry. Read
          the <Link href="/privacy">draft Privacy Policy</Link>. Please do not
          include sensitive or confidential information.
        </span>
      </label>
      {error("consent")}
      <button
        className="button button-primary"
        type="submit"
        disabled={!available || !ready || sending}
      >
        {sending ? (
          <>
            Sending inquiry
            <LoaderCircle size={18} aria-hidden="true" />
          </>
        ) : available && !ready ? (
          <>
            Preparing form <LoaderCircle size={18} aria-hidden="true" />
          </>
        ) : (
          <>
            Send inquiry
            <ArrowUpRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      <p className="submit-note">
        {available
          ? "We’ll use your email to follow up about your project."
          : "Online inquiries will be available here once sending is enabled."}
        {email && (
          <>
            {" "}
            Prefer email? <a href={`mailto:${email}`}>{email}</a>
          </>
        )}
      </p>
    </form>
  );
}
