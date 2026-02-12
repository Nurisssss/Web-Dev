//task1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

//task3
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

//task4
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

//task5
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//task6


function random(min, max) {
    max++;
    return Math.floor(min + Math.random() * (max - min));
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );