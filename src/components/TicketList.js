import React from "react";
import { Alert } from "antd";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";
import ShowMore from "./ShowMore";
import { getAllQuantityStops } from "../services/funcsWorkWithStops";
function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets);
  const quantityShowTickets = useSelector(
    (state) => state.tickets.quantityShowTickets
  );
  const filterStops = useSelector((state) => state.tickets.filterStops);
  const status = useSelector((state) => state.tickets.status);
  const allFilter = useSelector((state) => state.tickets.allFilter);

  function filteredTickets(tickets, filterStops, allFilter) {
    if (allFilter === true || filterStops.length === 4) {
      return [...tickets];
    } else if (allFilter === false && filterStops.length !== 0) {
      return [
        ...tickets.filter((elem) => {
          return filterStops.includes(getAllQuantityStops(elem));
        }),
      ];
    }
  }
  const showTickets = filteredTickets(tickets, filterStops, allFilter);
  return (
    <div className="ticket-list">
      <div className={status === "loading" ? "spin" : "spin-zero"}></div>
      {showTickets === undefined && (
        <Alert
          message="По вашему запросу не найдено ни одного билета"
          type="warning"
        ></Alert>
      )}
      {showTickets !== undefined &&
        showTickets.slice(0, quantityShowTickets).map((ticket, index) => {
          return (
            <Ticket key={new Date().toISOString() + index} ticket={ticket} />
          );
        })}
      {showTickets !== undefined && <ShowMore />}
    </div>
  );
}
export default TicketList;
