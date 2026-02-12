//task1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// there is no difference between this two functions

//task2
// using a question mark
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
//using ||
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//task3
function getMin(a, b){
    if(a < b) return a;
    return b;
}

//task4
function pow(a, b){
    return a**b;
}