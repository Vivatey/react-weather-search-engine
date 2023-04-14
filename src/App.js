import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Doha" />
      <footer>
        Coded by Viv and is{" "}
        <a
          href="https://github.com/Vivatey/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced
        </a>
      </footer>
    </div>
  );
}
