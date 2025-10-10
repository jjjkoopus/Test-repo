function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (typeof value === 'number') {
            sum += value;
        }
    }

    return sum;
}

const numArray = [10, 20, 30, 40, 50];
const strArray = ['10', '20', '30', 'text'];
const mixedArray = [5, 'apple', true, 15, '25', false];

console.log('Sum of numArray:', sumArray(numArray));
console.log('Sum of strArray:', sumArray(strArray));
console.log('Sum of mixedArray:', sumArray(mixedArray));

function multiplyArray(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result *= arr[i];
        }
    }

    return result;
}

console.log('Multiplication of numArray:', multiplyArray(numArray));
