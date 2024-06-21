import Navbar from "@/components/navbar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Muhammad Ashir (uses vim btw)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark selection:bg-red-900">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
