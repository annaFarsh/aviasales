import React from "react";
function Checkbox({ nameCheckbox, setterCheckbox, text }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={nameCheckbox}
        onChange={() => {
          nameCheckbox === true ? setterCheckbox(false) : setterCheckbox(true);
        }}
      />
      <div className="label-text">{text}</div>
      <div className="pseudo-checkbox"></div>
    </label>
  );
}
export default Checkbox;
