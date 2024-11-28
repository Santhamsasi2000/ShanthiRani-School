import "./App.css";
import Facilities from "./Components/Facilities/Facilities";
import Students from "./Components/Students/Students";
import ContactUs from "./Components/ContactUs/ContactUs";
import Fees from "./Components/Fees/Fees";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/NavBar/Header";
import Menus from "./Components/NavBar/Menus";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import AdmissionProcess from "./Components/Admission/AdmissionProcess";
import AdmissionForm from "./Components/Admission/AdmissionForm";
import ContactForm from "./Components/ContactUs/ContactForm";
import Academics from "./Components/Students/Academics";
import ContactUsForm from "./Components/ContactUs/ContactForm/ContactUsForm";
import OtherServices from "./Components/OtherServices";

function App() {
  return (
    <>
      {/* <Header/>
      <Menus/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/admissionprocess" element={<AdmissionProcess/>}/>
           <Route path="/admissionform" element={<AdmissionForm/>}/>
           <Route path="/student" element={<Students/>}/>
           <Route path="/facilities" element={<Facilities/>}/>
           <Route path="/fees" element={<Fees/>}/>
           <Route path="/payment" element={<PayOnline/>}/>
           <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        <Footer/> */}
        <Fees/>
    </>
  );
}

export default App;
