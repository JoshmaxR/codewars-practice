// In this Kata you are a detective!

// Your job is to understand if the possible solution of a murder is true or false, the only problem is that all the information that you have about the murder are in form of a logical expression.

// Example: Question - is it possible that:

// (1) The butler is innocent. (2) If the butler is innocent the murder was done outside of the kitchen. (3) The murder was done at midnight and in the kitchen.

// But to you are given only logical informations:

// (b)AND(!bOR!k)AND(n)AND(k)

// where:

//  b = the butler is innocent

//  k = the murder was done in the kitchen

//  n = the murder was done at midnight

// You can see that with k and n both = true, the poor butler can't be innocent. Why? Because if k is true and b is true then !bOR!k can't be true -> the logical expression is false.

// You need to write a method that take in input a String that contains a logical expression and then must return a boolean value; the method need to evaluate the logic expression and return false if the expression can't be true and true otherwise.

// The logic expression is always in the form with OR inside parentheses and AND outside, all the logical predicates are in lowercase (so there is a maximum of predicates) and inside parentheses. there aren't spaces or other characters except for exclamation point (that means not), parentheses and letters

// Same examples:

// (p) is OK

// (P) is NOT OK because P is not in lowercase

// (pOR!q)AND(z) is OK

// (p)OR(z) is NOT OK because the OR is outside parentheses

// p is NOT OK because p is outside parentheses

// ((a)AND(b)ORc) is NOT OK because parentheses can't be inside other parentheses

// My solution

function isPossible(expression) {
    const vars = {}, expr = [];
    let n = 0;
    for (const clause of expression.split('AND')) {
      let pos = 0, neg = 0;
      for (const x of clause.slice(1, -1).split('OR')) {
        const v = x.at(-1);
        if (!(v in vars)) vars[v] = 1 << n++;
        if (x[0] === '!') neg |= vars[v]; else pos |= vars[v];
      }
      expr.push([pos, neg]);
    }
    for (let k = 0; k < 1 << n; k++) {
      const nk = ~k;
      if (expr.every(([pos, neg]) => k & pos || nk & neg)) return true;
    }
    return false;
}  