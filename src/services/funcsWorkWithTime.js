function formatTime(time) {
  let mins = time % 60;
  let hours = (time - mins) / 60;
  if (mins < 10) {
    mins = "0" + mins;
  } else if (hours < 10 && hours !== 0) {
    hours = "0" + hours;
  }
  return `${hours}:${mins}`;
}
function formatTimeDuration(time) {
  let timeDur = formatTime(time).replace(":", "ч ");
  return `${timeDur}м`;
}
function getArrivalTime(timeDeparture, timeDuration) {
  let date = new Date(timeDeparture);
  let minDeparture = date.getHours() * 60 + date.getMinutes();
  let time = minDeparture + timeDuration;
  if (time > 1440) {
    time -= 1440;
  }
  return formatTime(time);
}
function getDepartureTime(date) {
  let newDate = new Date(date);
  let min = newDate.getHours() * 60 + newDate.getMinutes();
  return formatTime(min);
}
function getFullTimeDuration(ticket) {
  return ticket.segments[0]["duration"] + ticket.segments[1]["duration"];
}
export {
  formatTime,
  formatTimeDuration,
  getArrivalTime,
  getDepartureTime,
  getFullTimeDuration,
};
