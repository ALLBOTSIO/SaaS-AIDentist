import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Patient Engagement Software | AIDentist",
  description:
    "Boost patient retention with AI-powered engagement. Automated recall, review management, and personalized communication for dental practices.",
  alternates: {
    canonical: "https://aidentist.com/solutions/patient-engagement",
  },
  openGraph: {
    title: "Dental Patient Engagement Software | AIDentist",
    description:
      "Boost patient retention with AI-powered engagement. Automated recall, review management, and personalized communication for dental practices.",
    url: "https://aidentist.com/solutions/patient-engagement",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://aidentist.com/solutions" },
    { "@type": "ListItem", position: 3, name: "Patient Engagement", item: "https://aidentist.com/solutions/patient-engagement" },
  ],
};

export default function PatientEngagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <h1>Dental Patient Engagement Software</h1>

        <p>
          Patient retention is the most profitable lever for dental practice
          growth. Keeping an existing patient costs 1/10th the effort of
          acquiring a new one. Yet most dental practices leave patient engagement
          to chance — sporadic recall postcards, inconsistent communication, and
          no system to track who&apos;s due for which treatment.
        </p>
        <p>
          AIDentist automates intelligent patient engagement, increasing
          retention rates by 18–25% and generating $30,000–50,000 in additional
          annual revenue per practice.
        </p>

        <section aria-labelledby="retention-opportunity">
          <h2 id="retention-opportunity">The Retention Opportunity</h2>
          <p>
            The math is simple: a 20% improvement in patient retention means 20%
            more revenue from your existing patient base. For a practice with
            1,500 active patients:
          </p>
          <ul>
            <li>20% retention improvement = 300 additional retained patients</li>
            <li>
              At average patient value of $1,200/year = $360,000 additional
              annual revenue
            </li>
            <li>
              Plus improved lifetime value from longer patient relationships
            </li>
          </ul>
          <p>
            Yet most practices have no systematic recall process. Patients drift
            away silently.
          </p>
        </section>

        <section aria-labelledby="recall">
          <h2 id="recall">Automated Intelligent Recall</h2>
          <p>
            AIDentist replaces manual recall lists with intelligent, automated
            recall that triggers based on clinical need:
          </p>
          <ul>
            <li>
              <strong>Procedure-Based Recall:</strong> Recall timing is based on
              what treatment the patient received (prophylaxis every 6 months,
              periodontal patients every 3 months, implant patients every 6
              months)
            </li>
            <li>
              <strong>Risk-Based Recall:</strong> High-risk patients (heavy
              smokers, periodontal disease, poor oral hygiene) receive more
              frequent, targeted recall messages
            </li>
            <li>
              <strong>Personalized Communication:</strong> Each recall message
              references the patient&apos;s last visit, treatment history, and
              personalized care recommendations
            </li>
            <li>
              <strong>Multi-Channel Delivery:</strong> Recall messages are sent
              via SMS (highest engagement), email (for detailed info), and phone
              (for high-value patients)
            </li>
            <li>
              <strong>Optimal Timing:</strong> Messages are sent when patients
              are most likely to respond (day of week, time of day based on their
              behavior patterns)
            </li>
            <li>
              <strong>One-Click Booking:</strong> Recall messages include direct
              appointment links that let patients book in seconds
            </li>
          </ul>
          <p>
            <strong>Result:</strong> 40–50% recall acceptance rates (vs. 10–15%
            with traditional postcards)
          </p>
        </section>

        <section aria-labelledby="pre-appointment">
          <h2 id="pre-appointment">Pre-Appointment Communication</h2>
          <p>
            The days before an appointment are critical for case acceptance and
            no-show prevention. AIDentist automates pre-appointment engagement:
          </p>
          <ul>
            <li>
              <strong>Treatment Education:</strong> Patients receive information
              about recommended treatment (benefits, process, timeline) before
              the appointment, improving case acceptance by 30%
            </li>
            <li>
              <strong>Cost Transparency:</strong> Insurance benefits and patient
              cost estimates are provided upfront, eliminating billing surprises
            </li>
            <li>
              <strong>Pre-Appointment Instructions:</strong> For complex
              procedures, patients get pre-op instructions (fasting, medication
              adjustments, special preparations)
            </li>
            <li>
              <strong>Anxiety Reduction:</strong> New patient and anxious patient
              pathways include calming information and success stories
            </li>
            <li>
              <strong>Document Completion:</strong> Medical history and consent
              forms are sent digitally pre-appointment, reducing check-in time
            </li>
          </ul>
        </section>

        <section aria-labelledby="post-appointment">
          <h2 id="post-appointment">Post-Appointment Engagement</h2>
          <p>
            After treatment, engagement continues to drive outcomes and
            satisfaction:
          </p>
          <ul>
            <li>
              <strong>Post-Care Instructions:</strong> Care instructions specific
              to the treatment received (post-operative care, medication regimen,
              activity restrictions)
            </li>
            <li>
              <strong>Satisfaction Feedback:</strong> Automated surveys capture
              patient satisfaction while the experience is fresh
            </li>
            <li>
              <strong>Follow-Up Treatment Scheduling:</strong> Patients who need
              follow-up (crown delivery, post-surgical check) are automatically
              reminded and re-booked
            </li>
            <li>
              <strong>Recovery Tracking:</strong> For major procedures, automated
              check-ins confirm recovery is progressing normally
            </li>
          </ul>
        </section>

        <section aria-labelledby="reputation">
          <h2 id="reputation">Online Reputation Management</h2>
          <p>
            Your online reviews drive new patient acquisition. AIDentist
            automates review generation:
          </p>
          <ul>
            <li>
              <strong>Smart Review Requests:</strong> Only satisfied patients
              receive review requests (dissatisfied patients are offered the
              chance to resolve issues before posting)
            </li>
            <li>
              <strong>Timing Optimization:</strong> Review requests are sent when
              satisfaction is highest (24–48 hours after positive experiences)
            </li>
            <li>
              <strong>Platform Distribution:</strong> Requests include direct
              links to Google, Facebook, Yelp, and Healthgrades
            </li>
            <li>
              <strong>Response Management:</strong> All online reviews are
              monitored and tracked in one dashboard
            </li>
            <li>
              <strong>Reputation Impact:</strong> 35% more reviews generated,
              leading to improved local search rankings and new patient
              acquisition
            </li>
          </ul>
        </section>

        <section aria-labelledby="treatment-acceptance">
          <h2 id="treatment-acceptance">Treatment Acceptance Campaigns</h2>
          <p>
            For patients diagnosed with treatment, automated campaigns drive
            acceptance:
          </p>
          <ul>
            <li>Initial case presentation (video/diagram/written explanation)</li>
            <li>Insurance benefit clarification</li>
            <li>Treatment timeline and process</li>
            <li>Success rate and testimonial messaging</li>
            <li>Appointment booking offer</li>
            <li>Follow-up for non-responders</li>
          </ul>
          <p>
            <strong>Result:</strong> 30% improvement in major case acceptance
          </p>
        </section>

        <section aria-labelledby="segmentation">
          <h2 id="segmentation">Patient Segmentation</h2>
          <p>
            Not all patients engage the same way. AIDentist automatically
            segments and personalizes:
          </p>
          <ul>
            <li>New patients vs. established patients</li>
            <li>High-value patients vs. routine cleanings</li>
            <li>Anxious patients vs. confident patients</li>
            <li>Digital-native (SMS/app) vs. traditional (email/phone)</li>
            <li>High engagement vs. at-risk churn</li>
          </ul>
          <p>
            Each segment receives tailored messaging and frequency that
            resonates.
          </p>
        </section>

        <section aria-labelledby="results">
          <h2 id="results">Real Results</h2>
          <p>Practices using AIDentist patient engagement see:</p>
          <ul>
            <li>18–25% improvement in patient retention rates</li>
            <li>
              40–50% recall acceptance rates (vs. 10–15% with postcards)
            </li>
            <li>30% increase in major case acceptance</li>
            <li>
              35% more online reviews (improved local search rankings)
            </li>
            <li>$30,000–50,000 additional annual revenue</li>
            <li>
              8–10 hours per week saved on manual recall and communication
            </li>
          </ul>
          <p>
            <a href="/demo" className="cta-button">
              Automate Your Patient Engagement
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
