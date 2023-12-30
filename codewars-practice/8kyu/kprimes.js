// A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. For example:

// k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
// k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
// k = 5  -->  32, 48, 72, 80, 108, 112, ...
// A natural number is thus prime if and only if it is 1-prime.

// Task:
// Complete the function count_Kprimes (or countKprimes, count-K-primes, kPrimes) which is given parameters k, start, end (or nd) and returns an array (or a list or a string depending on the language - see "Solution" and "Sample Tests") of the k-primes between start (inclusive) and end (inclusive).

// Example:
// countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]
// Notes:

// The first function would have been better named: findKprimes or kPrimes :-)
// In C some helper functions are given (see declarations in 'Solution').
// For Go: nil slice is expected when there are no k-primes between start and end.
// Second Task: puzzle (not for Shell)
// Given a positive integer s, find the total number of solutions of the equation a + b + c = s, where a is 1-prime, b is 3-prime, and c is 7-prime.

// Call this function puzzle(s).

// Examples:
// puzzle(138)  -->  1  because [2 + 8 + 128] is the only solution
// puzzle(143)  -->  2  because [3 + 12 + 128] and [7 + 8 + 128] are the solutions

// My solution

function getKPrimes(n) {
    var result = [];
    for (var i = 2; i <= Math.sqrt(n); i += i > 2 ? 2 : 1) {
      while (n % i == 0) {
        result.push(i);
        n = n / i;
      }
    }
    if (n > 1) {
      result.push(n);
    }
    return result;
  }
  
  function countKprimes(k, start, nd) {
    var result = [];
    for(var i = Math.max(start, 2); i <= nd; i++) {
      var kPrimes = getKPrimes(i);
      if (kPrimes.length === k) {
        result.push(i);
      }
    }
    return result;
  }
  
  function puzzle(s) {
    var p1 = countKprimes(1, 2, s),
        p3 = countKprimes(3, 2, s),
        p7 = countKprimes(7, 2, s),
        result = 0;
    for (var p7i = 0; p7i < p7.length; p7i++) {
      for (var p3i = 0; p3i < p3.length && s > p7[p7i] + p3[p3i]; p3i++) {
        result += p1.indexOf(s - p7[p7i] - p3[p3i]) > -1 ? 1 : 0;
      }
    }
    return result;
  }