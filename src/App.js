import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather currentCity="Adelaide" />
        <footer className="mt-2">
          This project was coded by Chelsea D, is{" "}
          <a
            href="https://github.com/Chelsjavis/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://extraordinary-wisp-b4e48b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
