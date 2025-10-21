import { fetchUsers } from './fetch-users';
import { UserSummary } from './user-summary';
import { Rectangle, Square, ShapePrinter } from './abstraction';

async function main() {
    try {
        const users = await fetchUsers();
        console.log('✅ Original users:', users);

        const summaries = users.map((user) => new UserSummary(user));
        console.log('✨ Transformed users:', summaries);
    } catch (error) {
        console.error('❌ Error:', error);
    }

    const rectangle = new Rectangle(5, 10);
    const square = new Square(7);

    const printer1 = new ShapePrinter(rectangle);
    const printer2 = new ShapePrinter(square);

    printer1.print();
    printer2.print();
}

main();
