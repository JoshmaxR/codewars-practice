// Background
// Every time you photocopy something the quality of the copy is never quite as good as the original.

// But then you make a copy of copy, and then a copy of that copy, et cetera... And the results get worse each time.

// This kind of degradation is called Generation Loss.

// Here is a fun example of generation loss copying VHS tapes.

// Kata task
// In this Kata you will be given 2 sheets of paper.

// The first one is the original, and the second one is the result of copying many times. Let's call these papers orig and copy.

// Only a small % of generation loss happens at each copy, but the effect is cummulative and the copies quickly become more like gibberish.

// Your task is to return true/false if orig is a possible ancestor of copy.

// Notes
// The orig document may include any kind of character
// Copied characters will degrade as follows: A-Z ⇒ a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒  
// Any other character not mentioned above (e.g. digits) do not degrade
// For the uppercase to lowercase degradation the letters must be the same (i.e. A ⇒ a ... Z ⇒ z)
// Example
// (5% error rate)

// My solution

function generationLoss(orig, copy) {

    if (orig.length !== copy.length)
      return false;
  
    let regex = [ / /, /\./, /\:/, /\+/, /#/, /[a-z]/, /[A-Z]/ ]
    ,    rank = char => regex.findIndex(r => r.test(char));
  
    for (let i = 0; i < orig.length; i++) {
  
      let r1 = rank(orig[i])
      ,   r2 = rank(copy[i]);
  
      if (Math.min(r1, r2) === -1 && orig[i] !== copy[i])
        return false;
  
      if (r1 < r2)
        return false;
  
      else if (/[a-z]/i.test(copy[i]) && orig[i].toLowerCase() !== copy[i].toLowerCase())
        return false;
  
    }
   
    return true;
        
  }