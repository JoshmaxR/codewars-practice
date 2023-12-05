// Write

// function repeatingFractions(numerator, denominator)
// that given two numbers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part has repeated digits, replace those digits with a single digit in parentheses.

// For example:

// repeatingFractions(1,1) === '1'
// repeatingFractions(1,3) === '0.(3)'
// repeatingFractions(2,888) === '0.(0)(2)5(2)5(2)5(2)5(2)5(2)'

// My solution

function repeatingFractions(n, d) {
    return String(n/d).replace(/(?<=\..*)(\d)\1+/g,"($1)");
  }