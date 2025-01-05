import "../../../Styles/Students.css";
import { ToppersList } from "./ToppersList";

const SchoolToppers = () => {
  return (
    <section className="m-2 m-sm-5">
       <p className="text-center text-uppercase title fs-3 fw-bold text-decoration-underline">ACHIEVERS of 2024</p>
      {
        ToppersList.map(({id,standard,image})=>(
          <div className="d-flex flex-column justify-content-center align-items-center mb-5" key={id}>
            <p className="fw-bold fs-4" style={{color:"#344966"}}>{standard}</p> 
            <img src={image} className='toppers-img img-fluid' alt='No-Image'/>
          </div>
        ))
      }
       
      
    </section>
  )
}

export default SchoolToppers
