let str = "Hello";

str.test = 5;

alert(str.test);

// this code shouldnt work, it depends whether you use "use strict" or not
// if you use "use strict" -> error
// otherwise -> undefined