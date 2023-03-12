function getQuantityStops(array) {
  let str = "";
  if (array.length === 0) {
    str = "НЕТ ПЕРЕСАДОК";
  }
  if (array.length === 1) {
    str = "1 ПЕРЕСАДКА";
  }
  if (array.length > 1) {
    str = `${array.length} ПЕРЕСАДКИ`;
  }
  return str;
}
function getStops(array) {
  let fullStr = "";
  if (array.length !== 0) {
    for (let str of array) {
      fullStr += str + " .";
    }
    return fullStr.split(".");
  } else {
    return "—";
  }
}
function getAllQuantityStops(ticket) {
  return (
    ticket.segments[0]["stops"].length + ticket.segments[1]["stops"].length
  );
}
export { getStops, getQuantityStops, getAllQuantityStops };
