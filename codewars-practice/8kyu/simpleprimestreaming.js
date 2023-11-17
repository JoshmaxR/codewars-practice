// Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

// "2357111317192329313741434753596167717379..."
// You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.

// For example:
// solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
// Tests go up to about index 20000.

// More examples in test cases. Good luck!

// My solution

const solve = (a, b) => primeString(a + b).slice(a, a + b);

const primeString = l => {
  let s = '';
  let i = 1;
  while (s.length < l) 
    s += isPrime(++i) ? i : '';
  return s;
}

const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return false;
  return n > 1;
}