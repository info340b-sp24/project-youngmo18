import React, { useState } from "react";

function HistoryCard(props) {
  let flight = props.historyObject;
  return (
    <>
      <li>
        <article>
          <p>From: {flight.from}</p>
          <p>To: {flight.to}</p>
          <p>Time: {flight.date}</p>
          <p>-------------------</p>
        </article>
      </li>
    </>
  );
}

function HistoryList(props) {
  // const [flights, setFlights] = useState(props.flightData);
  let cardList = props.historyData.map((flight) => {
    return (<HistoryCard historyObject={flight} />);
  });

  return (
    <div className="history">
      <div className="history-container">
        <h1>Booking History</h1>
        <ul>
          {cardList}
        </ul>
      </div>
    </div>
  );
}

export default HistoryList;