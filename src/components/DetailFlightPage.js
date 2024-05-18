import React from "react";
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';

export function DetailFlightPage(props) {
  let flightObject = props.flightObject;
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <div class="flight-detail">
          <h1>Flight Details</h1>
          <article class="flight-detail-card">
            <img src="img/image2.jpg" alt="nusa-penida" />
            <p>From: {flightObject.from}</p>
            <p>To: {flightObject.to}</p>
            <p>Date: {flightObject.date}</p>
            <p>Departure Time: {flightObject.departure_time}</p>
            <p>Arrival Time: {flightObject.arrival_time}</p>
            <button>Book Flight</button>
          </article>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}