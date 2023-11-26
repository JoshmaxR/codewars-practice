// Consider the range 0 to 10. The primes in this range are: 2, 3, 5, 7, and thus the prime pairs are: (2,2), (2,3), (2,5), (2,7), (3,3), (3,5), (3,7),(5,5), (5,7), (7,7).

// Let's take one pair (2,7) as an example and get the product, then sum the digits of the result as follows: 2 * 7 = 14, and 1 + 4 = 5. We see that 5 is a prime number. Similarly, for the pair (7,7), we get: 7 * 7 = 49, and 4 + 9 = 13, which is a prime number.

// You will be given a range and your task is to return the number of pairs that revert to prime as shown above. In the range (0,10), there are only 4 prime pairs that end up being primes in a similar way: (2,7), (3,7), (5,5), (7,7). Therefore, solve(0,10) = 4)

// Note that the upperbound of the range will not exceed 10000. A range of (0,10) means that: 0 <= n < 10.

// Good luck!

// My solution

const solve = (a, b) => {
    const primes = [];
    for (let i = a; i < b; i++) 
      if (isPrime(i)) primes.push(i);
  
    let count = 0;
    for (let i = 0, l = primes.length; i < l; i++)
      for (let j = i; j < l; j++)
        if (checkPrimes(primes[i], primes[j]))
          count++;
          
    return count;
  }
  
  const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false; 
    return n > 1;
  }
  
  const checkPrimes = (x, y) => isPrime((x * y).toString().split``.reduce((r, e) => r + +e, 0)) 