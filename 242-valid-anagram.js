/* Runtime: 91 ms, faster than 75.66% of JavaScript online submissions for Valid Anagram.
Memory Usage: 42.4 MB, less than 93.83% of JavaScript online submissions for Valid Anagram. */

const isAnagram = function(s, t) {
   if (s.length !== t.length) return false

   const array1 = Array.from({length: 26}, (x, i) => 0);
   const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

   for (let i = 0; i < s.length; i++) {
      let index = array2.indexOf(s[i])
      array1[index] += 1
   }

   for (let j = 0; j < t.length; j++) {
      let index = array2.indexOf(t[j])
      array1[index] -= 1
   }

   return array1.every(x => x === 0)

};

console.log(isAnagram("sant", "ands"))
