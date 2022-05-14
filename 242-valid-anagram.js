/* Runtime: 91 ms, faster than 75.66% of JavaScript online submissions for Valid Anagram.
Memory Usage: 42.4 MB, less than 93.83% of JavaScript online submissions for Valid Anagram. */

const isAnagram = function(s, t) {
   if (s.length !== t.length) return false

   const array1 = Array.from({length: 26}, (x, i) => 0);
   // const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

   for (let i = 0; i < s.length; i++) {
      let index = s.charCodeAt(i) - 97
      array1[index] += 1
   }

   for (let j = 0; j < t.length; j++) {
      let index = t.charCodeAt(j) - 97
      array1[index] -= 1
   }
   return array1.every(x => x === 0)
};

/* Runtime: 58 ms, faster than 99.94% of JavaScript online submissions for Valid Anagram.
 Memory Usage: 42 MB, less than 98.86% of JavaScript online submissions for Valid Anagram.

Added improvements here:
1. Simpler initialisation of the array
2. Use of character codes rather than a second array */

const isAnagramFast = function(s, t) {
   const array1 = new Array(26).fill(0);

   for (let i = 0; i < s.length; i++) {
      let index = s.charCodeAt(i) - 97
      array1[index] += 1
   }

   for (let j = 0; j < t.length; j++) {
      let index = t.charCodeAt(j) - 97
      array1[index] -= 1
   }
   return array1.every(x => x === 0)
};
