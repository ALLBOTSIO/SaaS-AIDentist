import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Solo to Scaling: AI Revenue Growth Story",
  description:
    "Solo dentist case study: One dentist grew practice 30% in revenue with AI-powered automation, patient engagement, and operational efficiency.",
  alternates: {
    canonical: "https://aidentist.com/case-studies/solo-practice-growth",
  },
  openGraph: {
    title: "From Solo to Scaling: AI Revenue Growth Story",
    description:
      "Solo dentist case study: One dentist grew practice 30% in revenue with AI-powered automation, patient engagement, and operational efficiency.",
    url: "https://aidentist.com/case-studies/solo-practice-growth",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://aidentist.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "Solo Practice Growth", item: "https://aidentist.com/case-studies/solo-practice-growth" },
  ],
};

export default function CaseStudy3() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <article>
          <h1>
            From Solo to Scaling: How One Dentist Grew Revenue 30% with AI
          </h1>

          <section aria-labelledby="the-situation">
            <h2 id="the-situation">The Situation</h2>
            <p>
              A solo dentist practice with one hygienist and one part-time
              coordinator. Established 8 years, good reputation, patient base of
              800+ active patients. Owner was working hard (full days, no breaks,
              evenings handling admin), but the practice felt plateaued. Growth
              had stalled at $600K annual revenue. Owner wanted to grow without
              adding staff (already operating lean).
            </p>
          </section>

          <section aria-labelledby="the-challenge">
            <h2 id="the-challenge">The Challenge</h2>
            <p>
              <strong>Time Constraints:</strong> Owner dentist was fully booked
              with clinical work, leaving no capacity to generate new patients or
              improve operations. Every available hour was reserved for patient
              care.
            </p>
            <p>
              <strong>Administrative Burden:</strong> Even with a part-time
              coordinator, administrative work (insurance verification,
              appointment management, patient communication, billing follow-up)
              was consuming 5–10 hours of owner&apos;s personal time per week.
            </p>
            <p>
              <strong>No-Show Impact:</strong> With limited capacity, every
              no-show was painful — an empty slot that couldn&apos;t be quickly
              filled. 18% no-show rate meant 120+ lost appointments annually.
            </p>
            <p>
              <strong>Growth Plateau:</strong> Without systematic patient
              engagement or recall, new patient acquisitions came from referrals
              only. Limited capacity to serve new patients anyway.
            </p>
            <p>
              <strong>Insurance Hassles:</strong> Claim denials and insurance
              follow-ups consumed time and money. Owner wasn&apos;t optimizing
              insurance coding — claims were submitted as-is, with no
              pre-verification.
            </p>
          </section>

          <section aria-labelledby="the-solution">
            <h2 id="the-solution">The Solution</h2>
            <p>
              The solo practice implemented AIDentist to automate administrative
              work, freeing capacity and improving efficiency:
            </p>
            <ul>
              <li>
                Appointment scheduling optimization to reduce no-shows
              </li>
              <li>
                Insurance verification automation to prevent claim denials
              </li>
              <li>
                Patient engagement automation to drive retention and recalls
              </li>
            </ul>
            <p>
              Implementation: 1 week (quick integration with Open Dental PMS,
              minimal training needed).
            </p>
          </section>

          <section aria-labelledby="the-results">
            <h2 id="the-results">The Results</h2>

            <h3>No-Show Reduction: 40% Improvement</h3>
            <p>
              No-show rate dropped from 18% to 11%. For a solo practice seeing
              30–40 patients per week, that&apos;s 1–2 additional completed
              appointments per week. At $150–200 average per appointment,
              that&apos;s $8,000–10,000 annually from no-show reduction alone.
            </p>

            <h3>Insurance Revenue Recovery: $15,000 Annually</h3>
            <p>
              Automated verification + intelligent claim coding improved claim
              acceptance from 85% to 93% (8% improvement). For 1,200 claims per
              year at $100 average claim value, that&apos;s $9,600 recovered from
              previously denied claims. Additional $5,000 from better coding
              practices.
            </p>

            <h3>Patient Engagement and Recall: 20% Retention Improvement</h3>
            <p>
              Automated recall increased patient engagement. Previously inactive
              patients were re-engaged. New patients were systematically followed
              up. Patient retention improved 20%.
            </p>
            <p>
              For an 800-patient base, 20% retention improvement = 160
              additional retained patients × $1,200 average patient annual value
              = $192,000 additional annual revenue.
            </p>

            <h3>Time Freed Up: 8–10 Hours Per Week</h3>
            <p>
              Owner no longer spent evenings on insurance follow-up, patient
              communication, or recall. Insurance coordinator work was automated.
              Appointment management was simplified.
            </p>
            <p>
              Those 8–10 hours were reallocated to: more patient care (increasing
              volume), marketing/new patient acquisition, and actual rest/work-life
              balance.
            </p>
          </section>

          <section aria-labelledby="total-impact">
            <h2 id="total-impact">Total Impact</h2>
            <p>
              <strong>Revenue Growth: 30% ($180,000 increase)</strong>
            </p>
            <ul>
              <li>No-show reduction: $8,000–10,000</li>
              <li>Insurance recovery and optimization: $15,000</li>
              <li>Patient retention and engagement: $165,000+</li>
            </ul>
            <p>
              <strong>
                From $600,000 to $780,000 in annual revenue
              </strong>
            </p>
            <p>
              <strong>Profitability Improvement:</strong> Additional revenue is
              mostly profit (minimal variable cost). Operating margin improved
              5–7 percentage points.
            </p>
            <p>
              <strong>Owner Quality of Life:</strong> 8–10 hours per week freed
              up from administrative work. Better work-life balance, less
              burnout, more time for clinical dentistry (which the owner actually
              enjoys).
            </p>
          </section>

          <section aria-labelledby="quote">
            <h2 id="quote">What the Solo Dentist Said</h2>
            <blockquote>
              &ldquo;I bought this practice to do dentistry, not insurance
              verification and billing follow-up. AIDentist gave me my time back.
              I&apos;m seeing more patients, my patients are healthier and more
              engaged, and the business is growing without me burning out. For a
              solo practice, this is a game-changer.&rdquo;
            </blockquote>
            <p>
              <a href="/demo">
                See how AIDentist can help your solo practice grow
              </a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
