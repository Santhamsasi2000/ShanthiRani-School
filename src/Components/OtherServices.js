import "../Styles/Others.css";

const OtherServices = () => {
  return (
    <section className='m-4'>
       <div className='row mb-5'>
            <div className='col- col-lg-6'>
              <img src='/images/Others/Tailoring-Center.jpg' alt='No-Image' className='services-img w-100 rounded order-2'/>
            </div>
            <div className='col- col-lg-6'>
                <p className='fw-bold fs-4 order-1'>TAILORING CENTER</p>
                <p>A Tailoring Center is a specialized establishment focused on providing custom clothing solutions, alterations, and sewing services. Tailoring centers cater to a variety of needs, ranging from stitching garments from scratch to modifying existing clothing to achieve a perfect fit. They are ideal for customers who seek personalized outfits, unique designs, or adjustments to their wardrobe.</p>
                <button className='btn btn-primary'>CONTACT US</button>
                <p className='fw-semibold text-center fs-5 mt-3'>COURSES OFFER</p>
                <div className="row">
                   <div className="col-6">
                      <p className='offers-list'>Fashion Designing</p>
                      <p className='offers-list'>Aari Embroidery</p>
                      <p className='offers-list'>Boutique Management</p>
                   </div>
                   <div className="col-6">
                      <p className='offers-list'>Tailoring Course</p>
                      <p className='offers-list'>Expert Design</p>
                      <p className='offers-list'>Screen Printing</p>
                   </div>
                </div>
              
            </div>
       </div>
       <div className='row'>
          <div className='col- col-lg-6 order-2'>
            <p className='fw-bold fs-4'>OLD AGE HOME</p>
            <p>SHANTHI RANI Old Age Home, also known as retirement home or senior citizen home, is facilities designed to provide a safe, comfortable, and supportive environment for elderly individuals who may not have the resources or family support to live independently. This home aim to cater to the physical, emotional, and social needs of senior citizens by offering specialized care and services.</p>
            <button className='btn btn-primary'>CONTACT US</button>
            <p className='fw-semibold text-center fs-5 mt-3'>FACILITIES OFFER</p>
            <div className='row'>
              <div className='col-6'>
                <p className='offers-list'>Accommodation</p>
                <p className='offers-list'>Nutritious Food</p>
                <p className='offers-list'>Healthcare Services</p>
              </div>
              <div className='col-6'>
                <p className='offers-list'>Security and Safety</p>
                <p className='offers-list'>Social Integration</p>
                <p className='offers-list'>Emotional Support</p>
              </div>
            </div>
          </div>
          <div className='col- col-lg-6 order-1'>
            <img src='/images/Others/Oldage-Home.jpg' alt='No-Image' className='services-img w-100 rounded'/>
          </div>
       </div>
    </section>
  )
}

export default OtherServices
