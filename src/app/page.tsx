"use client"

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-3 p-2 font-sans dark:bg-black/30 border-2 border-dashed dark:border-red-400 border-red-400 bg-red-400/20">
      <span className="text-red-500 font-bold">Page</span>
      <div className="flex flex-col items-center justify-center w-full">
        <Image className="dark:invert" src="/banner.png" alt="banner" width={1100} height={100} priority/>
      </div>
    </main>
  );
}
