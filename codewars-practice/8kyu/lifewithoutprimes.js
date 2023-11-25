// Consider an array that has no prime numbers, and none of its elements has any prime digit. It would start with: [1,4,6,8,9,10,14,16,18,40,44..].

// 12 and 15 are not in the list because 2 and 5 are primes.

// You will be given an integer n and your task will be return the number at that index in the array. For example:

// solve(0) = 1
// solve(2) = 6
// More examples in the test cases.

// Good luck!

// My solution

function solve(n) {
  
    const isPrime = num => {
      for (let i = 2; i <= num/2; i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    }
    
    let result = 1, i = 1;
    
    while (result <= n) {
      i++
      if (!isPrime(i) && !/[2357]/.test(i+'')) result++;
    }
    
    return i;
  };