import 'server-only'
import {MOCK_USERS, MOCK_LESSONS} from "@/lib/MOCKS";

export const db = {
    query: {
        users: {
            findMany: async () => {
                await new Promise(resolve => setTimeout(resolve, 5000));

                return MOCK_USERS;
            }
        },
        lessons: {
            findMany: async () => {
                await new Promise(resolve => setTimeout(resolve, 1000));

                return MOCK_LESSONS;
            }
        }
    }
}