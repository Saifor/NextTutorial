"use client"

import Link from "next/link";
import {UsersProps} from "@/types/users.types";

export default function UsersCard({users}: UsersProps) {
    function handleUserNameClick() {
        console.log("handleUserNameClick called");
    }

    return(
        <div className="flex flex-col justify-center dark:text-red-500 gap-3 p-4">
            { users && (
                users.map((user, index) => (
                    <div key={index} className="flex flex-col border p-3">
                        <span onClick={(e) => console.log("Clicked on ", e.detail)}>
                            <b>Card id:</b> <Link href={"/users/" + user.id}>{user.id}</Link>
                        </span>
                        <span onClick={handleUserNameClick}>
                            <b>UserName:</b> {user.name}
                        </span>
                        { user.email && (
                            <span>
                                <b>E-mail:</b> {user.email}
                            </span>
                        )}
                        <span>
                            <b>Age:</b> {user.age}
                        </span>
                        <span>
                            <b>Sex:</b> {user.sex}
                        </span>
                        { user.phone && (
                            <span>
                                <b>Phone number:</b> {user.phone}
                            </span>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}