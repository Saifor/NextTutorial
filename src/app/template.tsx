"use client"
import React, {useState} from "react";

export default function RootTemplate({children,}: Readonly<{ children: React.ReactNode; }>) {
    const [text, setText] = useState("");

    return (
        <div className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black border-2 border-dashed dark:border-red-700 border-red-700">
            <span className="text-red-700">RootTemplate</span>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Содержимое Template не сохранится"
                className="p-2 w-full border-2 text-red-700 border-red-700 rounded-2xl bg-white/10 focus:ring-1 focus:text-red-700 focus:ring-red-700 outline-none"
            />
            <>
                {children}
            </>
        </div>
    );
}
