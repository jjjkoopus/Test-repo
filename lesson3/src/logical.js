const a = 10;
const b = 5;
const c = 20;
const d = 7;
const e = 15;

console.log(a > b && c > d);
console.log(a > b && c < d);
console.log(a < b && c > d);
console.log(a < b && c < d);

console.log(a > b || c > d);
console.log(a > b || c < d);
console.log(a < b || c > d);
console.log(a < b || c < d);

console.log(!(a > b));
console.log(!(c < d));
console.log(!(a < b));
console.log(!(c > d));

console.log(a > b && e > c);
console.log(a < b || e < c);
console.log(!(d === 7));
console.log(a + b > c && e - d < b);
