import React from "react";
import Link from "next/link";

const Header = () => {
    return(
        <div className="flex flex-row items-center gap-4 p-2 border-2 border-dashed border-green-400 bg-zinc-50 dark:bg-black rounded-2xl flex-nowrap text-nowrap">
            <span className="text-green-400">Navigation</span>
            <div className="flex flex-row justify-center gap-2 ">
                <Link href="/">Main page</Link>
                <Link href="/games">Games</Link>
                <Link href="/">Page3</Link>
                <Link href="/">Page4</Link>
            </div>
        </div>
    );
}

export default Header;