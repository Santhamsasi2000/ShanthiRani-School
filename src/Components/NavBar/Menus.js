import React from 'react';
import { NavLink } from 'react-router-dom';

const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ADMISSIONS
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/admissionprocess" className="dropdown-item">Admission Process</NavLink></li>
            <li><NavLink to="/admissionform" className="dropdown-item">Admission Enquiry Form</NavLink></li>
          </ul>
      </div>
      <NavLink to="/student" className="navlink px-sm-4 py-sm-1">STUDENTS</NavLink>
      <NavLink to="/facilities" className="navlink  px-sm-4 py-sm-1">FACILITIES</NavLink>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FEES
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/fees" className="dropdown-item">Fees Structure</NavLink></li>
            <li><NavLink to="/payment" className="dropdown-item">Online Payment</NavLink></li>
          </ul>
      </div>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT US</NavLink>
     
    </section>
  )
}
export default Menus
