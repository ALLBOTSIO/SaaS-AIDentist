"use client";

import { useState } from "react";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book a Demo | AIDentist",
  description: "Book a personalized demo of AIDentist dental AI platform",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "demo@aidentist.com",
    availableLanguage: ["en"],
  },
};

type FormState = {
  fullName: string;
  practiceName: string;
  email: string;
  phone: string;
  numProviders: string;
  primaryChallenge: string;
  bestTime: string;
  timeZone: string;
  notes: string;
};

const initialForm: FormState = {
  fullName: "",
  practiceName: "",
  email: "",
  phone: "",
  numProviders: "",
  primaryChallenge: "",
  bestTime: "",
  timeZone: "",
  notes: "",
};

// Paste your deployed Apps Script web app URL into NEXT_PUBLIC_SHEETS_ENDPOINT
const SHEETS_ENDPOINT = process.env.NEXT_PUBLIC_SHEETS_ENDPOINT ?? "";

export default function DemoPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Apps Script web apps reject JSON bodies — send as FormData so the
      // doPost(e) handler receives e.parameter with no extra parsing needed.
      const body = new FormData();
      (Object.keys(form) as (keyof FormState)[]).forEach((key) =>
        body.append(key, form[key])
      );
      body.append("submittedAt", new Date().toISOString());

      const res = await fetch(SHEETS_ENDPOINT, { method: "POST", body });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <main>
        <h1>See AIDentist in Action</h1>

        <p>
          Watch how AIDentist automates appointment scheduling, insurance
          verification, and patient engagement. Our team will show you exactly
          how your practice can save 20+ hours per week and reduce no-shows by
          40%.
        </p>

        <section aria-labelledby="demo-overview">
          <h2 id="demo-overview">What You&apos;ll See in Your Demo</h2>
          <ul>
            <li>
              <strong>Appointment Scheduling:</strong> How AI reduces no-shows
              and optimizes your schedule
            </li>
            <li>
              <strong>Insurance Verification:</strong> Real-time benefit checks
              and claim optimization
            </li>
            <li>
              <strong>Patient Engagement:</strong> Automated communication that
              improves retention
            </li>
            <li>
              <strong>Analytics Dashboard:</strong> Real-time insights into your
              practice&apos;s efficiency
            </li>
            <li>
              <strong>Integration:</strong> How AIDentist connects with your
              existing PMS
            </li>
          </ul>
        </section>

        <section aria-labelledby="demo-form">
          <h2 id="demo-form">Book Your Demo</h2>

          {status === "success" ? (
            <p role="status">
              Thank you! Our team will respond within 24 business hours to
              confirm your demo time.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="practiceName">Dental Practice Name *</label>
                <input
                  id="practiceName"
                  name="practiceName"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.practiceName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Practice Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="numProviders">Number of Providers</label>
                <input
                  id="numProviders"
                  name="numProviders"
                  type="number"
                  min={1}
                  value={form.numProviders}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="primaryChallenge">Primary Challenge</label>
                <select
                  id="primaryChallenge"
                  name="primaryChallenge"
                  value={form.primaryChallenge}
                  onChange={handleChange}
                >
                  <option value="">Select a challenge</option>
                  <option value="no-shows">Appointment No-Shows</option>
                  <option value="insurance">Insurance Verification</option>
                  <option value="engagement">Patient Engagement</option>
                  <option value="revenue-cycle">Revenue Cycle</option>
                  <option value="all">All of the above</option>
                </select>
              </div>

              <div>
                <label htmlFor="bestTime">Best Time to Meet</label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={form.bestTime}
                  onChange={handleChange}
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeZone">Time Zone</label>
                <input
                  id="timeZone"
                  name="timeZone"
                  type="text"
                  placeholder="e.g. Eastern, Central, Mountain, Pacific"
                  value={form.timeZone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting…" : "Book My Demo"}
              </button>

              {status === "error" && (
                <p role="alert">
                  Something went wrong. Please email{" "}
                  <a href="mailto:demo@aidentist.com">demo@aidentist.com</a>{" "}
                  directly.
                </p>
              )}
            </form>
          )}

          <p>
            Our team will respond within 24 business hours to confirm your demo
            time. Demos typically take 30 minutes.
          </p>
        </section>

        <section aria-labelledby="pre-demo-questions">
          <h2 id="pre-demo-questions">Questions Before You Book?</h2>
          <p>
            <a href="mailto:demo@aidentist.com">Email our team</a> or call
            [phone number]
          </p>
        </section>
      </main>
    </>
  );
}
