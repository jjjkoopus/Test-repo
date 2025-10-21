import { UsersResponse } from './users.dto';

export async function fetchUsers(): Promise<UsersResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    const data: UsersResponse = await response.json();
    return data;
}

