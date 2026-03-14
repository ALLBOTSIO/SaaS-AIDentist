import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AIDentist",
  description:
    "AIDentist privacy policy: How we protect patient data and comply with HIPAA regulations.",
  alternates: {
    canonical: "https://aidentist.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated: March 2026</strong>
      </p>
      <p>
        AIDentist (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
        operates as a dental practice automation platform. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information.
      </p>

      <section aria-labelledby="information-we-collect">
        <h2 id="information-we-collect">1. Information We Collect</h2>
        <p>
          We collect information you provide directly and information we collect
          automatically:
        </p>
        <ul>
          <li>
            <strong>Account Information:</strong> Name, email, phone, practice
            name, address
          </li>
          <li>
            <strong>Patient Data:</strong> Patient demographics, appointment
            history, insurance information (collected and stored on your behalf)
          </li>
          <li>
            <strong>Usage Data:</strong> How you interact with our platform
            (logins, features used, time spent)
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, device
            type
          </li>
        </ul>
      </section>

      <section aria-labelledby="how-we-use">
        <h2 id="how-we-use">2. How We Use Your Information</h2>
        <ul>
          <li>Providing and improving the AIDentist platform</li>
          <li>
            Automating workflows (appointment scheduling, insurance verification,
            patient engagement)
          </li>
          <li>Generating analytics and reports</li>
          <li>Communicating with you about service updates</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section aria-labelledby="hipaa">
        <h2 id="hipaa">3. HIPAA Compliance</h2>
        <p>
          AIDentist is designed to be HIPAA-compliant. We handle protected health
          information (PHI) as required by HIPAA regulations:
        </p>
        <ul>
          <li>
            Data is encrypted in transit (TLS/SSL) and at rest (AES-256)
          </li>
          <li>Access is restricted to authorized users and logged</li>
          <li>Regular security audits and penetration testing</li>
          <li>
            Business Associate Agreement (BAA) available upon request
          </li>
        </ul>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">4. Data Retention</h2>
        <p>
          We retain patient data as long as your account is active. Upon account
          closure, you have 30 days to export your data. After 30 days, data is
          deleted according to HIPAA requirements.
        </p>
      </section>

      <section aria-labelledby="sharing">
        <h2 id="sharing">5. Sharing Information</h2>
        <p>
          We do not sell, trade, or rent personal information. We share
          information only with:
        </p>
        <ul>
          <li>
            Service providers who support platform operations (data centers,
            security vendors)
          </li>
          <li>Legal authorities if required by law</li>
          <li>
            Your insurance carriers and PMS system as part of normal platform
            operation
          </li>
        </ul>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">6. Security</h2>
        <p>
          AIDentist implements comprehensive security measures including
          encryption, access controls, intrusion detection, and regular audits.
          However, no security system is 100% guaranteed.
        </p>
      </section>

      <section aria-labelledby="your-rights">
        <h2 id="your-rights">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>
            Request deletion (subject to legal retention requirements)
          </li>
          <li>Data portability (export your data)</li>
        </ul>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">8. Contact Us</h2>
        <p>
          For privacy questions:{" "}
          <a href="mailto:privacy@aidentist.com">privacy@aidentist.com</a>
        </p>
      </section>
    </main>
  );
}
