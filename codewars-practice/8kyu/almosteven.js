// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// My solution

var splitInteger = function(num, parts) {
    const n1 = Math.floor(num/parts),n2 = Math.ceil(num/parts);
    const arr = Array(parts).fill(n1);
    let sum = arr.reduce((a,c) => a+c,0);
    while(sum<num){
      sum = sum-n1+n2;
      arr[arr.lastIndexOf(n1)] = n2;
    } return arr;
  }