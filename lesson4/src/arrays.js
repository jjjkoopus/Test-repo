const data = [];

data.push('a');
data.push(2);
data.push(true);
console.log(data, data.length);

console.log(data[0], data[2]);

data[1] = 'b';
console.log(data, data.length);

const lastItem = data.pop();
console.log(lastItem, data.length);

data.push({ x: 10, y: 20 });
data.push(3);
data.push(false);
data.push('c');

console.log('---------------');

const stringItems = data.filter((item) => typeof item === 'string');
console.log('String items:', stringItems);

const firstNumber = data.find((item) => typeof item === 'number');
console.log('First number:', firstNumber);

const numbers = [9, 4, 7, 1];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', sortedNumbers);

data.forEach((item, index) => {
    console.log(`Index ${index}:`, item);
});

const typeSummary = data.map((item) => typeof item);
console.log('Types:', typeSummary);
