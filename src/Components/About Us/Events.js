import { EventsData } from '../../Data/EventsData';

const Events = () => {
  return (
    <section className='m-3 m-sm-5'>
        <p className='title text-center fw-bold fs-3 text-decoration-underline'>LIFE BEYOND THE CLASSROOM</p>
        <div className='row'>
        {
            EventsData.map(({id,image,title,desc}) =>
               <div className='col-lg-6 mb-5'>
                 <div className='card w-100 h-100' key={id}>
                    <img className='card-img-top' src={image} alt={title} aria-label={`Image of ${title}`} loading='lazy'/>
                    <div className='card-body'>
                        <p className='card-title fw-bold fs-5 text-center'>{title}</p>
                        <p className='card-text text-secondary'>{desc}</p>
                    </div>
                 </div>
               </div>
            )
        }
        </div>
   </section>
  )
}

export default Events
