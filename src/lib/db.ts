import 'server-only'

const MOCK_USERS = [
    {id: 0, name: "Me (Vladislav)", email: "saifor@bk.ru", age: 26, sex:"Male"},
    {id: 111, name: "Anton", sex: "male", age: 30},
    {id: 2, name: "Andrey", sex: "муж.", age: 18},
    {id: 3, name: "Артём", sex: "муж.", age: 22},
    {id: 4, name: "Evgeniy", sex: "машина", age: 22},
]

export const db = {
    query: {
        users: {
            findMany: async () => {
                await new Promise(resolve => setTimeout(resolve, 8000));

                return MOCK_USERS;
            }
        }
    }
}