import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google"

export const metadata = {
  title: "Muhammad Ashir (uses vim btw)",
};


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={cn("dark selection:bg-red-900 font-sans", fontSans.variable)}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
