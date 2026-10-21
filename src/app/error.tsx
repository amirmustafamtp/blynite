"use client";
import Link from "next/link";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="not-found dark-section">
      <div className="container">
        <h1>Something didn’t load.</h1>
        <p>Please try again, or return to the homepage.</p>
        <div className="button-row">
          <button className="button button-primary" onClick={reset}>
            Try again
          </button>
          <Link href="/" className="button button-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
