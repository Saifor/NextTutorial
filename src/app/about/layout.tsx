import type { Metadata } from "next";
import React, {ReactNode} from "react";

export const metadata: Metadata = {
    title: "About",
    description: "Information page",
};

interface AboutLayoutProps {
    children: ReactNode;
}

export default function AboutLayout({ children, }: AboutLayoutProps) {
    return (
        <div className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black border-2 border-dashed dark:border-red-500 border-red-500">
            <span className="text-red-500">AboutLayout</span>
            {children}
        </div>
    );
}
