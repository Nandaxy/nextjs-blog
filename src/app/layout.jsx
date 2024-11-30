import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zenn Blog | Personal Blog Tutorial, Tips, dan Tips Pengembangan",
  description:
    "Zenn Blog menyediakan tutorial, panduan, dan wawasan tentang teknologi modern seperti Next.js, React, Tailwind CSS, dan integrasi dengan platform seperti Contentful, Sanity, Firebase, serta database populer.",
  keywords:
    "Zenn, Blog, Next.js, React, Tailwind CSS, MDX, Markdown, Contentful, Sanity, Strapi, Prisma, PostgreSQL, MySQL, MongoDB, Firebase, Supabase, Firestore, Algolia, teknologi web, pengembangan aplikasi, tutorial coding, pengembangan frontend, pengembangan backend",
  author: "Zenn Blog Team",
  canonical: "https://blog-zenn.vercel.app",
  openGraph: {
    title: "Zenn Blog - Belajar Next.js, React, dan Teknologi Web Modern",
    description:
      "Jelajahi tutorial dan panduan pengembangan aplikasi modern di Zenn Blog.",
    url: "https://blog-zenn.vercel.app",
    siteName: "Zenn Blog",
    images: [
      {
        url: "https://blog-zenn.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenn Blog - Teknologi Modern untuk Pengembang",
    description:
      "Tutorial Next.js, React, Tailwind CSS, dan integrasi dengan berbagai platform populer.",
    creator: "@ZennBlog",
    images: ["https://blog-zenn.vercel.app/images/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://blog-zenn.vercel.app",
    languages: {
      "en-US": "https://blog-zenn.vercel.app/en-US",
      "id-ID": "https://blog-zenn.vercel.app/id-ID",
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <div className="bg-white dark:bg-bgDark text-gray-900 dark:text-white transition-all duration-300">
          <Navbar />
          <Sidebar />
          <div className="mx-auto max-w-2xl  min-h-screen px-4 lg:px-0 bg-white dark:bg-bgDark lg:max-w-3xl lg:pl-24 xl:pl-0">
            <div className="pt-28"></div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
