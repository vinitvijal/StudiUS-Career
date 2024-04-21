import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className=" h-screen w-full flex flex-col bg-white overflow-y-auto">
      
      <div>
        <div className=" h-[92vh] w-full flex flex-col items-center justify-center">
          <h1 className=" text-5xl font-bold text-black">Opportunities at Studi<span className=" text-green-500">US</span></h1>
          <p className=" text-2xl text-black mt-4">
            Be a part of the team that is changing the way students learn, enjoy and grow.
          </p>
          <div className=" space-x-10 mt-10">
            <Link href={'/internship'} className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-50 transition-colors focus:outline-none focus:ring-slate-400  focus:ring-offset-slate-50 mt-4">
              Internship
            </Link>
            <Link href={'/ambassador'} className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-50 transition-colors focus:outline-none focus:ring-slate-400  focus:ring-offset-slate-50 mt-4">
              Student Ambassador
            </Link>
            <Link href={'/society'} className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-50 transition-colors focus:outline-none focus:ring-slate-400  focus:ring-offset-slate-50 mt-4">
              Society Ambassador
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
