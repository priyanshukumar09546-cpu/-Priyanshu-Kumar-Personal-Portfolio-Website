import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Priyanshu Kumar | AI/ML & Full-Stack Developer",
  description:
    "Personal portfolio of Priyanshu Kumar — B.Tech CSE at ABES Engineering College, founder of MentorNearby. Building production AI applications, computer vision models, and full-stack systems.",
  keywords: [
    "Priyanshu Kumar",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "MentorNearby",
    "ScamShield AI",
    "CampusPrep",
    "CropDetect AI",
    "ABES Engineering College",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Priyanshu Kumar", url: "https://github.com/priyanshukumar09546-cpu" }],
  creator: "Priyanshu Kumar",
  metadataBase: new URL("https://priyanshu-kumar-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Priyanshu Kumar | AI/ML & Full-Stack Developer",
    description:
      "B.Tech CSE student at ABES Engineering College & Founder of MentorNearby. Explore verified production projects, AI/ML systems, and full-stack platforms.",
    url: "https://priyanshu-kumar-portfolio.vercel.app",
    siteName: "Priyanshu Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Priyanshu Kumar - AI/ML Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Kumar | AI/ML & Full-Stack Developer",
    description:
      "B.Tech CSE student at ABES Engineering College & Founder of MentorNearby. Explore verified production projects, AI/ML systems, and full-stack platforms.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('pk-theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${caveat.variable} font-sans min-h-screen selection:bg-amber-500/30 selection:text-amber-300`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
