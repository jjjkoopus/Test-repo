export {};

const sumArray = (arr: (number | string | boolean)[]): number => {
    let sum: number = 0;
    arr.forEach((value: number | string | boolean): void => {
        if (typeof value === 'number') {
            sum += value;
        }
    });
    return sum;
};

const multiplyArray = (arr: (number | string | boolean)[]): number => {
    let result: number = 1;
    arr.forEach((value: number | string | boolean): void => {
        if (typeof value === 'number') {
            result *= value;
        }
    });
    return result;
};

const numArray: number[] = [10, 20, 30, 40, 50];
const strArray: string[] = ['10', '20', '30', 'text'];
const mixedArray: (number | string | boolean)[] = [5, 'apple', true, 15, '25', false];

console.log('Sum of numArray:', sumArray(numArray));
console.log('Sum of strArray:', sumArray(strArray));
console.log('Sum of mixedArray:', sumArray(mixedArray));

console.log('Multiplication of numArray:', multiplyArray(numArray));

