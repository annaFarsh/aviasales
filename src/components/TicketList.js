import React from "react";
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

  function filteredTickets(tickets, filterStops) {
    if (allFilter === true) {
      return [...tickets];
    } else if (filterStops.length !== 0) {
      return [
        ...tickets.filter((elem) => {
          return filterStops.includes(getAllQuantityStops(elem));
        }),
      ];
    } else {
      return [...tickets];
    }
  }
  const showTickets = filteredTickets(tickets, filterStops).slice(
    0,
    quantityShowTickets
  );
  return (
    <div className="ticket-list">
      <div className={status === "loading" ? "spin" : "spin-zero"}></div>
      {showTickets.map((ticket, index) => {
        return (
          <Ticket key={new Date().toISOString() + index} ticket={ticket} />
        );
      })}
      <ShowMore></ShowMore>
    </div>
  );
}
export default TicketList;
