import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIDentist Integrations | Dental Software",
  description:
    "AIDentist integrates with Dentrix, Eaglesoft, Open Dental, Curve, and more. Seamless connection to your existing dental practice management system.",
  alternates: {
    canonical: "https://aidentist.com/integrations",
  },
  openGraph: {
    title: "AIDentist Integrations | Dental Software",
    description:
      "AIDentist integrates with Dentrix, Eaglesoft, Open Dental, Curve, and more. Seamless connection to your existing dental practice management system.",
    url: "https://aidentist.com/integrations",
  },
};

export default function IntegrationsPage() {
  return (
    <main>
      <h1>Seamless Integrations with Your Existing PMS</h1>

      <p>
        AIDentist works with your current practice management system. No
        replacement needed. No data migration. Just connect and start automating.
      </p>

      <section aria-labelledby="supported-pms">
        <h2 id="supported-pms">Supported PMS Integrations</h2>

        <h3>Dentrix (Henry Schein)</h3>
        <p>
          Full bidirectional integration with Dentrix. Patient data,
          appointments, insurance, and claims sync automatically. AIDentist
          updates feed back to Dentrix in real-time. Supported in all Dentrix
          versions from G6 forward.
        </p>

        <h3>Eaglesoft (Patterson)</h3>
        <p>
          Complete integration with Eaglesoft cloud and on-premise. Appointment
          optimization, insurance verification, and patient engagement all sync
          seamlessly with your Eaglesoft data.
        </p>

        <h3>Open Dental</h3>
        <p>
          API-based integration with Open Dental. Real-time data synchronization
          for scheduling, insurance, and patient communication. Open
          Dental&apos;s flexible API enables deep customization.
        </p>

        <h3>Curve</h3>
        <p>
          Modern cloud-native integration with Curve platform. Leverages
          Curve&apos;s REST API for seamless data flow and real-time updates.
        </p>

        <h3>Other PMS Systems</h3>
        <p>
          If your practice uses a different PMS system, we can build custom
          integrations via SFTP, REST API, or database connections. Contact our
          team for compatibility assessment.
        </p>
      </section>

      <section aria-labelledby="what-syncs">
        <h2 id="what-syncs">What Syncs Automatically</h2>
        <ul>
          <li>
            <strong>Patient Data:</strong> Demographics, contact info, insurance,
            treatment history
          </li>
          <li>
            <strong>Appointments:</strong> Schedule, confirmation status,
            no-show tracking
          </li>
          <li>
            <strong>Insurance:</strong> Verification results, benefit information,
            claim status
          </li>
          <li>
            <strong>Treatment Plans:</strong> Proposed treatment, procedure codes,
            cost estimates
          </li>
          <li>
            <strong>Clinical Notes:</strong> Treatment completed, outcomes,
            follow-up needs
          </li>
          <li>
            <strong>Financial:</strong> Payments, adjustments, outstanding
            balances
          </li>
        </ul>
      </section>

      <section aria-labelledby="no-replacement">
        <h2 id="no-replacement">No PMS Replacement Needed</h2>
        <p>
          AIDentist doesn&apos;t replace your PMS. It extends it. Your PMS
          remains the source of truth for clinical and financial data. AIDentist
          adds intelligence on top — automating workflows your PMS wasn&apos;t
          designed to handle.
        </p>
        <p>
          <a href="/demo">Get integrated in minutes</a>
        </p>
      </section>
    </main>
  );
}
