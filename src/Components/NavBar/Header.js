import "../../Styles/Header.css";
import "../../Styles/Home.css";
import { NavLink } from 'react-router-dom';
import { IoMdCall } from "react-icons/io";

const Header = () => {
  return (
    <section className='d-flex align-items-center justify-content-around'>
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <img className="header" src='/images/Home/Logo.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='mb-0 fw-bold fs-3 title'>SHANTHI RANI</p>
          <p className='fw-semibold mb-1'>Higher Secondary School</p>
          <p>Kallal, Sivaganga - 630305</p>
        </div>
      </div>
      <div className='d-none d-sm-flex flex-column flex-md-row gap-3 gap-md-2 gap-lg-5'>
        <NavLink to="/admissionprocess" className='btn-common px-3 py-2 fw-semibold rounded-2 border-0 text-decoration-none text-center'>For Admission</NavLink>
        <a href="https://wa.me/916382174912" target="_blank" rel="noopener noreferrer" className="btn-common border-0 px-3 py-2  text-decoration-none rounded-2 fw-semibold text-center">For Enquiry</a>
      </div>
    </section>
  )
}

export default Header;
