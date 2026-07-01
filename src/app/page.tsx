"use client"

import Image from "next/image";
import Banner from "../assets/logo.svg"

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-3 p-2 font-sans dark:bg-black/30 border-2 border-dashed dark:border-red-400 border-red-400 bg-red-400/20 select-none">
      <span className="text-red-500 font-bold">Page</span>
      <div className="flex flex-col items-center justify-center w-full relative">
        <Image src={Banner} alt="banner" draggable={false} className="dark:invert text-red-500 pointer-events-none" width={500} height={500} priority/>
      </div>
    </main>
  );
}
