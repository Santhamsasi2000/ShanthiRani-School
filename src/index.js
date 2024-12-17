import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import FormUptoXstd from "./Components/Admission/FormUptoXstd";
import ProcessDetails from "./Components/Admission/ProcessDetails";
import Entrance from "./Components/Admission/Entrance";
import ContactUs from "./Components/ContactUs/ContactUs";
import ContactUsForm from "./Components/ContactUs/ContactForm/ContactUsForm";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import AdmissionProcess from "./Pages/AdmissionProcess";
import Facilities from "./Components/Facilities/Facilities";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop/>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
