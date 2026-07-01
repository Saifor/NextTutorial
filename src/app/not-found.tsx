import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col flex-1 gap-3 p-2 h-fit bg-zinc-50 font-sans dark:bg-black/20 border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">Page Not Found: 404</span>
            <div className="flex flex-col gap-2 items-center justify-center">
                К сожалению, мы не смогли найти страницу.
                <Link href="/" className="flex p-2 bg-red-400 text-white ">Вернуться на главную</Link>
            </div>
        </div>
    )
}