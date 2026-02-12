//task1
function camelize(str) {
  return str
    .split('-').map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

//task2
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//task3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

//task4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );