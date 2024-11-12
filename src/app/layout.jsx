import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zenn Blog",
  description: "Blog by Zenn",
  keywords:
    "Zenn, Blog, Next.js, React, Tailwind CSS, MDX, Markdown, Contentful, Sanity, Strapi, Prisma, PostgreSQL, MySQL, MongoDB, Firebase, Supabase, Firestore, Algolia, Algolia",
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
