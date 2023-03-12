import logo from "../img/logo.svg";
import { Tabs, Alert } from "antd";
import React, { useEffect } from "react";
import TicketList from "./TicketList";
import FilterPanel from "./FilterPanel";
import {
  searchID,
  getTickets,
  getFastestTickets,
  getCheapestTickets,
  getOptimalTickets,
} from "../store/ticketsSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.tickets.status);
  const count = useSelector((state) => state.tickets.count);
  const tickets = useSelector((state) => state.tickets.tickets);
  const filterStops = useSelector((state) => state.tickets.filterStops);
  useEffect(() => {
    dispatch(searchID());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch, count, tickets, filterStops]);

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
      <main className="main">
        <div className="content">
          <FilterPanel />

          {status === "reject" && <Alert message="Server Error" type="error" />}
          <div className="all-tickets">
            <Tabs
              destroyInactiveTabPane="false"
              onChange={(key) =>
                key === "Fastest"
                  ? dispatch(getFastestTickets())
                  : key === "Optimal"
                  ? dispatch(getOptimalTickets())
                  : dispatch(getCheapestTickets())
              }
              items={[
                {
                  key: "Cheapest",
                  label: `САМЫЙ ДЕШЕВЫЙ`,
                  children: <TicketList />,
                },
                {
                  key: "Fastest",
                  label: `САМЫЙ БЫСТРЫЙ`,
                  children: <TicketList />,
                },
                {
                  key: "Optimal",
                  label: `ОПТИМАЛЬНЫЙ`,
                  children: <TicketList />,
                },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
