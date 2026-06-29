import React from "react";
import Navigation from "@/features/Header/Navigation";

const Header = () => {
    return(
        <div className="flex w-full h-fit justify-between mx-auto items-center gap-5 p-3 bg-zinc-50 dark:bg-black border-2 border-dashed border-blue-400 rounded-2xl">
            <span className="text-blue-400">Header</span>
            <Navigation />
        </div>
    );
}

export default Header;