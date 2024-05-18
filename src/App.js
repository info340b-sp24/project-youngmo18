import React, { useState } from 'react';
import { IntroPage } from './components/IntroPage';
import { LoginPage } from './components/LoginPage';
import { FlightPage } from './components/FlightPage';
import { SignUpPage } from './components/SignUpPage';
import { HistoryPage } from './components/HistoryPage';
import { PostPage } from './components/PostPage';
import { DetailFlightPage } from './components/DetailFlightPage';

function App(props) {
  const [flights, setFlights] = useState(props.flights);
  console.log(flights);

  return (
    // <IntroPage />
    // <LoginPage />
    <FlightPage flightData={flights}/>
    // <SignUpPage />
    // <HistoryPage historyData={flights}/>
    // <PostPage />
    // <DetailFlightPage flightObject={flights[0]}/>
  );
}

export default App;
