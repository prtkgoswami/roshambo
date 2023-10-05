import { url } from "inspector";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshambo",
  description: "Rock-Paper-Scissor",
  authors: [
    { name: "Pratik Goswami", url: "https://www.linkedin.com/in/prtkgoswami/" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
