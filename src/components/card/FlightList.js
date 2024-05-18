import React, { useState } from "react";

function FlightCard(props) {
  console.log(props.flightObject);
  let flight = props.flightObject;
  return (
    <div>
      <img src={flight.img} alt={flight.img} />
      <p>From: {flight.from}</p>
      <p>To: {flight.to}</p>
      <p>Date: {flight.date}</p>
    </div>
  );
}

function FlightList(props) {
  // const [flights, setFlights] = useState(props.flightData);
  console.log("FLIGHT LIST ____________________");
  console.log(props.flightData);

  let cardList = props.flightData.map((flight) => {
    return (<FlightCard flightObject={flight} />);
  });

  return (
    <>
      <section className="places-section">
          <h2>✈️ Available Flights ✈️</h2>
          <article className="searchFlightsForm">
            {cardList}
          </article>
        </section>
    </>
  );
}

export default FlightList;