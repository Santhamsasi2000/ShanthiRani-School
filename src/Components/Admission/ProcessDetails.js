import React from 'react';
import "../../Styles/Admissions.css";
import { NavLink } from 'react-router-dom';
import { IoMdCall } from "react-icons/io";

const ProcessDetails = () => {
  return (
    <div className='p-5'>
       <p className='title text-center fw-bold fs-3'>ADMISSION PROCESS</p>
        <p className='fw-bold mt-5'>Step 1 :</p>
        <p className='mb-4'>3 ways in which you can start the admissions process:</p>
        <div className='d-flex flex-column flex-xl-row justify-content-between align-items-xl-center'>
          <div>
            <NavLink to="/admissionform" className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center">Click It</NavLink>
            <p className='mt-3'>For Online Admission</p>
            <p>Fill the All Details in the Online Admission Form and Submit It.</p>
            <p></p>
          </div>
          <p className='text-danger fw-semibold fs-5'>(or)</p>
          <div>
            <a className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center mt-" href="/images/Enquiry-Form.pdf" download="DonBosco Form">Download It</a> 
            <p className='mt-3'>Manual Admission Form</p>
          </div>
          <p className='text-danger fw-semibold fs-5'>(or)</p>
          <div>
            <a  href={`tel:6382174912`}className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center"> 
            <i className="fs-5 me-1"><IoMdCall /></i>     
            6382174912</a>
            <p className='mt-3'>Just Call this Number We will guide you for admission.</p>
          </div>
        </div>
       <p className='fw-bold mt-5'>Step 2 :</p>
       <p>We invite you to visit the school campus and learn about 
        the benefits that Shanthi Rani can offer your child.</p>
        <p className='fw-bold mt-5'>Step 3 :</p>
       <p>Please contact our dedicated admission counselors for assistance and 
        submit the application form along with the required documents.</p>
       <hr/>
       
    </div>
  )
}

export default ProcessDetails;
