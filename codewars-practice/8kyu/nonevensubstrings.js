// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

// Good luck!

// My solution

function solve(s){
    return [...s].reduce((t,n,i)=>t+(+n%2?i+1:0),0);
  };