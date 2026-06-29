'use client';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            className="p-2 rounded-2xl border-2 border-green-500 hover:bg-white/20 transition-colors text-nowrap flex-nowrap text-green-500"
        >
            Swap ☀️/🌙
        </button>
    );
}