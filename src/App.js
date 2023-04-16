import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tasmania" />
      <footer>
        Coded by Viv and is{" "}
        <a
          href="https://github.com/Vivatey/react-weather-search-engine"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced
        </a>
      </footer>
    </div>
  );
}
