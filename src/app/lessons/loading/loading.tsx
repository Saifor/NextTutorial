export default function LoadingLoading() {
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">LoadingPage</span>
            <div className="flex bg-pink-200 rounded-2xl w-full space-x-4 p-4 animate-pulse ">
                <div className="flex-1 space-y-4 py-1">
                    <span className="flex justify-center ftext-center text-red-500">Подождите, идёт загрузка...</span>
                    <div className="h-3 bg-pink-200 rounded-2xl w-3/4" />
                    <div className="space-y-2">
                        <div className="h-4 bg-red-500 rounded-2xl" />
                        <div className="h-4 bg-red-500 rounded-2xl w-5/6" />
                    </div>
                </div>
            </div>
        </main>

    )
}