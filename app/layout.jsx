import "./globals.css";

export const metadata = {
  title: "Sharath H | Full-Stack Developer Portfolio",
  description:
    "Personal portfolio of Sharath H, an aspiring full-stack developer and B.Tech CSE student at Dr. ACS College of Engineering, Bengaluru. Discover projects in C++, Java Spring Boot, Next.js, and distributed systems.",
  keywords: [
    "Sharath H",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Spring Boot",
    "C++17",
    "Portfolio",
    "Bangalore",
    "Campus Placements",
  ],
  authors: [{ name: "Sharath H" }],
  creator: "Sharath H",
  metadataBase: new URL("https://sharath-h-portfolio.vercel.app"),
  openGraph: {
    title: "Sharath H | Full-Stack Developer Portfolio",
    description:
      "Aspiring full-stack developer passionate about high-performance systems, clean architectures, and modern web applications.",
    url: "https://sharath-h-portfolio.vercel.app",
    siteName: "Sharath H Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/sharath-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Sharath H - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath H | Full-Stack Developer Portfolio",
    description:
      "Aspiring full-stack developer passionate about high-performance systems and modern web applications.",
    images: ["/images/sharath-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#070B12" />
      </head>
      <body className="min-h-screen bg-[#070B12] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* Skip to Content Accessible Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-400 text-slate-950 font-bold rounded-lg shadow-xl outline-none ring-2 ring-emerald-300"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
