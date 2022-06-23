import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Calculation from "./Calculation";
import Information from "./Information";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/what">BMI</Link>
          </li>
          <li>
            <Link to="/">Calculate BMI</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/what" element={<Information />} />
        <Route exact path="/" element={<Calculation />} />
      </Routes>
    </div>
  );
}
export default App;