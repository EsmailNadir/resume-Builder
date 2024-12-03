import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';

import "./globals.css";
import WorkExperienceForm from "./components/WorkExperienceForm";
import Navbar from "./components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({subsets:['latin', 'latin-ext']})


export const metadata: Metadata = {
  title: "Resume Builder",
  description: "An app for building your resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
      <Navbar />
        {children}
        
      </body>
    </html>
  );
}
