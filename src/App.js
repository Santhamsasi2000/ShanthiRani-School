import "./App.css";
import Facilities from "./Components/Facilities/Facilities";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/NavBar/Header";
import Menus from "./Components/NavBar/Menus";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import AdmissionForm from "./Components/Admission/AdmissionForm";
import Academics from "./Components/Students/Academics";
import OtherServices from "./Components/About Us/OtherServices";
import ThisFees from "./Components/Fees/ThisFees";
import NextFees from "./Components/Fees/NextFees";
import SchoolToppers from "./Components/Students/Toppers/SchoolToppers";
import Disciplinary from "./Components/About Us/Disciplinary";
import AboutUs from "./Components/About Us/AboutUs";
import Events from "./Components/About Us/Events";
import Rules from "./Components/About Us/Rules";
import Parents from "./Components/About Us/Parents";
import HouseSystem from "./Components/Students/HouseSystem";
import Syallbus from "./Components/Students/Syallbus";
import AdmissionProcess from "./Pages/AdmissionProcess";

function App() {
  return (
    <>
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissionprocess" element={<AdmissionProcess/>} />
        <Route path="/admissionform" element={<AdmissionForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/discipline" element={<Disciplinary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/discipline" element={<Disciplinary />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/otherservices" element={<OtherServices />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/toppers" element={<SchoolToppers />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/house" element={<HouseSystem/>} />
        <Route path="/syallbus" element={<Syallbus/>} />
        <Route path="/fees24-25" element={<ThisFees />} />
        <Route path="/fees25-26" element={<NextFees />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
