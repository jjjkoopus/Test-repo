import { Weekday } from './models/weekdays.js';
import { Weekend } from './models/weekends.js';

const monday = new Weekday('Monday', 1);
const friday = new Weekday('Friday', 5);
const sunday = new Weekend('Sunday', 'weekend');

console.log(monday.name);
console.log(sunday.type);

friday.name = 'Funday';

console.log(`${friday.name} is now weekday number ${friday.order}`);

monday.logInfo();
sunday.logInfo();

function weekSummary(days) {
    return days.map((d) => (d instanceof Weekend ? `${d.name} is a weekend` : `${d.name} is a weekday`)).join('\n');
}

const allDays = [monday, friday, sunday];
console.log('\n=== Week Summary ===');
console.log(weekSummary(allDays));
