
function _drawClock() {
  console.log(Date)
  let date = new Date()

  let month = date.getMonth()
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let ampm = "am"

  let monthName = ''
  if (month == 0) { monthName = "January" }
  else if (month == 1) { monthName = "February" }
  else if (month == 2) { monthName = "March" }
  else if (month == 3) { monthName = "April" }
  else if (month == 4) { monthName = "May" }
  else if (month == 5) { monthName = "June" }
  else if (month == 6) { monthName = "July" }
  else if (month == 7) { monthName = "August" }
  else if (month == 8) { monthName = "September" }
  else if (month == 9) { monthName = "October" }
  else if (month == 10) { monthName = "November" }
  else { monthName = "December" }
  document.getElementById("date").innerHTML = monthName + " " + day

  if (hour > 12) {
    hour -= 12;
    ampm = "pm"
  }
  if (hour == 0) {
    hour = 12
  }


  let clock = hour + ":" + minute + " " + ampm
  document.getElementById("clock").innerText = clock

  setInterval(_drawClock, 1000)
}

export default class ClockService {
  getDrawClock() {
    return _drawClock()
  }
}