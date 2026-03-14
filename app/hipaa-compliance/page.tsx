import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Compliance | AIDentist Security",
  description:
    "AIDentist is built with HIPAA compliance at its core. Learn about our security measures, data handling, and privacy protections for dental practices.",
  alternates: {
    canonical: "https://aidentist.com/hipaa-compliance",
  },
  openGraph: {
    title: "HIPAA Compliance | AIDentist Security",
    description:
      "AIDentist is built with HIPAA compliance at its core. Learn about our security measures, data handling, and privacy protections for dental practices.",
    url: "https://aidentist.com/hipaa-compliance",
  },
};

export default function HIPAACompliancePage() {
  return (
    <main>
      <h1>HIPAA Compliance and Security</h1>

      <p>
        Patient data is sacred. AIDentist is built from the ground up to comply
        with HIPAA (Health Insurance Portability and Accountability Act)
        regulations and protect sensitive patient information.
      </p>

      <section aria-labelledby="what-is-hipaa">
        <h2 id="what-is-hipaa">What Is HIPAA?</h2>
        <p>
          HIPAA is a federal law that protects the privacy and security of health
          information. Dental practices must comply with HIPAA when handling
          patient health information. Software systems that touch patient data
          must also be HIPAA-compliant.
        </p>
      </section>

      <section aria-labelledby="our-compliance">
        <h2 id="our-compliance">AIDentist&apos;s HIPAA Compliance</h2>

        <h3>Business Associate Agreement (BAA)</h3>
        <p>
          AIDentist is a covered entity under HIPAA. We execute a Business
          Associate Agreement with every practice that uses our platform. This
          legal agreement establishes our mutual responsibilities for protecting
          patient data.
        </p>

        <h3>Encryption</h3>
        <ul>
          <li>
            <strong>In Transit:</strong> All data moving between your practice,
            our servers, and your PMS is encrypted using TLS 1.2/1.3
          </li>
          <li>
            <strong>At Rest:</strong> All patient data stored on our servers is
            encrypted using AES-256 encryption
          </li>
          <li>
            <strong>Key Management:</strong> Encryption keys are managed securely
            and rotated regularly
          </li>
        </ul>

        <h3>Access Controls</h3>
        <ul>
          <li>
            Authentication: Multi-factor authentication available for
            high-security accounts
          </li>
          <li>
            Authorization: Role-based access control — staff members can only
            access data they need
          </li>
          <li>
            Logging: All access to patient data is logged and auditable
          </li>
          <li>
            Monitoring: Continuous monitoring for suspicious access patterns
          </li>
        </ul>

        <h3>Data Segmentation</h3>
        <p>
          Each practice&apos;s data is completely separated in our system. One
          practice cannot access another&apos;s patient data.
        </p>

        <h3>Audit Controls</h3>
        <p>
          Comprehensive audit logging of all system activities. Logs are retained
          for 1 year and made available for compliance audits.
        </p>

        <h3>Integrity Controls</h3>
        <p>
          Mechanisms to ensure patient data is not altered or destroyed. Data
          validation, checksums, and database integrity checks.
        </p>

        <h3>Transmission Security</h3>
        <p>
          All data transmitted between systems is encrypted and authenticated.
        </p>
      </section>

      <section aria-labelledby="security-infrastructure">
        <h2 id="security-infrastructure">Security and Infrastructure</h2>

        <h3>Infrastructure Security</h3>
        <ul>
          <li>
            Cloud-hosted on AWS with security certifications (SOC 2 Type II
            compliant)
          </li>
          <li>Redundant data centers for disaster recovery</li>
          <li>Regular backups with tested recovery procedures</li>
          <li>Firewall and intrusion detection systems</li>
          <li>DDoS protection</li>
        </ul>

        <h3>Regular Testing</h3>
        <ul>
          <li>
            Annual penetration testing by third-party security firms
          </li>
          <li>Quarterly vulnerability scans</li>
          <li>Continuous security monitoring</li>
          <li>Incident response plan tested quarterly</li>
        </ul>

        <h3>Employee Security</h3>
        <ul>
          <li>
            HIPAA training for all employees who touch patient data
          </li>
          <li>
            Background checks for team members with system access
          </li>
          <li>Strict confidentiality agreements</li>
          <li>
            Access limited to employees with legitimate business purpose
          </li>
        </ul>
      </section>

      <section aria-labelledby="your-responsibilities">
        <h2 id="your-responsibilities">Your Responsibilities</h2>
        <p>
          AIDentist handles HIPAA compliance on our side, but practices have
          responsibilities too:
        </p>
        <ul>
          <li>Train your staff on HIPAA requirements</li>
          <li>
            Maintain strong passwords and enable multi-factor authentication
          </li>
          <li>Don&apos;t share login credentials</li>
          <li>Report suspicious activity to us immediately</li>
          <li>Limit access to staff who need it</li>
          <li>Ensure your PMS is also HIPAA-compliant</li>
        </ul>
      </section>

      <section aria-labelledby="breach-notification">
        <h2 id="breach-notification">Breach Notification</h2>
        <p>
          If a HIPAA breach occurs, we will notify you immediately and provide
          all information necessary for regulatory reporting.
        </p>
      </section>

      <section aria-labelledby="compliance-support">
        <h2 id="compliance-support">Compliance Support</h2>
        <p>We provide documentation and support for:</p>
        <ul>
          <li>Risk assessments</li>
          <li>Business continuity plans</li>
          <li>Incident response procedures</li>
          <li>HIPAA audit preparation</li>
        </ul>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Questions About Compliance?</h2>
        <p>
          Contact our security team:{" "}
          <a href="mailto:security@aidentist.com">security@aidentist.com</a>
        </p>
      </section>
    </main>
  );
}
