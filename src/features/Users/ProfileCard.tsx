"use client"

import Link from "next/link";
import {UserProps} from "@/types/users.types";

export default function ProfileCard({id,name,email,age,sex,phone}: UserProps) {
    return(
        <div className="flex flex-col justify-center dark:text-red-500 gap-3 p-4">
            <div className="flex flex-col border p-3 text-center">
                <span>
                    Hello {" "}
                    <b className="underline">{name}</b>
                    !
                </span>
                <hr className="my-2 "></hr>
                <span>
                    <b>Your id: </b>
                    <Link href={"/users/" + id} className="underline">{id}</Link>
                </span>
                { email && (
                    <span>
                        <b>Your E-mail: </b>
                        {email}
                    </span>
                )}
                <span>
                    <b>Your Age: </b>
                    {age}
                </span>
                <span>
                    <b>Your Sex: </b>
                    {sex}
                </span>
                { phone && (
                    <span>
                        <b>Your Phone: </b>
                        {phone}
                    </span>
                )}
            </div>
        </div>
    )
}