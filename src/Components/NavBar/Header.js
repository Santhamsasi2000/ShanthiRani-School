import React from 'react';
import "../../Styles/Home.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='m-2 d-flex flex-column flex-sm-row align-items-center justify-content-around'>
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <img className="header" src='/images/Home/3.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='mb-0 fw-bold fs-3 title'>SHANTHI RANI</p>
          <p className='fw-semibold'>Higher Secondary School</p>
        </div>
      </div>
      <div className='d-none d-sm-flex flex-sm-column flex-md-row gap-sm-3 gap-md-5'>
         <NavLink to="/admissionform" className='btn-common p-2 fw-semibold rounded-1 border-0 text-decoration-none'>Online Admission</NavLink>
         <NavLink to="/payment" className='btn-common p-2 fw-semibold rounded-1 border-0 text-decoration-none'>Pay Fees</NavLink>
      </div>

    </section>
  )
}

export default Header;
