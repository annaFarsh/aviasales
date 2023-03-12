import React from "react";
import {
  getArrivalTime,
  formatTimeDuration,
  getDepartureTime,
} from "../services/funcsWorkWithTime";
import { getStops, getQuantityStops } from "../services/funcsWorkWithStops";

function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;
  let {
    origin: origin1,
    destination: destination1,
    date: date1,
    stops: stops1,
    duration: duration1,
  } = segments[0];
  let {
    origin: origin2,
    destination: destination2,
    date: date2,
    stops: stops2,
    duration: duration2,
  } = segments[1];
  return (
    <div className="ticket">
      <div className="ticket-header">
        <div className="ticket-header__price">{price} Р</div>
        <div className="ticket-header__logo">
          <img
            alt="Логотип авиакомпании"
            src={`//pics.avs.io/99/36/${carrier}.png`}
          ></img>
        </div>
      </div>
      <div className="ticket-info">
        <div className="ticket-info__text ticket-info__text--light">
          <span>
            {origin1}-{destination1}
          </span>
          <span>В ПУТИ</span>
          <span>{getQuantityStops(stops1)}</span>
        </div>
        <div className="ticket-info__text">
          <span>
            {getDepartureTime(date1)}-{getArrivalTime(date1, duration1)}
          </span>
          <span>{formatTimeDuration(duration1)}</span>
          <span>{getStops(stops1)}</span>
        </div>
      </div>
      <div className="ticket-info">
        <div className="ticket-info__text ticket-info__text--light">
          <span>
            {origin2}—{destination2}
          </span>
          <span>В ПУТИ</span>
          <span>{getQuantityStops(stops2)}</span>
        </div>
        <div className="ticket-info__text">
          <span>
            {getDepartureTime(date2)}-{getArrivalTime(date2, duration2)}
          </span>
          <span>{formatTimeDuration(duration2)}</span>
          <span>{getStops(stops2)}</span>
        </div>
      </div>
    </div>
  );
}
export default Ticket;
