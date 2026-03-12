import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AIDentist | AI Dental Practice Automation",
  description:
    "AIDentist transforms dental practices with AI-powered automation. Built by AI Venture Holdings to modernize scheduling, insurance, and patient engagement.",
  alternates: {
    canonical: "https://aidentist.com/about",
  },
  openGraph: {
    title: "About AIDentist | AI Dental Practice Automation",
    description:
      "AIDentist transforms dental practices with AI-powered automation. Built by AI Venture Holdings to modernize scheduling, insurance, and patient engagement.",
    url: "https://aidentist.com/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://aidentist.com/#organization",
  name: "AIDentist",
  url: "https://aidentist.com/about",
  description:
    "AIDentist transforms dental practices with AI-powered automation. Built by AI Venture Holdings to modernize scheduling, insurance, and patient engagement.",
  founder: {
    "@type": "Person",
    name: "Michael J. Morgan",
    jobTitle: "CEO",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "AI Venture Holdings LLC",
    url: "https://aiventureholdings.com",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        <h1>About AIDentist</h1>

        <section aria-labelledby="mission">
          <h2 id="mission">Our Mission</h2>
          <p>
            We&apos;re building the AI layer for modern dental practices.
            AIDentist automates the operational workflows that consume front-desk
            hours — appointment scheduling, insurance verification, patient
            engagement, and revenue cycle management — so dental teams can focus
            on patient care. Founded by AI Venture Holdings LLC, we combine deep
            expertise in healthcare automation with practical understanding of
            dental practice challenges.
          </p>
        </section>

        <section aria-labelledby="problem">
          <h2 id="problem">The Problem Dental Practices Face</h2>
          <p>
            Dental practices lose an average of 20+ hours per week on manual
            insurance verification alone. No-show rates average 15–20%, costing
            practices $150+ per missed appointment. Patient communication is
            fragmented across phone, text, and email, leading to lower
            engagement and retention. DSOs managing multiple locations face
            these problems multiplied across every location, creating
            operational bottlenecks that prevent growth.
          </p>
          <p>
            Traditional practice management software handles scheduling and
            billing, but leaves the labor-intensive verification and patient
            communication tasks to staff. The result: high front-desk burnout,
            revenue leakage from insurance claim denials, and patient
            frustration from delayed responses.
          </p>
        </section>

        <section aria-labelledby="approach">
          <h2 id="approach">Our Approach</h2>
          <p>
            AIDentist uses purpose-built AI models trained on dental practice
            workflows to automate repetitive operational tasks with
            clinical-grade accuracy. Unlike generic practice management
            platforms, every feature is designed specifically for dental — from
            insurance coding to appointment optimization to patient
            communication. Learn more about our{" "}
            <a href="/solutions/practice-automation">
              practice automation solutions
            </a>
            .
          </p>
          <p>
            Our AI learns the nuances of dental insurance verification,
            appointment scheduling patterns, and patient behavior. This means
            AIDentist doesn&apos;t just automate tasks — it optimizes them. The
            platform reduces no-shows, recovers revenue from insurance claims,
            and improves patient engagement simultaneously.
          </p>
        </section>

        <section aria-labelledby="why-aivh">
          <h2 id="why-aivh">Why AI Venture Holdings Built AIDentist</h2>
          <p>
            AIDentist is part of the AI Venture Holdings LLC portfolio,
            alongside BeautifulDerma (dermatology AI), ALLBOTS (equipment
            automation), EquipScan Pro (diagnostic AI), and other AI-powered
            vertical solutions. We focus on solving real, measurable problems in
            high-volume professional services. See how AIDentist serves{" "}
            <a href="/solutions/dso">DSOs and multi-location groups</a>.
          </p>
          <p>
            Dental practice automation is a $2+ billion market opportunity with
            clear ROI metrics: time saved, revenue recovered, and patient
            satisfaction improved. By building AI specifically for dentistry, we
            deliver results that generic software cannot.
          </p>
        </section>

        <section aria-labelledby="team">
          <h2 id="team">Our Team</h2>
          <p>
            AIDentist is led by Michael J. Morgan, CEO of AI Venture Holdings.
            The team combines:
          </p>
          <ul>
            <li>
              Healthcare AI specialists with experience in clinical automation
            </li>
            <li>
              Dental practice operators who understand day-to-day workflow
              challenges
            </li>
            <li>
              Enterprise software engineers building scalable platform
              infrastructure
            </li>
            <li>
              Product strategists focused on measurable business outcomes
            </li>
          </ul>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Get Started Today</h2>
          <p>
            Ready to see AIDentist in action? Book a personalized demo to learn
            how dental practices are saving 20+ hours per week and reducing
            no-shows by 40%.
          </p>
          <p>
            <a href="/demo" className="cta-button">
              Book a Demo
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
