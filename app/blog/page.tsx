import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental AI Blog | AIDentist",
  description:
    "Expert insights on dental practice automation, AI technology, and practice efficiency. Strategies for dentists and DSOs.",
  alternates: {
    canonical: "https://aidentist.com/blog",
  },
  openGraph: {
    title: "Dental AI Blog | AIDentist",
    description:
      "Expert insights on dental practice automation, AI technology, and practice efficiency. Strategies for dentists and DSOs.",
    url: "https://aidentist.com/blog",
  },
};

const posts = [
  {
    slug: "how-ai-is-transforming-dental-practices-2026",
    title: "How AI Is Transforming Dental Practices in 2026",
    excerpt:
      "From scheduling to diagnostics, AI is reshaping dental care delivery. Explore the trends driving adoption across solo practices and DSOs.",
    date: "March 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "dental-appointment-no-shows-ai-solution",
    title: "Reduce Dental No-Shows by 40% with AI",
    excerpt:
      "Dental appointment no-shows cost practices $150+ per slot. Learn how AI-powered scheduling and smart reminders cut no-show rates dramatically.",
    date: "March 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "dental-insurance-verification-automation",
    title: "Automate Dental Insurance Verification — The Complete Guide",
    excerpt:
      "Manual insurance verification wastes 20+ hours per week. Learn how AI automation streamlines eligibility checks and recovers $40,000–80,000 annually.",
    date: "March 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "dso-technology-stack-2026",
    title: "DSO Technology Stack for 2026 — Essential Software",
    excerpt:
      "The must-have technology stack for dental service organizations. From AI automation to analytics, build the infrastructure for scalable growth.",
    date: "March 12, 2026",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <main>
      <h1>Dental AI Blog</h1>

      <p>
        Stay updated on the latest in dental practice automation, AI trends, and
        operational efficiency strategies. Our blog covers technology, practice
        management, and business insights for dental practices and DSOs.
      </p>

      <ul aria-label="Blog posts">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <p>
                <time dateTime="2026-03-12">{post.date}</time>
                {" · "}
                {post.readTime}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
