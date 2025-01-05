import React from 'react';
import "../../Styles/Facilities.css";
import { FacilityData } from '../../Data/FacilityData';

const Facilities = () => {
  return (
    <section className='facilities p-3 p-sm-5'>
       <p className='title text-center fw-bold fs-3 text-decoration-underline'>FACILITIES</p>
       <div className='d-flex flex-wrap gap-5 justify-content-center'>
         {
            FacilityData.map(({id,image,title,desc}) =>
                <div className='card' key={id}>
                    <img className='card-img-top' src={image} alt={title} aria-label={`Image of ${title}`} loading='lazy'/>
                    <div className='card-body'>
                        <p className='card-title fw-bold fs-5 text-center'>{title}</p>
                        <p className='card-text text-secondary'>{desc}</p>
                    </div>
                </div>
            )
         }
       </div>
    </section>
    
  )
}

export default Facilities
