import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AIDentist",
  description:
    "AIDentist Terms of Service: Legal agreement governing use of the dental practice automation platform.",
  alternates: {
    canonical: "https://aidentist.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <h1>Terms of Service</h1>
      <p>
        <strong>Last Updated: March 2026</strong>
      </p>
      <p>
        These Terms of Service (&ldquo;Agreement&rdquo;) govern your use of the
        AIDentist platform and services. By accessing or using AIDentist, you
        agree to be bound by these terms.
      </p>

      <section aria-labelledby="service-description">
        <h2 id="service-description">1. Service Description</h2>
        <p>
          AIDentist provides a cloud-based platform for automating dental
          practice workflows including appointment scheduling, insurance
          verification, patient engagement, and revenue cycle management. The
          service integrates with your existing practice management system (PMS)
          to extend functionality with AI-powered automation.
        </p>
      </section>

      <section aria-labelledby="user-responsibilities">
        <h2 id="user-responsibilities">2. User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining confidentiality of account credentials</li>
          <li>
            Ensuring all users of your account comply with these terms
          </li>
          <li>
            Ensuring your use complies with all applicable laws and regulations
            (including HIPAA)
          </li>
          <li>Backing up your data regularly</li>
          <li>Notifying us of unauthorized account access</li>
        </ul>
      </section>

      <section aria-labelledby="acceptable-use">
        <h2 id="acceptable-use">3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the service for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to the service</li>
          <li>
            Disrupt or impair the service&apos;s availability or integrity
          </li>
          <li>
            Share credentials or allow unauthorized users to access the service
          </li>
          <li>
            Reverse-engineer or copy the platform&apos;s technology
          </li>
        </ul>
      </section>

      <section aria-labelledby="ip">
        <h2 id="ip">4. Intellectual Property</h2>
        <p>
          AIDentist and all platform content are protected by copyright and
          intellectual property laws. You may use the service as licensed, but do
          not own any intellectual property rights to the platform.
        </p>
      </section>

      <section aria-labelledby="liability">
        <h2 id="liability">5. Limitation of Liability</h2>
        <p>
          AIDentist is provided &ldquo;as-is&rdquo; without warranties. We are
          not liable for indirect, incidental, or consequential damages, even if
          advised of the possibility of such damages.
        </p>
      </section>

      <section aria-labelledby="data">
        <h2 id="data">6. Data and Confidentiality</h2>
        <p>
          We maintain your data according to our Privacy Policy and HIPAA
          requirements. We execute a Business Associate Agreement (BAA) if
          required. You retain ownership of all patient data.
        </p>
      </section>

      <section aria-labelledby="termination">
        <h2 id="termination">7. Term and Termination</h2>
        <p>
          Your service agreement continues until terminated. Either party may
          terminate with 30 days&apos; written notice. Upon termination, you have
          30 days to export your data before deletion.
        </p>
      </section>

      <section aria-labelledby="modifications">
        <h2 id="modifications">8. Modifications to Terms</h2>
        <p>
          We may update these Terms occasionally. We&apos;ll notify you of
          material changes. Continued use constitutes acceptance of updated terms.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">9. Contact</h2>
        <p>
          For terms questions:{" "}
          <a href="mailto:legal@aidentist.com">legal@aidentist.com</a>
        </p>
      </section>
    </main>
  );
}
