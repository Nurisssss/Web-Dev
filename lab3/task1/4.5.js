//task1
//Yes, if a function returns an object then new returns it instead of this.

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

//task2
function Calculator() {

  this.read = function() {
    this.a = +prompt('value of a?', 0);
    this.b = +prompt('value of b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task3
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);