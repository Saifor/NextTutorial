import UsersView from "@/features/Users/UsersView";
import {Suspense} from "react";
import UsersViewSkeleton from "@/features/Users/UsersViewSkeleton";

export default async function UsersPage() {
    return (
        <Suspense fallback={<UsersViewSkeleton />}>
            <UsersView />
        </Suspense>
    )
}