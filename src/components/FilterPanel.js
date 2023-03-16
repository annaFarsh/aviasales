import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTicketsForCheckbox, filterAll } from "../store/ticketsSlice";
import Checkbox from "./Checkbox";

function FilterPanel() {
  const dispatch = useDispatch();
  const [all, setAll] = useState(true);
  const [zero, setZero] = useState(true);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const filterStops = useSelector((state) => state.tickets.filterStops);
  if (filterStops.length === 4 && !all) {
    setAll(true);
  }

  useEffect(() => {
    dispatch(filterTicketsForCheckbox({ value: 0 }));
  }, [dispatch, zero]);
  useEffect(() => {
    dispatch(filterTicketsForCheckbox({ value: 1 }));
  }, [dispatch, one]);
  useEffect(() => {
    dispatch(filterTicketsForCheckbox({ value: 2 }));
  }, [dispatch, two]);
  useEffect(() => {
    dispatch(filterTicketsForCheckbox({ value: 3 }));
  }, [dispatch, three]);
  useEffect(() => {
    dispatch(filterAll({ checked: all }));
  }, [dispatch, all]);
  return (
    <aside className="filter-block">
      <div className="filter-panel">
        <h2 className="filter-panel__h2">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
        <div className="filter-panel__checkbox">
          <div className="checkbox checkbox--all">
            <Checkbox nameCheckbox={all} setterCheckbox={setAll} text={"Все"} />
          </div>
          <div className="checkbox checkbox--0stops">
            <Checkbox
              nameCheckbox={zero}
              setterCheckbox={setZero}
              text={"Без пересадок"}
            />
          </div>
          <div className="checkbox checkbox--1stops">
            <Checkbox
              nameCheckbox={one}
              setterCheckbox={setOne}
              text={"1 пересадка"}
            />
          </div>
          <div className="checkbox  checkbox--2stops">
            <Checkbox
              nameCheckbox={two}
              setterCheckbox={setTwo}
              text={"2 пересадки"}
            />
          </div>
          <div className="checkbox  checkbox--3stops">
            <Checkbox
              nameCheckbox={three}
              setterCheckbox={setThree}
              text={"3 пересадки"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
export default FilterPanel;
