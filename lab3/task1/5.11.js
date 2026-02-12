let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

//task2
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) );

//task3
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}

//task4
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}