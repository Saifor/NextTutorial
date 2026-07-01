import {ReactNode} from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return(
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md p-10 bg-black/50 border rounded-2xl shadow-2xl backdrop-blur-2xl">
                {children}
            </div>
        </div>
    )
}