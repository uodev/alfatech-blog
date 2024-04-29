import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import OurWork from "@/partials/layout/OurWork";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "AlfaTech Blog",
  description:
    "AlfaTech Blog is a blog website for tech enthusiasts. We write about the latest tech trends, news, and updates. Stay tuned for more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkMode: { name: string; value: string } = cookies().get("dark") ?? {
    name: "dark",
    value: "",
  };

  return (
    <html lang="en" className={darkMode.value}>
      <body
        className={`bg-background dark:bg-dark-background ${darkMode.value}`}
      >
        <NextTopLoader color="#FF5480" />
        <div className="w-[1200px] max-xl:w-[900px] m-auto min-h-[100vh]">
          <Navbar />
          <main>{children}</main>
        </div>

        <OurWork />

        <footer>
          <div className="bg-white dark:bg-gray-800/40 text-passive text-center py-4">
            <p>
              &copy; {new Date().getFullYear()} Alfatech Blog. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
