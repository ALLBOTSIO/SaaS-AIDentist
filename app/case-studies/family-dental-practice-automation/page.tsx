import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How a 3-Provider Practice Cut No-Shows by 42%",
  description:
    "Composite case study: 3-provider family practice reduced no-shows 42%, saved 25+ hours/week on insurance, increased revenue $180K annually with AIDentist AI automation.",
  alternates: {
    canonical:
      "https://aidentist.com/case-studies/family-dental-practice-automation",
  },
  openGraph: {
    title: "How a 3-Provider Practice Cut No-Shows by 42%",
    description:
      "Composite case study: 3-provider family practice reduced no-shows 42%, saved 25+ hours/week on insurance, increased revenue $180K annually with AIDentist AI automation.",
    url: "https://aidentist.com/case-studies/family-dental-practice-automation",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://aidentist.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "Family Dental Practice Automation", item: "https://aidentist.com/case-studies/family-dental-practice-automation" },
  ],
};

export default function CaseStudy1() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <article>
          <h1>
            How a 3-Provider Family Dental Practice Cut No-Shows by 42% and
            Saved $180K Annually
          </h1>

          <section aria-labelledby="the-practice">
            <h2 id="the-practice">The Practice</h2>
            <p>
              A 3-provider family dental practice in a mid-sized U.S. city.
              Established 15 years, strong reputation, solid patient base of
              2,000+ active patients. Like many practices, they were profitable
              but operationally inefficient — lots of manual work, lots of staff
              time spent on administrative tasks instead of patient care.
            </p>
          </section>

          <section aria-labelledby="the-challenge">
            <h2 id="the-challenge">The Challenge</h2>
            <p>
              <strong>No-Show Problem:</strong> 18% appointment no-show rate.
              That&apos;s 200+ missed appointments per year, costing roughly
              $30,000+ in lost revenue ($150 per slot × 200 no-shows).
            </p>
            <p>
              <strong>Insurance Verification Burden:</strong> One full-time
              coordinator spent 25+ hours per week on insurance phone calls and
              manual verification. Errors were common — patients received wrong
              cost estimates, leading to billing disputes.
            </p>
            <p>
              <strong>Manual Recall Process:</strong> Recall was handled via
              handwritten cards and occasional phone calls. Unstructured.
              Unpredictable results. Low engagement from patients.
            </p>
            <p>
              <strong>Staff Turnover:</strong> High front-desk burnout from
              repetitive administrative tasks. Two coordinators had left in the
              past year. Finding and training replacement staff was expensive and
              disruptive.
            </p>
          </section>

          <section aria-labelledby="the-solution">
            <h2 id="the-solution">The Solution</h2>
            <p>The practice implemented AIDentist to automate:</p>
            <ul>
              <li>
                <strong>Appointment scheduling:</strong> Predictive no-show
                identification and intelligent reminders
              </li>
              <li>
                <strong>Insurance verification:</strong> Real-time eligibility
                checking and claim optimization
              </li>
              <li>
                <strong>Patient engagement:</strong> Automated recall and
                pre-appointment communication
              </li>
            </ul>
            <p>
              Implementation took 2 weeks (setup, integration with their Dentrix
              PMS, staff training). Go-live was smooth with minimal disruption.
            </p>
          </section>

          <section aria-labelledby="the-results">
            <h2 id="the-results">The Results</h2>

            <h3>No-Show Reduction: 42%</h3>
            <p>
              Within the first month, no-show rate dropped from 18% to 10.6% —
              a 42% improvement. This was driven by:
            </p>
            <ul>
              <li>
                Intelligent reminders reaching patients at optimal times
              </li>
              <li>
                Automated confirmations catching forgotten appointments early
              </li>
              <li>Intelligent rescheduling filling cancelled slots</li>
            </ul>
            <p>
              Impact: 40+ additional completed appointments per month. At
              $150–200 average per appointment, that&apos;s $6,000–8,000
              additional revenue per month ($72,000–96,000 annually).
            </p>

            <h3>Insurance Verification Automation: 25+ Hours/Week Saved</h3>
            <p>
              The full-time insurance coordinator now spends &lt;2 hours per day
              on verification (down from 5). Instead of phone calls, she handles
              exception cases and answers patient questions.
            </p>
            <p>
              Impact: Staff time redirected to patient-facing work, coordinator
              satisfaction improved, one FTE worth of labor saved.
            </p>

            <h3>Claim Acceptance Improvement: 24%</h3>
            <p>
              Previously, 15% of submitted claims were denied. With automated
              verification and intelligent coding, denial rate dropped to 8%.
              Denied claims are now automatically resubmitted with correct
              information.
            </p>
            <p>
              Impact: $15,000–20,000 additional annual revenue from improved
              claim acceptance.
            </p>

            <h3>Patient Engagement: 40% Recall Acceptance</h3>
            <p>
              Automated recall campaign replaced manual recall postcards.
              Engagement metrics:
            </p>
            <ul>
              <li>
                40% of recalled patients schedule within 2 weeks (vs. 8% with
                postcards)
              </li>
              <li>50+ additional patient visits per month from recall</li>
              <li>Patient retention improved 20%</li>
            </ul>
            <p>
              Impact: $10,000–15,000 monthly revenue from improved recall and
              retention.
            </p>
          </section>

          <section aria-labelledby="total-impact">
            <h2 id="total-impact">Total Impact</h2>
            <p>
              <strong>Annual Revenue Increase: $180,000+</strong>
            </p>
            <ul>
              <li>No-show reduction: $72,000–96,000</li>
              <li>Claim acceptance improvement: $15,000–20,000</li>
              <li>Recall and retention: $120,000–180,000</li>
            </ul>
            <p>
              <strong>Cost Savings:</strong> 1 FTE staff coordinator role
              redefined, reducing payroll pressure
            </p>
            <p>
              <strong>Intangibles:</strong> Staff satisfaction improved, patient
              experience improved, practice owner has more time for patient care
              instead of administrative firefighting
            </p>
          </section>

          <section aria-labelledby="quote">
            <h2 id="quote">What the Practice Owner Said</h2>
            <blockquote>
              &ldquo;AIDentist handles the work that was burning out our team.
              Our coordinator went from spending all day on insurance phone calls
              to actually helping patients. No-shows dropped immediately. And the
              revenue impact is clear. It paid for itself in 60 days.&rdquo;
            </blockquote>
            <p>
              <a href="/demo">See how AIDentist can help your practice</a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
