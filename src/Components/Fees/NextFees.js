import React from 'react';
import "../../Styles/Fees.css";
import NextFeesCard from './NextFeesCard';

const NextFees = () => {
  return (
    <section className='m-5'>
       <p className='title text-center text-decoration-underline fw-bold fs-4 mb-4'>FEE STRUCTURE</p>
       <p className='mb-0 fw-semibold fs-5 text-center'> YEAR 2025 - 2026</p>
       <div className="d-flex justify-content-center mt-3">
         <table className="table">
              <thead>
                <tr>
                  <th className="fw-bold text-uppercase px-1 py-2 p-sm-3 ">Class</th>
                  <th className="fw-bold text-uppercase px-1 py-2 p-sm-3 ">I Term</th>
                  <th className="fw-bold text-uppercase px-1 py-2 p-sm-3 ">II Term</th>
                  <th className="fw-bold text-uppercase px-1 py-2 p-sm-3 ">III Term</th>
                  <th className="fw-bold text-uppercase px-1 py-2 p-sm-3 ">Annual Fees</th>
                </tr>
              </thead>
              <tbody>
                <NextFeesCard/>
              </tbody>
            </table>
       </div>
       <p className="fw-semibold mt-4">Rules and Regulation For School Fees:</p>
       <ol>
         <li>The School Fee is collected for 12 months of the year.</li>
         <li>The Fees should be paid whole at the time of admission or in three terms.</li>
         <li>The student will not be permitted to write the terminal examination unless all fees due have been paid.</li>
         <li>Fees once paid will not be refunded in whole or in part under any circumstances.</li>
         <li>Students who remain absent for a long or short period of time, with or without permission, cannot be exempted from payment of fees.</li>
       </ol>
       <table>
         <tr>
           <th>Terms</th>
           <th>Last Date of Payment</th>
         </tr>
         <tr>
          <td>I Term</td>
          <td>Before or on July 1</td>
         </tr>
         <tr>
          <td>II Term</td>
          <td>Before or on October 1</td>
         </tr>
         <tr>
          <td>III Term</td>
          <td>Before or on January 1</td>
         </tr>
       </table>
    </section>
  )
}

export default NextFees;
