import "../../Styles/ContactUs.css";
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location";

const ContactUs = () => {
  return (
    <section className="m-5 d-flex flex-column flex-md-row gap-5 justify-content-between ">
       <Location/>
       <ContactUsForm/>
    </section>
  )
}

export default ContactUs
