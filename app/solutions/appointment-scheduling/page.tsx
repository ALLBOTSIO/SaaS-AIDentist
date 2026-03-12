import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Dental Appointment Scheduling | AIDentist",
  description:
    "Reduce no-shows by 40% with AI-powered dental appointment scheduling. Smart reminders, predictive booking, and automated confirmations.",
  alternates: {
    canonical: "https://aidentist.com/solutions/appointment-scheduling",
  },
  openGraph: {
    title: "AI Dental Appointment Scheduling | AIDentist",
    description:
      "Reduce no-shows by 40% with AI-powered dental appointment scheduling. Smart reminders, predictive booking, and automated confirmations.",
    url: "https://aidentist.com/solutions/appointment-scheduling",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://aidentist.com/solutions" },
    { "@type": "ListItem", position: 3, name: "Appointment Scheduling", item: "https://aidentist.com/solutions/appointment-scheduling" },
  ],
};

export default function AppointmentSchedulingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <h1>AI Dental Appointment Scheduling</h1>

        <p>
          Dental appointment no-shows cost practices an average of $150 per
          missed slot. With an average no-show rate of 15–20%, a 20-chair
          practice loses $150,000–200,000 annually to empty chairs.
          AIDentist&apos;s AI scheduling system reduces no-shows by 40% through
          predictive modeling, intelligent reminders, and automated optimization.
        </p>

        <section aria-labelledby="cost-of-noshows">
          <h2 id="cost-of-noshows">The Cost of No-Shows in Dental</h2>
          <p>A single missed appointment isn&apos;t just lost revenue — it cascades:</p>
          <ul>
            <li>Provider time wasted ($100–300 per hour)</li>
            <li>Hygienist and assistant idle time</li>
            <li>Treatment delays affecting patient outcomes</li>
            <li>Emergency gaps left unfilled</li>
            <li>Staff frustration and low morale</li>
          </ul>
          <p>15–20% no-show rates are normal in dental, but they don&apos;t have to be.</p>
        </section>

        <section aria-labelledby="how-40-percent">
          <h2 id="how-40-percent">How AIDentist Reduces No-Shows by 40%</h2>

          <h3>Predictive No-Show Identification</h3>
          <p>
            AIDentist&apos;s AI analyzes hundreds of data points to predict which
            appointments are high-risk for no-shows: patient history, appointment
            time, day of week, procedure type, weather, local events. Once
            identified, high-risk appointments receive automated interventions.
          </p>

          <h3>Intelligent Reminder Timing</h3>
          <p>
            Generic reminder systems send the same message to everyone. AIDentist
            personalizes:
          </p>
          <ul>
            <li>
              Patients with high no-show risk get multiple reminders (SMS 3 days
              before, email 1 day before, automated call 4 hours before)
            </li>
            <li>
              Reliable patients get a single reminder (24 hours via preferred
              channel)
            </li>
            <li>Reminders are timed based on patient behavior patterns</li>
            <li>
              Messages include treatment details, cost information, and clear
              cancellation instructions
            </li>
          </ul>

          <h3>Automated Confirmations</h3>
          <p>
            When patients book appointments through your website or via phone,
            AIDentist automatically sends confirmations with:
          </p>
          <ul>
            <li>
              Appointment details (date, time, provider, address, parking info)
            </li>
            <li>Treatment information and pre-appointment instructions</li>
            <li>Insurance cost estimates</li>
            <li>Easy one-click confirmation or rescheduling</li>
          </ul>

          <h3>Intelligent Rescheduling</h3>
          <p>
            When a patient cancels or no-shows, AIDentist doesn&apos;t leave the
            slot empty. The system:
          </p>
          <ul>
            <li>Automatically identifies patients on the waitlist</li>
            <li>
              Matches them to the available appointment based on treatment needs
              and preferences
            </li>
            <li>Sends booking offers with one-click acceptance</li>
            <li>Fills empty chairs within minutes of cancellation</li>
          </ul>
        </section>

        <section aria-labelledby="schedule-optimization">
          <h2 id="schedule-optimization">Schedule Optimization</h2>
          <p>
            Beyond reducing no-shows, AIDentist optimizes your entire schedule:
          </p>

          <h3>Provider Load Balancing</h3>
          <p>
            The AI balances patient bookings to keep all providers equally busy,
            eliminating situations where one provider is booked solid while
            another has gaps.
          </p>

          <h3>Chair and Resource Optimization</h3>
          <p>
            Complex appointments are scheduled in surgical suites; routine
            cleanings in standard chairs. Hygiene appointments are sequenced
            efficiently with provider schedules.
          </p>

          <h3>Treatment Sequencing</h3>
          <p>
            Multi-appointment treatments (like crown preparation and seating) are
            automatically sequenced to minimize patient visits and maximize
            efficiency.
          </p>

          <h3>Break and Buffer Management</h3>
          <p>
            AIDentist automatically maintains optimal breaks for staff lunch,
            disinfection, and urgent openings for emergency patients.
          </p>
        </section>

        <section aria-labelledby="patient-convenience">
          <h2 id="patient-convenience">Patient Convenience Features</h2>
          <p>Easier booking means more appointments confirmed:</p>
          <ul>
            <li>
              <strong>Online Self-Booking:</strong> Patients book their own
              appointments 24/7 through your website
            </li>
            <li>
              <strong>Text Reminders:</strong> SMS confirmations and reminders
              reach patients where they check their phones
            </li>
            <li>
              <strong>One-Click Rescheduling:</strong> Patients can reschedule
              with a single click rather than calling
            </li>
            <li>
              <strong>Calendar Integration:</strong> Appointments sync
              automatically to patient calendars (Apple, Google, Outlook)
            </li>
            <li>
              <strong>Treatment Transparency:</strong> Patients see estimated
              costs and appointment duration upfront
            </li>
          </ul>
        </section>

        <section aria-labelledby="results">
          <h2 id="results">Real Results</h2>
          <p>Practices using AIDentist&apos;s scheduling see:</p>
          <ul>
            <li>40% reduction in no-shows (15% down to 9%)</li>
            <li>20 additional completed appointments per month (50-chair practice)</li>
            <li>$30,000–60,000 annual revenue recovery</li>
            <li>8–12 hours per week saved on appointment management</li>
            <li>90% patient satisfaction with booking experience</li>
          </ul>
          <p>
            <a href="/demo" className="cta-button">
              See Your Schedule Optimized
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
