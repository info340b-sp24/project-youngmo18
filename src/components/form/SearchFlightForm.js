import React, { useState } from "react";

export function SearchFlightsForm(props) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!from || !to) {
      alert('Please fill in all fields.');
      return;
    }
    console.log("submit");
    props.applyFilterCallback(from, to, date);
  }
  return (
    <>
      <section className="flight-container">
        <h1>Find Flights</h1>
        <form id="search-flights-form">
          <label for="from">From*</label>
          <input type="text" id="from" name="from" value={from} onChange={handleFromChange} required />
          <label for="to">To*</label>
          <input type="text" id="to" name="to" value={to} onChange={handleToChange} required />
          <label for="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={date}
            onChange={handleDateChange}
            required
          />
          <button type="submit" onClick={handleSubmit}>Search Flights</button>
        </form>
      </section>
    </>
  );
}