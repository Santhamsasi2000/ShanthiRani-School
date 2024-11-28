import React from 'react'

const About = () => {
  return (
    <section className='p-2 p-sm-5 row align-items-center justify-content-between'>
       <div className='col-12 col-lg-6 text-center'>
          <img className="about-img rounded img-thumbnail" src='/images/Home/Main.jpg' alt='No-Image'/>
       </div>
       <div className='col-12 col-lg-6 mt-4'>
         <p className='title fw-bold fs-4 text-center'>ABOUT OUR SCHOOL</p>
         <p className='text-wrap ms-2 lh-lg'>SHANTHI RANI Higher Secondary School was established in 1991 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in KALAYARKOIL block of SIVAGANGA district of Tamil Nadu. The school consists of Grades from 6 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. Tamil is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.</p>
       </div>
    </section>
  )
}

export default About;