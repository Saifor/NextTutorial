"use client"

export default function ExportPage(){
    function handleClick() {
        console.log("handleClick called");
    }

    return (
        <div className="flex flex-col gap-3 items-center">
            <button onClick={(e) => console.log("Clicked on ", e.detail)}
                    className="px-3 py-1 border-2 w-fit rounded-2xl"
            >
                Click
            </button>
            <button onClick={handleClick}
                    className="px-3 py-1 border-2 w-fit rounded-2xl"
            >
                handleClick
            </button>
        </div>
    )
}