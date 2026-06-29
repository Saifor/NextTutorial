export default async function Page(){
    throw new Error("Fetching error!");

    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">LoadingPage</span>
            <div className="flex items-center justify-center">
                Загрузка прошла, контент загружен!
            </div>
        </main>
    )
}

