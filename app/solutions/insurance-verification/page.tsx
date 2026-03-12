import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Dental Insurance Verification | AIDentist",
  description:
    "Save 20+ hours per week with automated dental insurance verification. Real-time eligibility checks and benefit breakdowns powered by AI.",
  alternates: {
    canonical: "https://aidentist.com/solutions/insurance-verification",
  },
  openGraph: {
    title: "Automated Dental Insurance Verification | AIDentist",
    description:
      "Save 20+ hours per week with automated dental insurance verification. Real-time eligibility checks and benefit breakdowns powered by AI.",
    url: "https://aidentist.com/solutions/insurance-verification",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://aidentist.com/solutions" },
    { "@type": "ListItem", position: 3, name: "Insurance Verification", item: "https://aidentist.com/solutions/insurance-verification" },
  ],
};

export default function InsuranceVerificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <h1>Automated Dental Insurance Verification</h1>

        <p>
          Insurance verification is the biggest time sink in dental offices.
          Front-desk staff manually verify each patient&apos;s coverage,
          deductibles, and benefits — a process that takes 10–15 minutes per
          patient and often requires multiple phone calls. Multiply that by
          50–100 patients per week, and you&apos;re looking at 20–30 hours of
          pure manual work that could be automated.
        </p>
        <p>
          AIDentist automates the entire insurance verification process,
          delivering real-time benefit information that&apos;s faster and more
          accurate than manual verification.
        </p>

        <section aria-labelledby="hidden-cost">
          <h2 id="hidden-cost">The Hidden Cost of Manual Insurance Verification</h2>
          <p>
            Every practice knows insurance verification is tedious. What they
            often don&apos;t measure is the financial impact:
          </p>
          <ul>
            <li>
              <strong>Time waste:</strong> 20–30 hours per week per practice on
              phone calls and form filling
            </li>
            <li>
              <strong>Error rates:</strong> Manual verification has a 15–25%
              error rate (wrong benefits quoted, missed deductibles)
            </li>
            <li>
              <strong>Claim denials:</strong> Incorrect benefit information leads
              to claim denials and rework
            </li>
            <li>
              <strong>Patient confusion:</strong> Patients receive wrong cost
              estimates, creating disputes at checkout
            </li>
            <li>
              <strong>Staff frustration:</strong> Repetitive phone calls with
              insurance companies is one of the top reasons front-desk staff burn
              out and leave
            </li>
            <li>
              <strong>Revenue loss:</strong> $40,000–80,000 annually per practice
              from preventable claim denials
            </li>
          </ul>
        </section>

        <section aria-labelledby="how-it-works">
          <h2 id="how-it-works">How AIDentist Automates Insurance Verification</h2>

          <h3>Real-Time Eligibility Verification</h3>
          <p>
            The moment a patient books an appointment (or when staff enters their
            information), AIDentist queries the insurance carriers in real-time
            and returns:
          </p>
          <ul>
            <li>Current coverage status (active, inactive, terminated)</li>
            <li>Plan details (HMO, PPO, indemnity)</li>
            <li>Deductible amount and annual maximum</li>
            <li>
              Patient responsibility percentages (preventive, basic, major)
            </li>
            <li>Any waiting periods or coverage limitations</li>
          </ul>
          <p>All within seconds — no phone calls required.</p>

          <h3>Automated Benefit Breakdown</h3>
          <p>
            AIDentist doesn&apos;t just verify eligibility — it calculates what
            each patient owes:
          </p>
          <ul>
            <li>
              For preventive visits: calculates patient cost based on their plan
            </li>
            <li>
              For treatment: provides itemized estimates by procedure code
            </li>
            <li>
              For complex cases: predicts out-of-pocket maximum scenarios
            </li>
          </ul>
          <p>
            Patients see accurate cost estimates before the appointment, reducing
            billing surprises and improving treatment acceptance.
          </p>

          <h3>Intelligent Claim Coding and Optimization</h3>
          <p>
            Once treatment is completed, AIDentist analyzes every claim before
            submission:
          </p>
          <ul>
            <li>Procedure codes are validated against the patient&apos;s plan</li>
            <li>
              The system identifies optimal code combinations that maximize
              coverage
            </li>
            <li>Bundling rules are applied to reduce claim denials</li>
            <li>
              Missing information (X-rays, radiographs, medical necessity) is
              automatically flagged
            </li>
          </ul>
          <p>Result: 25% improvement in first-pass claim acceptance rates.</p>

          <h3>Denial Prevention and Recovery</h3>
          <p>When claims are denied, AIDentist automatically:</p>
          <ul>
            <li>Analyzes the denial reason</li>
            <li>Corrects missing information or coding issues</li>
            <li>
              Resubmits the claim with 99% higher acceptance probability
            </li>
            <li>Tracks denied claim recovery in real-time</li>
          </ul>
        </section>

        <section aria-labelledby="patient-experience">
          <h2 id="patient-experience">Patient Experience Improvement</h2>
          <p>
            Automated verification improves the patient experience at every
            touchpoint:
          </p>
          <ul>
            <li>
              <strong>Faster Check-In:</strong> No &ldquo;we need to verify your
              insurance&rdquo; delays — it&apos;s already done
            </li>
            <li>
              <strong>Accurate Cost Estimates:</strong> Patients know their
              out-of-pocket cost before treatment
            </li>
            <li>
              <strong>Improved Case Acceptance:</strong> Clear cost transparency
              increases treatment acceptance rates by 30%
            </li>
            <li>
              <strong>Fewer Payment Disputes:</strong> When patients know their
              costs upfront, billing disputes drop dramatically
            </li>
            <li>
              <strong>Transparent Communication:</strong> Staff can explain
              coverage clearly without holding on phone lines
            </li>
          </ul>
        </section>

        <section aria-labelledby="results">
          <h2 id="results">Real Results</h2>
          <p>Practices using AIDentist&apos;s insurance verification see:</p>
          <ul>
            <li>20+ hours per week saved on manual verification (per practice)</li>
            <li>25% improvement in first-pass claim acceptance rates</li>
            <li>
              $40,000–80,000 annual revenue recovery from prevented claim denials
            </li>
            <li>
              30% increase in treatment case acceptance from accurate cost
              estimates
            </li>
            <li>
              Virtually zero billing disputes (claims are pre-verified and
              accurate)
            </li>
            <li>
              Staff satisfaction improvement from eliminating repetitive
              insurance calls
            </li>
          </ul>
        </section>

        <section aria-labelledby="pms-integration">
          <h2 id="pms-integration">Integration with Your PMS</h2>
          <p>
            AIDentist verification integrates with all major dental PMS:
          </p>
          <ul>
            <li>Dentrix</li>
            <li>Eaglesoft</li>
            <li>Open Dental</li>
            <li>Curve</li>
          </ul>
          <p>
            Verification data is automatically stored in patient records. No
            manual entry. No duplicate data.
          </p>
          <p>
            <a href="/demo" className="cta-button">
              Automate Your Verification Process
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
