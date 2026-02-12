//task1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//task2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

//task3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumOfSalaries(obj){
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}

//task4
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) == 'number'){
            obj[key] *= 2;
        }
    }
}