// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


// My solution

function swap(st){
    let letters = st.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < letters.length; i++){
      let char = letters[i];
      if (vowels.indexOf(char) >-1)
        letters[i] = char.toUpperCase();
    }
    return letters.join("");
  }