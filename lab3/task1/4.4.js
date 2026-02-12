//task1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
//result is error

//task2
let calculator = {
   read() {
    this.a = Integer(prompt('Write the value of a', 0));
    this.b = Integer(prompt("Write the value of b", 0));
   },

   sum() {
    return this.a+this.b;
   },

   mul() {
    return this.a*this.b;
   }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//task3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this.step;
  },
  down() {
    this.step--;
    return this.step;
},
  showStep: function() { // shows the current step
    alert( this.step );
    return this.step;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0