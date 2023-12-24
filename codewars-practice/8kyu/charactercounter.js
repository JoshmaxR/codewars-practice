// 1) Given some text, count each alphabetic character's occurrence in it, regardless of the case.

// 2) Let's suppose you have to use an old terminal window to represent the occurrencies of each character in a text-based horizontal bar graph. The terminal has a maximum width, provided as parameter (max_units_on_screen), and you have to abide by it.

// For example, if the maximum width is 80, your longest bar in the graph will be scaled to this size and all the others have to be represented and scaled proportionally to this size. Every unit of the bar will be represented by the character #. See examples below for typical output format.

// 3) The bars of the graph have to be sorted by number of occurrencies (from biggest to lowest, before getting scaled), then by alphabetic order of the letter (from a to z). Approximation of decimal numbers will happen on the lowest integer (for example: 57.1, 57.2, 57.68, 57.999 will all get reduced to 57 )

// Example

// Input:

// count_and_print_graph("just a short text", 4)
// Output:

// t:####
// s:##
// a:#
// e:#
// h:#
// j:#
// o:#
// r:#
// u:#
// x:#
// Example 2

// Input:

// count_and_print_graph("just a short text", 23)
// Output:

// t:#######################
// s:###########
// a:#####
// e:#####
// h:#####
// j:#####
// o:#####
// r:#####
// u:#####
// x:#####

// My solution

function countCharsBarGraph(s, w) {
    let h = s.toLowerCase().split("").filter(c => /[a-z]/.test(c)).reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
    let m = Math.max(...Object.values(h));
    let r = Object.keys(h).map(k => [k, w * h[k] / m]);
    r.sort((a, b) => (b[1] - a[1]) || (a[0].localeCompare(b[0])));
    return r.map(([a, b]) => `${a}:${'#'.repeat(~~b)}`).join("\n");
  }