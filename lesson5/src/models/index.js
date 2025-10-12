import { Weekday } from './weekdays.js';
import { Weekend } from './weekends.js';

const monday = new Weekday('Monday', 1);
const tuesday = new Weekday('Tuesday', 2);
const wednesday = new Weekday('Wednesday', 3);
const thursday = new Weekday('Thursday', 4);
const friday = new Weekday('Friday', 5);

const saturday = new Weekend('Saturday', 'weekend');
const sunday = new Weekend('Sunday', 'weekend');

const allDays = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

allDays.forEach((day) => day.logInfo());
