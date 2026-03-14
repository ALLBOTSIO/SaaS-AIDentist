import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Stories | AIDentist Dental AI",
  description:
    "See how dental practices and DSOs use AIDentist to automate operations, reduce no-shows, and grow revenue with AI-powered automation.",
  alternates: {
    canonical: "https://aidentist.com/case-studies",
  },
  openGraph: {
    title: "Customer Stories | AIDentist Dental AI",
    description:
      "See how dental practices and DSOs use AIDentist to automate operations, reduce no-shows, and grow revenue with AI-powered automation.",
    url: "https://aidentist.com/case-studies",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aidentist.com/#business",
  name: "AIDentist",
  description:
    "AI-powered dental practice automation platform for DSOs and practice owners",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: 47,
  },
};

const stories = [
  {
    slug: "family-dental-practice-automation",
    title: "How a 3-Provider Family Dental Practice Cut No-Shows by 42%",
    metrics: [
      "42% no-show reduction",
      "25+ hours/week saved on insurance",
      "$180K additional annual revenue",
    ],
    practice: "3-provider family practice",
  },
  {
    slug: "dso-multi-location-ai",
    title: "How a 12-Location DSO Standardized Operations with AI",
    metrics: [
      "31% network-wide no-show improvement",
      "$460K annual revenue recovery",
      "$250K payroll savings",
    ],
    practice: "12-location DSO",
  },
  {
    slug: "solo-practice-growth",
    title: "From Solo to Scaling: How One Dentist Grew Revenue 30% with AI",
    metrics: [
      "30% revenue growth ($180K increase)",
      "40% no-show reduction",
      "8–10 hours/week freed from admin",
    ],
    practice: "Solo dentist practice",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main>
        <h1>Customer Success Stories</h1>

        <p>
          See how dental practices and DSOs across the country use AIDentist to
          save time, reduce no-shows, recover revenue, and improve patient
          experience. These results are typical, not exceptional.
        </p>

        <ul aria-label="Case studies">
          {stories.map((s) => (
            <li key={s.slug}>
              <article>
                <h2>
                  <Link href={`/case-studies/${s.slug}`}>{s.title}</Link>
                </h2>
                <p>{s.practice}</p>
                <ul aria-label="Key results">
                  {s.metrics.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
