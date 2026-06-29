import type { Metadata } from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Games",
    description: "Page of games",
};

interface GamesLayoutProps {
    children: ReactNode;
}

export default function GamesLayout({ children, }: GamesLayoutProps) {
    return (
        <div>
            Layout - Body
            {children}
        </div>
    );
}
