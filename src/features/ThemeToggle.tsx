'use client';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            className="p-2 rounded-2xl border-2 border-black  dark:border-white transition-colors text-nowrap flex-nowrap bg-background text-foreground"
        >
            Swap ☀️/🌙
        </button>
    );
}