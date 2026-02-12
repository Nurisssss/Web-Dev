//task1

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("abcd") );

//task2
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

//task3
function truncate(str, maxlength) {
    if(str.length > maxlength){
        return str.slice(0, maxlength) + '…';
    } 
    return str;
}

//task4
function getValue(str){
    return +str.slice(1);
}