import React from "react";
import {LessonsItems} from "@/features/Lessons/Lessons";
import {LessonsDb} from "@/features/Lessons/LessonsDb";

const Page = () => {
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">LessonsPage</span>
            <div className="flex mx-auto w-fit flex-col items-center gap-4 p-4 bg-zinc-50 dark:bg-black/40 rounded-2xl flex-nowrap text-nowrap border-2">
                <span>I made this lessons for you:</span>
                <LessonsItems lessons={LessonsDb}></LessonsItems>
            </div>
        </main>
    )
}

export default Page;