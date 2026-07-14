import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { Navbar } from "@/components/navbar";
import { PageLoader } from "@/components/page-loader";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nityam.garurcs.in"),

  applicationName: site.name,

  title: {
    default: "Nityam Mishra | Full-stack & AI-native Engineer",
    template: "%s | Nityam Mishra",
  },

  description: site.description,

  keywords: [
    "Nityam Mishra",
    "Full-stack Developer",
    "AI Engineer",
    "Voice AI Developer",
    "Next.js Developer",
    "FastAPI Developer",
    "Python Developer",
    "React Developer",
    "LLM Engineer",
    "GenAI Engineer",
    "Founder Scratchnest",
    "Portfolio",
  ],

  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      {
        url: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/images/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  openGraph: {
    title: "Nityam Mishra | Full-stack & AI-native Engineer",
    description: site.description,
    url: "https://nityam.garurcs.in",
    siteName: "Nityam Mishra",
    images: [
      {
        url: "/images/nityam-ai-hero.png",
        width: 1536,
        height: 864,
        alt: "Nityam Mishra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nityam Mishra | Full-stack & AI-native Engineer",
    description: site.description,
    images: ["/images/nityam-ai-hero.png"],
    creator: "@your_x_username", // optional
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0a0a0a",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
  ],

  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}