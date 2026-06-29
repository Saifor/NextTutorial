"use client"

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Page({ error, reset }: ErrorProps){
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">ErrorPage</span>
            <div className="flex flex-col items-center justify-center p-4 border-2 border-red-500 bg-red-50 rounded-2xl text-red-500">
                <h2 className="font-bold text-lg">Здесь будет ошибка</h2>
                <span className="text-sm my-2">{error.message}</span>
                <button onClick={() => reset && reset()} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-2xl text-sm hover:bg-red-700">Попробовать снова</button>
            </div>
        </main>
    )
}

