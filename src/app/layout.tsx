import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/Header/Header";
import {Providers} from "@/app/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tutorial site",
  description: "Created by Saifor on Next.js",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html suppressHydrationWarning lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="flex flex-col min-h-screen p-2 bg-zinc-200 dark:bg-black/50">
            <Providers>
              <div className="flex flex-1 flex-col bg-red-700/20 p-2 gap-2 border-2 border-dotted border-red-700">
                <span className="text-red-700 font-bold">AppLayout</span>
                <Header />
                  <div className="flex flex-col">
                      {children}
                  </div>
              </div>
            </Providers>
        </body>
      </html>
  );
}
