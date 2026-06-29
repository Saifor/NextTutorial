import Link from "next/link";

const Page = () => {
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">AboutPage</span>
            <Link href="/about/author" className="flex flex-col w-fit  items-center justify-center mx-auto gap-2  hover:scale-[102%] transition-opacity">
                <span className="mr-3 text-2xl text-yellow-600">👑 Leader</span>
                <div className="flex flex-col w-fit items-center justify-center mx-auto border-2 p-4 border-red-500 gap-3 rounded-2xl">
                    <div className="px-10 py-8 bg-gray-700 rounded-full text-xl text-red-400">
                        <span>:)</span>
                    </div>
                    <span className="text-red-400 hover:scale-[102%]">Saifor (Vladislav)</span>
                </div>
            </Link>
        </main>
    )
}

export default Page;