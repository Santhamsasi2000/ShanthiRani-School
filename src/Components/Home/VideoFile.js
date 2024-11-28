import React from 'react';
const videoDescription = 
{
    title: "School Isn’t the Same Without You",
    content: "This video beautifully showcases the essence and values of Shanthi Rani School. It highlights the school's welcoming environment, the dedication of our teachers, and the respect and importance we place on every student. Discover why Shanthi Rani School is the ideal choice for nurturing young minds and fostering their growth. The core principles of Shanthi Rani School: respect for students, a nurturing community, and a commitment to excellence. Explore why our school stands out as the best choice for holistic education.",
};

const VideoFile = () => {
  return (
    <section className='p-2 p-sm-5 row gx-5'>
      <div className='col- col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0'>
        <p className='fw-semibold mb-1 text-decoration-underline'>In Corona Time</p>
        <p className='title fw-bold fs-4 text-uppercase'>{videoDescription.title}</p>
        <p className='lh-lg'>
          {videoDescription.content}
        </p>
      </div>
      <div className='col- col-lg-6 order-1 order-lg-2 text-center'>
        <iframe className='video rounded img-thumbnail' src="https://www.youtube.com/embed/J1W5yoqR3Ek?si=wngnURkpYZ2waM_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default VideoFile;
