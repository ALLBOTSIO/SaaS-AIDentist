import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIDentist Pricing | Plans for Every Practice",
  description:
    "Flexible pricing for solo practices and DSOs. AI-powered scheduling, insurance verification, and patient engagement. Start with a free demo.",
  alternates: {
    canonical: "https://aidentist.com/pricing",
  },
  openGraph: {
    title: "AIDentist Pricing | Plans for Every Practice",
    description:
      "Flexible pricing for solo practices and DSOs. AI-powered scheduling, insurance verification, and patient engagement. Start with a free demo.",
    url: "https://aidentist.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Pricing Plans for Every Dental Practice</h1>

      <p>
        AIDentist offers flexible pricing designed for solo practices,
        multi-provider practices, and DSOs. Every plan includes our core AI
        automation features. Choose the plan that fits your practice size and
        growth stage.
      </p>

      <section aria-labelledby="starter">
        <h2 id="starter">Starter Plan</h2>
        <p>For solo practices and small groups (1–3 providers)</p>
        <ul>
          <li>AI-powered appointment scheduling with no-show reduction</li>
          <li>Automated insurance verification</li>
          <li>
            Basic patient engagement (appointment reminders, review requests)
          </li>
          <li>Real-time analytics dashboard</li>
          <li>
            Integration with major PMS (Dentrix, Eaglesoft, Open Dental)
          </li>
          <li>Email support</li>
          <li>Price: Custom quote (based on monthly appointment volume)</li>
        </ul>
      </section>

      <section aria-labelledby="growth">
        <h2 id="growth">Growth Plan</h2>
        <p>For established practices and groups (4–10 providers)</p>
        <ul>
          <li>All Starter features</li>
          <li>
            Advanced patient engagement (personalized recall, multi-channel
            communication)
          </li>
          <li>Revenue cycle management automation</li>
          <li>Custom workflow automation</li>
          <li>Priority support (phone and email)</li>
          <li>Advanced analytics and reporting</li>
          <li>Price: Custom quote (based on monthly appointment volume)</li>
        </ul>
      </section>

      <section aria-labelledby="enterprise">
        <h2 id="enterprise">Enterprise Plan</h2>
        <p>For DSOs and large practice networks (10+ locations)</p>
        <ul>
          <li>All Growth features</li>
          <li>
            Centralized multi-location management and analytics
          </li>
          <li>
            Standardized workflow automation across all locations
          </li>
          <li>Custom integrations and API access</li>
          <li>Dedicated account manager</li>
          <li>SLA guarantees and priority support</li>
          <li>HIPAA BAA and compliance certifications</li>
          <li>Price: Custom enterprise pricing</li>
        </ul>
      </section>

      <section aria-labelledby="included">
        <h2 id="included">What&apos;s Included in Every Plan</h2>
        <ul>
          <li>HIPAA-compliant data handling and encryption</li>
          <li>Real-time updates and automated processing</li>
          <li>Mobile app for staff notifications</li>
          <li>Cloud-based infrastructure (no installation required)</li>
          <li>Regular feature updates and AI model improvements</li>
          <li>Onboarding and training for your team</li>
        </ul>
      </section>

      <section aria-labelledby="roi">
        <h2 id="roi">ROI You Can Calculate</h2>
        <p>AIDentist delivers measurable financial returns:</p>
        <ul>
          <li>40% reduction in no-shows ($150+ per slot saved)</li>
          <li>
            60% less time on insurance verification (20+ hours/week saved)
          </li>
          <li>25% improvement in insurance claim acceptance rates</li>
          <li>
            18–30% increase in patient retention through engagement
          </li>
        </ul>
        <p>
          Most practices recover their investment within 60–90 days of
          implementation.
        </p>
      </section>

      <section aria-labelledby="no-fees">
        <h2 id="no-fees">No Hidden Fees</h2>
        <p>
          Our pricing is transparent and predictable. Implementation, training,
          and support are included. We don&apos;t charge per-user or
          per-transaction fees. You pay based on practice size and appointment
          volume — nothing more.
        </p>
        <p>
          <a href="/demo" className="cta-button">
            Get a Custom Quote
          </a>
        </p>
        <p>
          <a href="/blog/dental-ai-roi-calculator">
            Calculate Your Potential Savings
          </a>
        </p>
      </section>
    </main>
  );
}
