const Page = () => {
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">{"About->Author"}</span>
            <div className="flex flex-row ">
                <span className="text-white">Author: Saifor (Vladislav)</span>
            </div>
        </main>
    )
}

export default Page;