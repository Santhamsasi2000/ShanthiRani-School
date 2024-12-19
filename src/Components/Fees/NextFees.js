import React from 'react';
import "../../Styles/Fees.css";
import NextFeesCard from './NextFeesCard';
import FeesRules from './FeesRules';

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
       <FeesRules/>
    </section>
  )
}

export default NextFees;
