// let n = 1000
// let fib = [0, 1];
// let memo = [0, 1];

// for (let i = 2; i <= n; i++) {
//   fib[i] = memo[i - 1] + memo[i - 2];
//   memo[i] = fib[i];
// }

// console.log(fib[n]);

let numbers = [14, 142, 15, 75, 23, 6, 26, 86]

const res = numbers.reduce((acc, cv) => [
  Math.min(acc[0], cv), 
  Math.max(acc[1], cv) 
], [Infinity, -Infinity]);

console.log(res);