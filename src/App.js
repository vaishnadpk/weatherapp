import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Helsingborg" />
        <footer>
          This is codes by Vaishna Upendran and is an{" "}
          <a
            href="https://github.com/vaishnadpk/weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code.
          </a>
        </footer>
      </div>
    </div>
  );
}
