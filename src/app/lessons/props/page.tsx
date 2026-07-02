import ProfileCard from "@/features/Users/ProfileCard";

export default async function Page(){
    return (
        <main className="flex flex-col flex-1 gap-3 p-2 h-fit bg-black/20 font-sans border-2 border-dashed dark:border-red-400 border-red-400">
            <span className="text-red-400">PropsLesson Page</span>
            <div className="flex items-center justify-center">
                <ProfileCard id={15}
                             name={"Vanya"}
                             email={"vanya@max.ru"}
                             age={67} sex={"-"}
                             phone={"8-800-555-35-35"}
                />
            </div>
        </main>
    )
}

