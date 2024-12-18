import React from 'react'

const About = () => {
  return (
    <section className='p-2 p-sm-5 row align-items-center justify-content-between'>
       <div className='col-12 col-lg-6 text-center'>
          <img className="rounded w-100 border border-1 border-primary" src='/images/Home/About.jpg' alt='No-Image'/>
       </div>
       <div className='col-12 col-lg-6 mt-4'>
         <p className='title fw-bold fs-4 text-center'>ABOUT SHANTHI RANI SCHOOL</p>
         <p className='fw-bold'>"Knowledge is to serve"</p>
         <p className="lh-lg">Shanthi Rani firmly believes in making our School one of the best schools of our locality, by providing 360 degree education to our students through best –in- class academic facilities and churning out citizens who are inspiring leaders with humane and spiritual touch. Our Annual Report articulates and demonstrates the dynamic nature of our school, our commitment to excellence and our relentless pursuit of achieving our best. Established in 1997, Shanthi Rani Matric Hr. Sec. School, Kallal has been preparing our children for the future for the last twenty seven years.</p>
       </div>
    </section>
  )
}

export default About;