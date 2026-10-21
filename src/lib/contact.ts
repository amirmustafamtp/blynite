import { services } from "../data/services";

export const budgets = [
  "Under $10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000–$100,000",
  "$100,000+",
  "Let's discuss",
] as const;
export type Inquiry = {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  consent: boolean;
};
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;
export function validateInquiry(value: unknown): {
  data?: Inquiry;
  errors: InquiryErrors;
} {
  const raw =
    value && typeof value === "object"
      ? (value as Record<string, unknown>)
      : {};
  const string = (key: string) =>
    typeof raw[key] === "string" ? raw[key].trim() : "";
  const data: Inquiry = {
    name: string("name"),
    email: string("email"),
    company: string("company"),
    service: string("service"),
    description: string("description"),
    budget: string("budget"),
    consent: raw.consent === true,
  };
  const errors: InquiryErrors = {};
  if (data.name.length < 2 || data.name.length > 100)
    errors.name = "Enter your full name (2–100 characters).";
  if (
    data.email.length > 254 ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)
  )
    errors.email = "Enter a valid email address.";
  if (data.company.length > 150)
    errors.company = "Keep the company name under 150 characters.";
  if (
    !services.some((service) => service.slug === data.service) &&
    data.service !== "not-sure"
  )
    errors.service = "Choose a service, or select Not sure yet.";
  if (data.description.length < 20 || data.description.length > 5000)
    errors.description = "Tell us a little more (20–5,000 characters).";
  if (data.budget && !budgets.some((budget) => budget === data.budget))
    errors.budget = "Choose a listed budget range.";
  if (!data.consent)
    errors.consent = "Please agree to being contacted about your inquiry.";
  return Object.keys(errors).length ? { errors } : { data, errors };
}
