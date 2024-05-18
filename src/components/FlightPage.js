import React, { useState } from "react";
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';
import FlightList from "./card/FlightList";
import { SearchFlightsForm } from "./form/SearchFlightForm";

export function FlightPage(props) {
  // flights is a useState because one of the implmentations in the future will be adding to the data (data will change), therefore useState is necessary
  const [flights, setFlights] = useState(props.flightData);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  // console.log(flights);
  // let flightArray = flights.map((flight) => flight);

  const applyFilter = (from, to, date) => {
    setFrom(from);
    setTo(to);
    setDate(date);
  };

  const displayData = flights.filter(flight => {
    console.log(flight.from === from && flight.to === to && !date);
    if (!from && !to && !date) return true;
    let check = flight.from.trim().toLowerCase() === from.trim().toLowerCase() && flight.to.trim().toLowerCase() === to.trim().toLowerCase();
    if (check && !date) {
      console.log(flight);
      return true;
    }
    if (check && flight.date === date) return true;
    return false; // Exclude otherwise
  });

  console.log(from + to + date);
  console.log(displayData);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section className="section-flight">
          <SearchFlightsForm applyFilterCallback={applyFilter} />
        </section>
        <FlightList flightData={displayData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}