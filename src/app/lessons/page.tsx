import React, {Suspense} from "react";
import {LessonsItems} from "@/features/Lessons/Lessons";

const Page = () => {
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">LessonsPage</span>
            <div className="flex mx-auto w-fit flex-col items-center gap-4 p-4 bg-zinc-50 dark:bg-black/40 rounded-2xl flex-nowrap text-nowrap border-2">
                <span>I made this lessons for you:</span>
                <Suspense fallback={
                    <div className="max-xl:flex gap-3 flex-col xl:grid xl:grid-cols-2 animate-pulse ">
                        { [1,2,3,4,5].map((lesson, index) => (
                            <div key={index}
                                 className="max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[minmax(100,400px)_minmax(100px,200px)]
                                 w-full gap-2 p-2 rounded-2xl animate-pulse min-h-30 bg-loading-skeleton">
                            </div>
                        ))}
                    </div>
                }>
                    <LessonsItems />
                </Suspense>
            </div>
        </main>
    )
}

export default Page;