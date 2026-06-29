import UserCard from "@/features/Users/UserCard";

export default async function Page(){
    const myUsers = [{id: 123, name: "Potter"}, {id: 122, name: "Brick"}, {"id": 137, name: "Antont"}];
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-black/20 font-sans border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">ListItems Page</span>
            <div className="flex items-center justify-center">
                <UserCard users={myUsers}></UserCard>
            </div>
        </main>
    )
}

