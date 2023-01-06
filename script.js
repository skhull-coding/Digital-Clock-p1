let dayN = document.getElementById("DayName");
let timeN = document.getElementById("time");

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  return strTime;
};

const updateDate = () => {
  let now = new Date();
  dayN.textContent = now.toString().slice(0, 4);

  timeN.textContent = formatAMPM(now);
};

setInterval(() => {
  updateDate();
}, 1000);

updateDate();
