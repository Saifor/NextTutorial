import type { Metadata } from "next";
import React, {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Games",
    description: "Page of games",
};

interface GamesLayoutProps {
    children: ReactNode;
}

export default function GamesLayout({ children, }: GamesLayoutProps) {
    return (
        <div className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black border-2 border-dashed dark:border-red-500 border-red-500">
            <span className="text-red-500">GamesLayout</span>
            {children}
        </div>
    );
}
