import React from 'react'
import { AcademicsData } from '../../Data/AcademicsData'

const Academics = () => {
  return (
    <section className='m-4'>
      <p className='title text-center fw-bold fs-3 text-decoration-underline mb-4'>ACADEMICS</p>
      {
        AcademicsData.map(({id,image,title,standard,desc})=>(
            <div className='row mb-5' key={id}>
                {/* <img src={image} alt={title} className='col- col-lg-6 block-image'/> */}
                <div className='col- col-lg-6'>
                  <img src={image} alt={title} className='block-image w-100 rounded-3'/>
                </div>
                <div className='col- col-lg-6'>
                    <p className='fw-bold fs-4 text-uppercase mt-2 mt-md-0'>{title}</p>
                    <p className='fw-semibold'>{standard}</p>
                    <p className='text-secondary lh-lg'>{desc}</p>
                </div>
            </div>
        ))
      }
    </section>
  )
}

export default Academics
