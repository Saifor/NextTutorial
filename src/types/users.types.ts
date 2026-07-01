export interface UsersProps {
    users: {
        id: number,
        name: string,
        email?: string,
        age?: number,
        sex?: string,
        phone?: string,
    }[];
}