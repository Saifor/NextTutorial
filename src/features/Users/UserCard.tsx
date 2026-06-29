"use client"

interface Props {
    users: {
        id: number,
        name: string,
    }[];
}

export default function UserCard({users}: Props) {
    function handleUserNameClick() {
        console.log("handleUserNameClick called");
    }

    return(
        <div className="flex flex-col bg-white justify-center items-center text-red-500 gap-3">
            { users && (
                users.map((card, index) => (
                    <div key={index} className="flex flex-col">
                        <span onClick={(e) => console.log("Clicked on ", e.detail)}>Your loyalty card: {card.id}</span>
                        <span onClick={handleUserNameClick}>Username: {card.name}</span>
                    </div>
                ))
            )}
        </div>
    )
}