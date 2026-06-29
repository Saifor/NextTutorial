"use client"

import React, {useState} from "react";
import Navigation from "@/features/Header/Navigation";

const Header = () => {
    const [text, setText] = useState("");

    return(
        <div className="flex w-full h-fit justify-between mx-auto items-center gap-5 p-3 dark:bg-black border-2 border-dashed border-blue-400 bg-blue-50 rounded-2xl">
            <span className="text-blue-400">Header</span>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Содержимое Loyout сохранится"
                className="p-2 w-full border-2 text-blue-300 border-blue-300 rounded-2xl bg-white/10 focus:ring-1 focus:text-blue-400 focus:ring-blue-300 outline-none"
            />
            <Navigation />
        </div>
    );
}

export default Header;