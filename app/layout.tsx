import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import { Instagram, LinkedinIcon, Mail } from "lucide-react";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudiUS - Career",
  description: "Internship - Student Ambassador - DU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics /> 
      <body className={inter.className}>
      <header className=" h-[8vh] w-full border-b fixed flex items-center justify-between px-5 bg-black">
        <Link href={'/'} className=" h-full"><img src="/whitelogo.svg" alt="" className=" h-full" /></Link>
        <div className="hidden md:block space-x-10 text-white">
          <Link href="/internship">Internships</Link>
          <Link className="" href="/ambassador">Student Ambassador</Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/company/studi-us/">
          <button className="inline-flex md:h-12 h-8 animate-shimmer text-sm md:text-base items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-normal md:font-medium text-slate-400 transition-colors focus:outline-none focus:ring-slate-400  focus:ring-offset-slate-50">
          Connect with us
          </button>
        </Link>
        </div>
      </header>
        {children}
        <footer className=' h-18 border-t gap-4 p-4 flex flex-col'> 
        <div className=" flex justify-center items-center gap-8">
            <Link href={'/'} className=" border p-3 rounded-full hover:bg-slate-100">
               <Instagram size={20} /> 
            </Link>
            <Link href={'/'} className=" border p-3 rounded-full hover:bg-slate-100">
               <LinkedinIcon size={20} /> 
            </Link>
            <Link href={'mailto:studius@vinucode.in'} className=" border p-3 rounded-full hover:bg-slate-100">
               <Mail size={20} /> 
            </Link>
        </div>
        <div>
          <p className=" text-center text-gray-400">
            © 2024 StudiUS. All rights reserved.
          </p>
        </div>
    </footer>
      </body>
    </html>
  );
}
