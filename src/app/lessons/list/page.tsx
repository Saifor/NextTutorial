import UsersCard from "@/features/Users/UsersCard";
import {UsersDb} from "@/features/Users/UsersDb";

export default async function Page(){
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-black/20 font-sans border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">ListItems Page</span>
            <div className="flex items-center justify-center">
                <UsersCard users={UsersDb} />
            </div>
        </main>
    )
}

