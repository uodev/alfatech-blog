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
  const theme = cookies().get("theme")?.value.toString() || "hallowen";

  return (
    <html lang="en" data-theme={theme}>
      <body className="bg-background-color">
        <NextTopLoader color="#FF5480" />
        <div className="w-[1450px] max-xl:w-[900px] m-auto min-h-[100vh]">
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
