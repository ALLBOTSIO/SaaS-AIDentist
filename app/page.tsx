import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIDentist — AI Dental Practice Automation",
  description:
    "AI-powered dental practice automation for DSOs and practice owners. Intelligent scheduling, insurance verification, and patient engagement. Book a demo.",
  alternates: {
    canonical: "https://aidentist.com",
  },
  openGraph: {
    title: "AIDentist — AI Dental Practice Automation",
    description:
      "AI-powered dental practice automation for DSOs and practice owners. Intelligent scheduling, insurance verification, and patient engagement. Book a demo.",
    url: "https://aidentist.com",
  },
  twitter: {
    title: "AIDentist — AI Dental Practice Automation",
    description:
      "AI-powered dental practice automation for DSOs and practice owners. Intelligent scheduling, insurance verification, and patient engagement. Book a demo.",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aidentist.com/#organization",
      name: "AIDentist",
      url: "https://aidentist.com",
      description:
        "AI-powered dental practice automation platform for DSOs and practice owners. Intelligent scheduling, insurance verification, and patient engagement.",
      logo: {
        "@type": "ImageObject",
        url: "https://aidentist.com/logo.png",
        width: 250,
        height: 60,
      },
      contact: {
        "@type": "ContactPoint",
        telephone: "+1-XXX-XXX-XXXX",
        contactType: "Customer Service",
      },
      sameAs: [
        "https://www.linkedin.com/company/aidentist",
        "https://twitter.com/aidentist",
        "https://www.facebook.com/aidentist",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "AI Venture Holdings LLC",
        url: "https://aiventureholdings.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://aidentist.com/#website",
      name: "AIDentist",
      url: "https://aidentist.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://aidentist.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aidentist.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aidentist.com",
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <main>
        <h1>AIDentist — AI Dental Practice Automation</h1>
      </main>
    </>
  );
}
