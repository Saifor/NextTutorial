"use client"
import React, {useEffect, useState} from "react";

export default function RootTemplate({children,}: Readonly<{ children: React.ReactNode; }>) {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("template.tsx: Монтирование. Произошла навигация.");
    },[])

    return (
        <div className="flex flex-col flex-1 gap-3 p-2 h-fit font-sans dark:bg-black border-2 border-dotted dark:border-red-500 border-red-500 bg-red-500/20">
            <span className="text-red-500 font-bold">AppTemplate</span>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Содержимое Template не сохранится при навигации"
                className="p-2 w-full border-2 text-red-500 border-red-500 rounded-2xl bg-white/10 focus:ring-1 focus:text-red-500 focus:ring-red-500 outline-none"
            />
            <>
                {children}
            </>
        </div>
    );
}
