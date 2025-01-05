import React from 'react';
import About from '../Components/Home/About';
import Foundation from '../Components/Home/Foundation';
import SmartClass from '../Components/Home/SmartClass';
import FacilitiesHome from '../Components/Home/FacilitiesHome';
import Banner from '../Components/Home/Banner';

const Home = () => {
  return (
    <section className='mw-100'>
      {/* <Banner/> */}
      <About/>
      <SmartClass/>
      <FacilitiesHome/>
      <Foundation/>
    </section>
  )
}

export default Home
