import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">LessonsPage</span>
            <div className="flex mx-auto w-fit flex-col items-center gap-4 p-4 bg-zinc-50 dark:bg-black/40 rounded-2xl flex-nowrap text-nowrap border-2">
                <span>I made this lessons for you:</span>
                <div className="flex flex-row justify-center w-full gap-2">
                    <Link href="/lessons/loading" className="hover:underline p-2 border-2 rounded-2xl hover:scale-[102%]">Loading lesson</Link>
                    <Link href="/lessons/error" className="hover:underline p-2 border-2 rounded-2xl hover:scale-[102%]">Error lesson</Link>
                </div>
            </div>
        </main>
    )
}

export default Page;