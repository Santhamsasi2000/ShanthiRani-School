import { HouseSystemData } from "../../Data/HouseSystemData"

const HouseSystem = () => {
  return (
    <section className="m-3 m-sm-5">
       <div className="row mb-5">
       <div className="col-xl-6 order-2 order-xl-1">
            <p className='d-xl-block d-none title text-center fw-bold fs-3 text-decoration-underline mb-3'>HOUSE SYSTEM</p>
            <p className="lh-lg">All school activities are organized by House system to build team spirit, foster unity, sports activity and instill a sense of responsibility among all students. Students are divided into 4 Houses. Each House will be guided by a teacher. Each house is named after a Vincentian Saint.</p>
       </div>
      <div className="col-xl-6 order-1 order-xl-2 mb-3 mb-xl-0">
          <p className='d-block d-xl-none title text-center fw-bold fs-3 text-decoration-underline mb-3'>HOUSE SYSTEM</p>
          <img className="w-100 rounded-3" src="/images/Students/House/Common.jpg" alt="No-Image"/>
      </div>
       </div>
       <div className="row gy-4">
          {
            HouseSystemData.map(({id,image,houseName,houseColor})=>(
              <div className="col-md-6" key={id}>
                <p className="fw-bold fs-5 text-center mb-1 text-uppercase">{houseName} ({houseColor})</p>
                <img src={image} alt="No-Image" className="w-100 rounded-3"/>
              </div>
            ))
          }
       </div>
    </section>
  )
}

export default HouseSystem
