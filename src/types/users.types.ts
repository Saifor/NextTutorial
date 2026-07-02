export interface UsersProps {
    users: UserProps[];
}

export interface UserProps {
    id: number,
    name: string,
    email?: string,
    age?: number,
    sex?: string,
    phone?: string,
}