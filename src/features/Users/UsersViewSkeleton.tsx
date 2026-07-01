export default function UsersViewSkeleton() {
    return(
        <div>
            <h1>Users:</h1>
            <ul className="space-y-2 animate-pulse ">
                {[1,2,3].map((user) => (
                    <li key={user} className="border-b pb-2 animate-pulse ">
                        <span className="font-medium">Загрузка...</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}