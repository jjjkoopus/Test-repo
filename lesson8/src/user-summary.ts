import { User } from './users.dto';

export class UserSummary {
    id: number;
    fullName: string;
    city: string;
    company: string;

    constructor(user: User) {
        this.id = user.id;
        this.fullName = `${user.name} (${user.username})`;
        this.city = user.address.city;
        this.company = user.company.name;
    }
}
