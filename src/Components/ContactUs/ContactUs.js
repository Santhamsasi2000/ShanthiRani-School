import "../../Styles/ContactUs.css";
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location";

const ContactUs = () => {
  return (
    <section className="p-3 p-sm-5 d-flex flex-column flex-lg-row gap-5 justify-content-between">
       <Location/>
       <ContactUsForm/>
    </section>
  )
}

export default ContactUs
