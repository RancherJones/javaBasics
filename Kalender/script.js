const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

Kalender(month, year, 'kalender');

function Kalender (Monat, Jahr, KalenderId){
  const monthName = ["Janurary", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayName = ["Mo", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const dayNow = new Date();
  let thisDay = -1;
  if ((dayNow.getFullYear() == year) && (dayNow.getMonth() +1 == month)) {
    thisDay = dayNow.getDate();

    const time = new Date(year, month -1, 1);
    const start = (time.getDay() + 6) % 7;

    let stop = 31;

    if (month == 4 || month == 6 || month == 9 || month == 11){
       --stop;
    }
    
    if (month == 2) {
      stop = stop-3;
    }
  }
    
  const table = document.getElementById(KalenderId);
  if (!table){
    return false;
  }

  let monthHead = monthName[month - 1] + ' ' + year;
  caption = table.createCaption();
  caption.innerHTML = monthName;

  let row = table.insertRow(0);
  for (let i = 0; i < 7; i++) {
    let cell = row.insertCell(i);
    cell.innerHTML = day[i];
  }

  let numberOfDay = 1;

  for (let i = 0; numberOfDay <= stop; i++) {
    let row = table.insertRow(1 + i);
    for (let j = 0; j < 7; j++) {
      let cell = row.insertCell(j);

      if (((i == 0) && (j < start)) || (numberOfDay > stop)) {
        cell.innerHTML = ' ';
      }else {
        cell.innerHTML = numberOfDay;
        cell.className = 'calenderday'

        if (numberOfDay == thisDay) {
          cell.className = cell.className + 'today';
        }
        numberOfDay++;
      }
    }
  }
}