const sumArray = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        if (typeof value === 'number') {
            sum += value;
        }
    });
    return sum;
};

const multiplyArray = (arr) => {
    let result = 1;
    arr.forEach((value) => {
        if (typeof value === 'number') {
            result *= value;
        }
    });
    return result;
};

const numArray = [10, 20, 30, 40, 50];
const strArray = ['10', '20', '30', 'text'];
const mixedArray = [5, 'apple', true, 15, '25', false];

console.log('Sum of numArray:', sumArray(numArray));
console.log('Sum of strArray:', sumArray(strArray));
console.log('Sum of mixedArray:', sumArray(mixedArray));

console.log('Multiplication of numArray:', multiplyArray(numArray));
