export function checkboxDisabled() {
  let checkbox = document.querySelectorAll(".forDisabled");
  if (document.querySelector("#allStops").checked === true) {
    checkbox.forEach((elem) => {
      elem.disabled = true;
    });
  } else {
    checkbox.forEach((elem) => (elem.disabled = false));
  }
}
