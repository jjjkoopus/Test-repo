const x = 'a';
const y = 'b';
const z = 'c';

let matched = false;

if (x === 'a') {
    console.log('Result: x is a');
    matched = true;
}

if (y === 'b') {
    console.log('Result: y is b');
    matched = true;
}

if (z === 'c') {
    console.log('Result: z is c');
    matched = true;
}

if (x === 'a' && y === 'b') {
    console.log('Result: x and y are ab');
    matched = true;
}

if (y === 'b' && z === 'c') {
    console.log('Result: y and z are bc');
    matched = true;
}

if (x === 'a' && z === 'c') {
    console.log('Result: x and z are ac');
    matched = true;
}

if (x === 'a' && y === 'b' && z === 'c') {
    console.log('Result: all are abc');
    matched = true;
}

if (!matched) {
    console.log('Result: none matched');
}
