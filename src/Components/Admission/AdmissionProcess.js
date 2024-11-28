import React from 'react';
import "../../Styles/Admissions.css";
import { NavLink } from 'react-router-dom';

const AdmissionProcess = () => {
  return (
    <div className='p-5'>
       <p className='title text-center fw-bold fs-3'>ADMISSION PROCESS</p>
        <p className='fw-bold mt-5'>Step 1 :</p>
        <p>Interested parents may obtain the Registration
            Form from the school office or fill out the online inquiry form.</p>
        <div className='d-flex flex-column flex-sm-row gap-2 gap-sm-5'>
            <NavLink to="/admissionform" className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center">ONLINE ADMISSION FORM</NavLink>
            <a className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center" href="/images/Enquiry-Form.pdf" download="DonBosco Form">MANUAL ADMISSION FORM</a> 
        </div>
       <p className='fw-bold mt-5'>Step 2 :</p>
       <p>We invite you to visit the school campus and learn about 
        the benefits that Shanthi Rani can offer your child.</p>
        <p className='fw-bold mt-5'>Step 3 :</p>
       <p>Please contact our dedicated admission counselors for assistance and 
        submit the application form along with the required documents.</p>
       <hr/>
       <p className='fw-bold'>Required Documents For AdmissionProcess :</p>
       <ol>
         <li>Recent 3 passport size photos (Less than 200Kb)</li>
         <li>Birth Certificate</li>
         <li>Aadhar Card</li>
         <li>Proof of Address</li>
         <li>Community certificate (if applicable) (SC/ST/MBC/OBC/DNC/BC)</li>
         <li>Report card or Progress card for the latest term / semester from the school last attended.</li>
         <li>A Certificate from a qualified and licensed medical practitioner showing the blood group and details of allergies and special medical conditions of the child (if any)</li>
         <li>For students joining Class XI, kindly furnish if available a copy of Class IX Registration Card and copy of Class X board exam Hall Ticket or Mark Sheet.</li>
         <li>Passport and immigration documents</li>
         <li>Professional particulars of parents.</li>
       </ol>
    </div>
  )
}

export default AdmissionProcess;
