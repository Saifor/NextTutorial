import {db} from "@/lib/db";

export default async function UsersView() {
    const users = await db.query.users.findMany();

    return(
        <div>
            <h1>Users:</h1>
            <ul className="space-y-2">
                {users.map((user) => (
                    <li key={user.id} className="border-b pb-2">
                        <span className="font-medium">{user.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}