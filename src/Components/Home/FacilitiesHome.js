import { NavLink } from "react-router-dom";
const FacilitiesHome = () => {
  return (
    <section className='p-3 p-sm-5 p-lg-0 py-lg-5 row gx-0 align-items-center justify-content-center gap-4 mb-4 mb-sm-0'>
    <div className='col-12 col-lg-5 text-center'>
       <img className="rounded w-100 common-border" src='/images/Home/Facilities-Home.jpg' alt='No-Image'/>
    </div>
    <div className='col-12 col-lg-6'>
      <p className='title fw-bold fs-4'>The Importance of All-Round Facilities in Education</p>
      <p>Comprehensive facilities play a crucial role in creating an ideal learning environment. From smart classrooms and playgrounds to libraries and labs, these resources enhance academic performance, promote physical and mental well-being, and support overall student development. Schools with modern facilities ensure students receive a well-rounded education, preparing them for a brighter future.</p>
      <NavLink to="/facilities" className='btn btn-primary px-4 py-2 shadow-sm'>SEE OUR ALL FACILITIES</NavLink>
    </div>
 </section>
  )
}

export default FacilitiesHome;
