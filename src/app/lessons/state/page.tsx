"use client"

import {useState} from "react";

export default function ExportPage(){
    const [state, setState] = useState(true);

    function handleClick() {
        setState(!state);
        console.log("state:", state);
    }

    return (
        <div className="flex flex-col gap-3 items-center">
            <button onClick={handleClick}
                    className="px-3 py-1 border-2 w-fit rounded-2xl"
            >
                Hide/Show text
            </button>
            <span className=""><b>Now state is: </b>
                {state ? "True" : "False"}
            </span>
            {
                state && (
                    <span className="">This text</span>
                )
            }
        </div>
    )
}