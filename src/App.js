import "./App.css";
import Background from "./Background";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Background />
      <div className="container">
        <h1 className="title">Weather Forecast</h1>
        <Weather defaultCity="Helsingborg" />
        <footer>
          This is coded by Vaishna Upendran and is an Open-sourced code on{" "}
          <a
            href="https://github.com/vaishnadpk/weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://ubiquitous-kashata-23e420.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
