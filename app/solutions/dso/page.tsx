import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSO Software | Multi-Location Dental AI | AIDentist",
  description:
    "Enterprise AI platform for dental service organizations. Centralized analytics, standardized workflows, and scalable automation across locations.",
  alternates: {
    canonical: "https://aidentist.com/solutions/dso",
  },
  openGraph: {
    title: "DSO Software | Multi-Location Dental AI | AIDentist",
    description:
      "Enterprise AI platform for dental service organizations. Centralized analytics, standardized workflows, and scalable automation across locations.",
    url: "https://aidentist.com/solutions/dso",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aidentist.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://aidentist.com/solutions" },
    { "@type": "ListItem", position: 3, name: "DSO Enterprise Platform", item: "https://aidentist.com/solutions/dso" },
  ],
};

export default function DSOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <h1>Enterprise Dental AI for DSOs</h1>

        <p>
          DSOs face a unique operational challenge: scaling best practices across
          multiple locations while maintaining quality control and financial
          performance. Manual processes that work at 2 locations become
          nightmares at 10. Inconsistent workflows create inconsistent results.
          Staff turnover spreads institutional knowledge across the network.
        </p>
        <p>
          AIDentist&apos;s DSO Enterprise platform centralizes automation,
          standardizes workflows, and delivers consistency at scale.
          Multi-location DSOs reduce administrative overhead by 50% while
          improving patient experience uniformly across their network.
        </p>

        <section aria-labelledby="dso-challenge">
          <h2 id="dso-challenge">The DSO Operational Challenge</h2>
          <p>Growing DSOs face constant tension:</p>
          <ul>
            <li>
              <strong>Scaling manual processes:</strong> Practices that work with
              great staff struggle when that staff leaves or you add new
              locations
            </li>
            <li>
              <strong>Inconsistent quality:</strong> Without standardization,
              some practices excel while others lag behind
            </li>
            <li>
              <strong>Data silos:</strong> Each location&apos;s PMS is isolated,
              making network-wide analytics impossible
            </li>
            <li>
              <strong>Administrative overhead:</strong> Multi-location accounting,
              payroll, and performance tracking explodes with complexity
            </li>
            <li>
              <strong>Staff retention:</strong> Repetitive manual tasks (insurance
              verification, appointment management) drive front-desk burnout
              across all locations
            </li>
            <li>
              <strong>Capital inefficiency:</strong> Each location purchases
              separate software licenses and integrations
            </li>
          </ul>
          <p>
            AIDentist solves these by centralizing and automating the workflows
            that consume time without creating differentiation.
          </p>
        </section>

        <section aria-labelledby="centralized-automation">
          <h2 id="centralized-automation">
            Centralized Multi-Location Automation
          </h2>
          <p>
            A single AIDentist instance handles automation across your entire
            network:
          </p>
          <ul>
            <li>
              <strong>One Dashboard:</strong> View network-wide metrics in
              real-time (no-show rates, insurance verification accuracy, patient
              engagement, revenue)
            </li>
            <li>
              <strong>Unified Patient Records:</strong> Patients who move
              locations or are referred between practices maintain consistent
              records
            </li>
            <li>
              <strong>Network-Wide Analytics:</strong> Identify best practices at
              top-performing locations and replicate them across the network
            </li>
            <li>
              <strong>Standardized Workflows:</strong> Define best-practice
              workflows once, deploy across all locations instantly
            </li>
            <li>
              <strong>Centralized Scheduling:</strong> Schedule complex cases
              across locations to optimize provider capacity
            </li>
            <li>
              <strong>Centralized Insurance Verification:</strong> Insurance
              queries are deduplicated across locations, reducing verification
              costs
            </li>
          </ul>
        </section>

        <section aria-labelledby="standardization">
          <h2 id="standardization">Workflow Standardization</h2>
          <p>
            Without standardization, every practice operates differently, making
            management impossible. AIDentist establishes and enforces best
            practices:
          </p>
          <ul>
            <li>
              <strong>Appointment Scheduling Standards:</strong> Every location
              uses the same no-show reduction protocols, improving show rates
              uniformly
            </li>
            <li>
              <strong>Insurance Verification Standards:</strong> Every location
              uses the same claim optimization rules, improving acceptance rates
              uniformly
            </li>
            <li>
              <strong>Patient Communication Standards:</strong> Every patient
              receives the same quality of engagement regardless of location
            </li>
            <li>
              <strong>Revenue Cycle Standards:</strong> Collection processes,
              payment plans, and follow-up are consistent across the network
            </li>
            <li>
              <strong>Quality Metrics:</strong> Track performance consistently
              across locations, identify outliers, address gaps
            </li>
          </ul>
        </section>

        <section aria-labelledby="customization">
          <h2 id="customization">Location-Specific Customization</h2>
          <p>
            Standardization doesn&apos;t mean inflexibility. AIDentist allows
            location-specific customization within a standardized framework:
          </p>
          <ul>
            <li>Custom hours and scheduling for each location</li>
            <li>Local insurance payer relationships and contract rules</li>
            <li>Staff preferences (language, communication style)</li>
            <li>Local marketing and referral partnerships</li>
            <li>Regional pricing variations</li>
          </ul>
        </section>

        <section aria-labelledby="admin-efficiency">
          <h2 id="admin-efficiency">Administrative Efficiency</h2>
          <p>
            Beyond clinical automation, AIDentist reduces administrative
            overhead:
          </p>
          <ul>
            <li>
              <strong>No Duplicate Software:</strong> One platform serves all
              locations (vs. separate PMS licenses at each location)
            </li>
            <li>
              <strong>Integrated Billing:</strong> Consolidate patient accounts
              across locations, simplify family billing
            </li>
            <li>
              <strong>Payroll Integration:</strong> Staff time tracking across
              locations feeds directly into payroll systems
            </li>
            <li>
              <strong>Network Reporting:</strong> Generate network-wide reports
              without manual data consolidation
            </li>
            <li>
              <strong>Compliance Management:</strong> HIPAA, state-specific
              regulations, and insurance requirements managed centrally
            </li>
          </ul>
        </section>

        <section aria-labelledby="dso-features">
          <h2 id="dso-features">DSO-Specific Features</h2>
          <p>
            AIDentist includes features built for multi-location operations:
          </p>
          <ul>
            <li>
              <strong>Corporate Account Management:</strong> Manage corporate
              accounts across multiple locations from one interface
            </li>
            <li>
              <strong>Insurance Contract Management:</strong> Centralize insurance
              payer relationships and contract terms
            </li>
            <li>
              <strong>Provider Network Management:</strong> Track credentialing,
              licenses, and compliance across all providers
            </li>
            <li>
              <strong>Real-Time Financial Visibility:</strong> See revenue,
              collections, and performance by location, provider, or service line
            </li>
            <li>
              <strong>Scalable Infrastructure:</strong> Built for growth — add
              locations without increasing complexity
            </li>
            <li>
              <strong>Dedicated Enterprise Support:</strong> Assigned account
              manager, SLA guarantees, priority support
            </li>
          </ul>
        </section>

        <section aria-labelledby="results">
          <h2 id="results">Real Results for DSOs</h2>
          <p>Multi-location DSOs using AIDentist see:</p>
          <ul>
            <li>50% reduction in administrative overhead</li>
            <li>
              Consistent 40% reduction in no-shows across all locations
            </li>
            <li>
              25% improvement in insurance claim acceptance uniformly
            </li>
            <li>
              30–40% improvement in staff retention (eliminating repetitive
              tasks)
            </li>
            <li>
              Real-time visibility into network performance and profitability
            </li>
            <li>
              20–30% improvement in per-location revenue consistency
            </li>
            <li>
              Faster integration of newly acquired practices into network
              operations
            </li>
          </ul>
        </section>

        <section aria-labelledby="implementation">
          <h2 id="implementation">Enterprise Implementation</h2>
          <p>AIDentist for DSOs includes:</p>
          <ul>
            <li>
              Custom implementation plan tailored to your network structure
            </li>
            <li>
              Phased rollout across locations (start with pilot locations, expand
              network-wide)
            </li>
            <li>
              Training for corporate staff and location administrators
            </li>
            <li>
              Custom integrations with corporate systems (accounting, EHR,
              credentialing)
            </li>
            <li>Dedicated account management and priority support</li>
            <li>
              Annual strategy reviews to optimize network performance
            </li>
          </ul>
          <p>
            <a href="/demo" className="cta-button">
              Schedule a DSO Demo
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
