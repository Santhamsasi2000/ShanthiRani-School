import React from 'react';
import "../../Styles/Fees.css";
import FeesCard from './FeesCard';
import { NavLink } from 'react-router-dom';

const Fees = () => {
  return (
    <section className='m-5'>
       <p className='title text-center text-uppercase fw-bold fs-4 mb-4'>Fee Structure</p>
       <p className='mb-0 fw-semibold fs-5 text-center'> YEAR 2024 - 2025</p>
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
                <FeesCard />
              </tbody>
            </table>
          </div>
      
    </section>
  )
}

export default Fees;
