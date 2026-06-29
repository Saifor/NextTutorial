import React from "react";
import Link from "next/link";

const Header = () => {
    return(
        <div className="flex w-full flex-row items-center gap-4 p-2 border-2 border-dashed border-blue-500 bg-blue-300/30 dark:bg-black/40 rounded-2xl flex-nowrap text-nowrap">
            <span className="text-blue-500 font-bold">Navigation</span>
            <div className="flex flex-row justify-center w-full gap-2 text-blue-500">
                <Link href="/" className="hover:underline p-2 border-2 border-blue-500 rounded-2xl hover:scale-[102%]">Main page</Link>
                <Link href="/games" className="hover:underline p-2 border-2 border-blue-500 rounded-2xl hover:scale-[102%]">Games</Link>
                <Link href="/lessons" className="hover:underline p-2 border-2 border-blue-500 rounded-2xl hover:scale-[102%]">Lessons</Link>
                {/*<Link href="/" className="hover:underline p-2 border-2 border-blue-400 rounded-2xl hover:scale-[102%]">Page4</Link>*/}
            </div>
        </div>
    );
}

export default Header;