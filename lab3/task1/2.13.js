// task1
let i = 3;

while (i) {
  alert( i-- );
}
// last value alerted is 1

//task2
i = 0;
while (++i < 5) alert( i ); // alert -> 1 2 3 4
i = 0;
while (i++ < 5) alert( i ); // alert -> 1 2 3 4 5
// they are not same

//task3
for (let i = 0; i < 5; i++) alert( i ); // alert -> 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); // alert -> 0 1 2 3 4
// they are same

//task4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) alert( i );
}

//task5
i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//task6
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//task7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; // not a prime, let's check next i
  }

  alert( i ); // i is a prime number
}