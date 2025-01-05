import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Banner from "./Components/Home/Banner";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Components/Home/About";
import Foundation from "./Components/Home/Foundation";
import SmartClass from "./Components/Home/SmartClass";
import Facilities from "./Components/Facilities/Facilities";
import FacilitiesHome from "./Components/Home/FacilitiesHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App/>
      <Foundation/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
