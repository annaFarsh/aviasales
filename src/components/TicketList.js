import React from "react";
import { useSelector } from "react-redux";
function CardList() {
  const { tickets } = useSelector((state) => state.tickets);

  tickets.map((ticket) => {
    return (
      <div className="ticket">
        <div className="ticket-header">
          <div className="ticket-header__price">13400</div>
          <div className="ticket-header__logo">Картинка</div>
        </div>
        <div className="ticket-info">
          <div className="ticket-info__text"></div>
          <div className="ticket-info__text"></div>
        </div>
        <div className="ticket-info">
          <div className="ticket-info__text"></div>
          <div className="ticket-info__text"></div>
        </div>
      </div>
    );
  });
}

export default CardList;
