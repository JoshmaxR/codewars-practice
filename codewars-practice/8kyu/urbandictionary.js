// Design a data structure that supports the following two operations:

// addWord (or add_word) which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter
// You may assume that all given words contain only lowercase letters.

// Examples
// addWord("bad")
// addWord("dad")
// addWord("mad")

// search("pad") === false
// search("bad") === true
// search(".ad") === true
// search("b..") === true
// Note: the data structure will be initialized multiple times during the tests!

// My solution

class WordDictionary {
    constructor() {
      this.words = [];
    }
    addWord(word) {
      this.words.push(word);
    }
    search(pattern) {
      const re = new RegExp(`^${pattern}$`);
      return this.words.some(w => re.test(w));
    }
  }