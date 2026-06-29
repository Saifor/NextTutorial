"use client"

import React, {useState} from "react";
import Navigation from "@/features/Header/Navigation";

const Header = () => {
    const [text, setText] = useState("");

    return(
        <div className="flex flex-col lg:flex-row w-full h-fit justify-between mx-auto items-center gap-5 p-3 border-2 border-dashed bg-green-500/20 dark:bg-green-500/20 border-green-500 rounded-2xl">
            <span className="text-green-500 font-bold">Header</span>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Содержимое Loyout сохранится при навигации"
                className="py-2 px-3 w-full text-green-600 ring-2 ring-green-500 hover:ring-3 rounded-2xl outline-none"
            />
            <Navigation />
        </div>
    );
}

export default Header;