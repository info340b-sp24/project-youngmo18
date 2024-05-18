import React from "react";
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';
import HistoryList from "./card/HistoryList";

export function HistoryPage(props) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <HistoryList historyData={props.historyData}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}