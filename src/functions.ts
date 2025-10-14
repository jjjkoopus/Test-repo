export {};

function sumArray(arr: (number | string | boolean)[]): number {
    let sum: number = 0;

    for (let i = 0; i < arr.length; i++) {
        const value: number | string | boolean = arr[i];
        if (typeof value === 'number') {
            sum += value;
        }
    }

    return sum;
}

function multiplyArray(arr: (number | string | boolean)[]): number {
    let result: number = 1;

    for (let i = 0; i < arr.length; i++) {
        const value: number | string | boolean = arr[i];
        if (typeof value === 'number') {
            result *= value;
        }
    }

    return result;
}

const numArray: number[] = [10, 20, 30, 40, 50];
const strArray: string[] = ['10', '20', '30', 'text'];
const mixedArray: (number | string | boolean)[] = [5, 'apple', true, 15, '25', false];

console.log('Sum of numArray:', sumArray(numArray));
console.log('Sum of strArray:', sumArray(strArray));
console.log('Sum of mixedArray:', sumArray(mixedArray));

console.log('Multiplication of numArray:', multiplyArray(numArray));

