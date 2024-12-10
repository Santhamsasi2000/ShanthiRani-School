import React from 'react';
import { NextFeesData } from '../../Data/FeesData';

const NextFeesCard = () => {
  return (
    <>
     {
         NextFeesData.map(({id,std,term1,term2,term3,annual})=>(
            <>
            <tr key={id}>
              <td className='text-uppercase fw-bold px-1 py-2 p-sm-3'>{std}</td>
              <td className='px-1 py-2 p-sm-3'>{term1}</td>
              <td className='px-1 py-2 p-sm-3'>{term2}</td>
              <td className='px-1 py-2 p-sm-3'>{term3}</td>
              <td className='px-1 py-2 p-sm-3'>{annual}</td>
            </tr>
            </>
          ))
     }
    </>
  )
}

export default NextFeesCard;
