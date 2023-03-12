import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTicketsForCheckbox, filterAll } from "../store/ticketsSlice";
import { checkboxDisabled } from "../services/checkboxDisabled";

function FilterPanel() {
  const dispatch = useDispatch();
  const [all, setAll] = useState(false);
  const [zero, setZero] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  return (
    <aside className="filter-block">
      <div className="filter-panel">
        <h2 className="filter-panel__h2">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
        <div className="filter-panel__checkbox">
          <div className="checkbox checkbox--all">
            <input
              id="allStops"
              type="checkbox"
              checked={all}
              onChange={() => {
                all === true ? setAll(false) : setAll(true);
                checkboxDisabled();
                dispatch(filterAll({ checked: !all, value: "all" }));
              }}
            />
            <label htmlFor="allStops">
              <div className="label-text">Все</div>
              <div className="pseudo-checkbox"></div>
            </label>
          </div>
          <div className="checkbox checkbox--0stops">
            <input
              id="0stops"
              className="forDisabled"
              type="checkbox"
              checked={zero}
              onChange={() => {
                zero === true ? setZero(false) : setZero(true);
                dispatch(
                  filterTicketsForCheckbox({ checked: !zero, value: 0 })
                );
              }}
            />
            <label htmlFor="0stops">
              <div className="label-text">Без пересадок</div>
              <div className="pseudo-checkbox"></div>
            </label>
          </div>
          <div className="checkbox checkbox--1stops">
            <input
              id="1stops"
              type="checkbox"
              className="forDisabled"
              checked={one}
              onChange={() => {
                one === true ? setOne(false) : setOne(true);
                dispatch(filterTicketsForCheckbox({ checked: !one, value: 1 }));
              }}
            />
            <label htmlFor="1stops">
              <div className="label-text">1 пересадка</div>
              <div className="pseudo-checkbox"></div>
            </label>
          </div>
          <div className="checkbox  checkbox--2stops">
            <input
              id="2stops"
              type="checkbox"
              className="forDisabled"
              checked={two}
              onChange={() => {
                two === true ? setTwo(false) : setTwo(true);
                dispatch(filterTicketsForCheckbox({ checked: !two, value: 2 }));
              }}
            />
            <label htmlFor="2stops">
              <div className="label-text">2 пересадки</div>
              <div className="pseudo-checkbox"></div>
            </label>
          </div>
          <div className="checkbox  checkbox--3stops">
            <input
              id="3stops"
              type="checkbox"
              className="forDisabled"
              checked={three}
              onChange={() => {
                three === true ? setThree(false) : setThree(true);
                dispatch(
                  filterTicketsForCheckbox({ checked: !three, value: 3 })
                );
              }}
            />
            <label htmlFor="3stops">
              <div className="label-text">3 пересадки</div>
              <div className="pseudo-checkbox"></div>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default FilterPanel;
