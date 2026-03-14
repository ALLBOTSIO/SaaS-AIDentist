import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aidentist.com"),
  title: {
    default: "AIDentist — AI Dental Practice Automation",
    template: "%s | AIDentist",
  },
  openGraph: {
    siteName: "AIDentist",
    type: "website",
    images: [
      {
        url: "https://aidentist.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aidentist",
    images: ["https://aidentist.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
