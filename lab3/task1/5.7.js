//task1
function unique(arr) {
  return Array.from(new Set(arr));
}

//task2
function deleteAnagrams(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( deleteAnagrams(arr) );

//task3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more