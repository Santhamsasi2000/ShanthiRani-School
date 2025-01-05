import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import Direction from "./Direction";

const Location = () => {
  return (
    <section className='contact'>
      <div className="mb-3 mb-sm-5">
        <div className="">
          <p className="fw-bold fs-4 title mb-0">SHANTHI RANI</p>
          <p className="fw-semibold title">Higher Secondary School</p>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><SlLocationPin /></i>
            <a href="https://www.google.com/maps/dir//XMJ8%2BGGX+Shanthi+Rani+Matric+Hr+Sec+School,+Kallal,+Tamil+Nadu+630305/@9.9813563,78.6637704,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3b005f5226f2ccfb:0x67377686d48a4335!2m2!1d78.6663527!2d9.9813513!3e0?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer" className="email text-decoration-none text-secondary lh-lg fw-semibold"><span className="">XMJ8+GGX, Kallal, Tamil Nadu 630305</span></a>
            
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><IoMailOpenOutline /></i>
            <a href={`mailto:shanthiranimatric@gmail.com`} className="email text-secondary text-decoration-none fw-semibold">shanthiranimatric@gmail.com</a>
          </div>
          {/* <div className="d-flex gap-3 align-items-center mb-4">
            <i className="fs-3 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><LuPhoneCall /></i>
            <a  href={`tel:8309393118`} className="email text-secondary text-decoration-none fw-semibold">8309393118</a>
            <a  href={`tel:04565284919`} className="email text-secondary text-decoration-none fw-semibold">04565-284919</a>
          </div> */}
           <div className="d-flex gap-3 align-items-center mb-4">
            <i className="fs-3 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><LuPhoneCall /></i>
            <div>
              <div className="mb-1">
                <a href={`tel:8309393118`} className="email text-secondary text-decoration-none fw-semibold">8309393118,</a>
                <a href={`tel:04565284919`} className="email ms-2 text-secondary text-decoration-none fw-semibold">04565-284919</a>
              </div>
              <div>
                <span className="text-secondary text-mobile">For Admissions and Enquires:</span>
                <a href={`tel:6382174912`} className=" email ms-2 text-secondary text-decoration-none fw-semibold">6382174912</a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Direction/>
    </section>
  )
}

export default Location
