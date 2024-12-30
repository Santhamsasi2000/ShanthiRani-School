const videoDescription = 
{
    title: "Why Choose Shanthi Rani School for Your Child's Future?",
    content: "Experience the best in education with our smart classrooms, designed to provide an interactive and engaging learning environment for 1st to 5th standard students. While nearby schools lack smart teaching facilities, we ensure a strong foundation for young learners through innovative technology. Recognized as the best school in Kallal, Kalayarkovil, Karaikudi, and Sivaganga, we prioritize modern education to build a brighter future for your child.",
};

const SmartClass = () => {
  return (
    <section className='p-3 p-sm-5 row gx-5 mb-4 mb-sm-0 mw-100'>
      <div className='col- col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0'>
        <p className='title fw-bold fs-4 text-uppercase'>{videoDescription.title}</p>
        <p className='lh-lg'>
          {videoDescription.content}
        </p>
        <a className="btn btn-primary px-4 py-2 shadow-sm" href="https://leadschool.in/" target="_blank" rel="noopener noreferrer"aria-label="Learn more about Sapience Publications">LEARN MORE</a>
      </div>
      <div className='col- col-lg-6 order-1 order-lg-2 text-center'>
      <img className="rounded w-100" src='/images/Home/Smart-Class.jpg' alt='No-Image'/>
      </div>
    </section>
  )
}

export default SmartClass;
