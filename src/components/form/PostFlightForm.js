import React from "react";

export function PostFlightForm() {
  return (
    <>
        <section class="post-container">
          <h1>Post Flights</h1>
          <form id="post-flights-form">
            <label for="from">From:</label>
            <input type="text" id="from" name="from" required />
            <label for="to">To:</label>
            <input type="text" id="to" name="to" required />
            <label for="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              required
            />
            <button type="submit">Post Flights</button>
          </form>
        </section>
    </>
  );
}