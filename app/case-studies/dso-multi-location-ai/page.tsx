import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How a 12-Location DSO Standardized Operations",
  description:
    "DSO case study: 12-location dental service organization standardized workflows, improved consistency, and centralized analytics with AIDentist multi-location platform.",
  alternates: {
    canonical: "https://aidentist.com/case-studies/dso-multi-location-ai",
  },
  openGraph: {
    title: "How a 12-Location DSO Standardized Operations",
    description:
      "DSO case study: 12-location dental service organization standardized workflows, improved consistency, and centralized analytics with AIDentist multi-location platform.",
    url: "https://aidentist.com/case-studies/dso-multi-location-ai",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://aidentist.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "DSO Multi-Location AI", item: "https://aidentist.com/case-studies/dso-multi-location-ai" },
  ],
};

export default function CaseStudy2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <article>
          <h1>
            How a 12-Location DSO Standardized Operations and Improved
            Consistency with AI
          </h1>

          <section aria-labelledby="the-dso">
            <h2 id="the-dso">The DSO</h2>
            <p>
              A 12-location dental service organization with 50+ providers.
              Owned and managed centrally, but each location operated with some
              autonomy. This created inconsistency: Some locations had excellent
              no-show rates (10%), others terrible (22%). Some locations had
              efficient insurance verification processes, others lost thousands
              to claim denials annually.
            </p>
          </section>

          <section aria-labelledby="the-challenge">
            <h2 id="the-challenge">The Challenge</h2>
            <p>
              <strong>Inconsistent Operations:</strong> Without standardization,
              best practices at top locations weren&apos;t replicated elsewhere.
              When a great coordinator left a location, performance at that
              location would drop immediately.
            </p>
            <p>
              <strong>Data Silos:</strong> Each location&apos;s Dentrix instance
              was isolated. Network-level analytics were manual — pulling data
              from each location, consolidating in Excel, analyzing days later.
              Real-time insights were impossible.
            </p>
            <p>
              <strong>No-Show Variance:</strong> Top locations had 10% no-show
              rates; worst locations had 22%. Average across network: 16%. Every
              percentage point improvement = significant revenue opportunity.
            </p>
            <p>
              <strong>Insurance Verification Inconsistency:</strong> Claim denial
              rates varied widely by location (5% to 18%). No standard process.
              Some locations did benefit verification well; others not at all.
            </p>
            <p>
              <strong>Administrative Overhead:</strong> Each location needed FTE
              staff for insurance verification, recall management, and appointment
              coordination. With 12 locations, that&apos;s 12 different versions
              of the same role, 12 different skill levels, 12 different turnover
              risks.
            </p>
          </section>

          <section aria-labelledby="the-solution">
            <h2 id="the-solution">The Solution</h2>
            <p>
              The DSO implemented AIDentist Enterprise platform for all 12
              locations. All locations remained on their individual Dentrix
              instances (no PMS replacement), but AIDentist provided:
            </p>
            <ul>
              <li>
                Centralized, AI-powered automation across all 12 locations
              </li>
              <li>
                Standardized workflows (appointment scheduling, insurance
                verification, patient engagement)
              </li>
              <li>Real-time network-wide analytics dashboard</li>
              <li>
                Location-specific customization (hours, local preferences)
                within standardized framework
              </li>
            </ul>
            <p>
              Implementation: 6-week phased rollout (2 pilot locations, then
              remaining 10). Minimal disruption to operations.
            </p>
          </section>

          <section aria-labelledby="the-results">
            <h2 id="the-results">The Results</h2>

            <h3>No-Show Consistency: Average Reduced to 11% (Improvement: 31%)</h3>
            <p>Before AIDentist:</p>
            <ul>
              <li>Best locations: 10% no-show rate</li>
              <li>Worst locations: 22% no-show rate</li>
              <li>Average: 16%</li>
            </ul>
            <p>After AIDentist:</p>
            <ul>
              <li>All locations: 10–12% no-show rate (much more consistent)</li>
              <li>Average: 11%</li>
            </ul>
            <p>
              The worst locations improved dramatically (22% to 11%) by using the
              same intelligent scheduling that best locations had organically
              developed. Now all locations automatically benefit from that
              intelligence.
            </p>
            <p>
              Impact: Network of 12 locations × average 40 appointments per week
              per location × 5% no-show reduction × $150 per slot = $360,000
              annual revenue recovery.
            </p>

            <h3>Insurance Verification Standardization: 21% Network Claim Improvement</h3>
            <p>
              Before: Claim acceptance rates varied from 82% to 95% by location
              (average: 88%). With AIDentist&apos;s automated verification and
              intelligent coding, network average improved to 93% (5 percentage
              point improvement).
            </p>
            <p>
              5% improvement in claim acceptance × average $100 claim value ×
              20,000 claims per year = $100,000 annual revenue recovery.
            </p>

            <h3>Administrative Cost Reduction: 60% Overhead Reduction</h3>
            <p>
              Insurance verification, appointment coordination, and recall
              management are now handled by AI across all locations. FTE
              requirements for these functions dropped from 12 (one per location)
              to 4 (one per 3 locations for exception handling). Annual payroll
              savings: $250,000+.
            </p>

            <h3>Real-Time Analytics Dashboard</h3>
            <p>Corporate team can now see, in real-time:</p>
            <ul>
              <li>No-show rate by location</li>
              <li>Insurance claim acceptance by location</li>
              <li>Patient engagement metrics by location</li>
              <li>Revenue by location, provider, service line</li>
              <li>Staff productivity and efficiency by location</li>
            </ul>
            <p>
              When a metric dips at a location, management sees it immediately
              and can investigate rather than discovering the problem during
              monthly reporting.
            </p>
          </section>

          <section aria-labelledby="total-impact">
            <h2 id="total-impact">Total Impact</h2>
            <p>
              <strong>Annual Revenue Increase: $460,000+</strong>
            </p>
            <ul>
              <li>No-show reduction network-wide: $360,000</li>
              <li>Claim acceptance improvement: $100,000</li>
            </ul>
            <p>
              <strong>Annual Cost Savings: $250,000+ (payroll reduction)</strong>
            </p>
            <p>
              <strong>Total Financial Impact: $710,000+ per year</strong>
            </p>
            <p>
              <strong>Intangibles:</strong> Standardized operations simplify
              management, new location acquisitions integrate faster into network
              operations, better visibility enables data-driven decision making
            </p>
          </section>

          <section aria-labelledby="quote">
            <h2 id="quote">What the DSO Administrator Said</h2>
            <blockquote>
              &ldquo;Before AIDentist, our locations operated like separate
              businesses. No consistency, no visibility. Now I can see real-time
              performance across all 12 locations. Standardization is driving
              consistency. And the economics are undeniable — we&apos;ve already
              paid for this platform multiple times over with the no-show
              reduction and claim improvements alone.&rdquo;
            </blockquote>
            <p>
              <a href="/demo">See how AIDentist can help your DSO</a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
