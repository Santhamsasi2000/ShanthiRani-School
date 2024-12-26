import React from 'react';
import About from '../Components/Home/About';
import Foundation from '../Components/Home/Foundation';
import VideoFile from '../Components/Home/VideoFile';
import SmartClass from '../Components/Home/SmartClass';
import FacilitiesHome from '../Components/Home/FacilitiesHome';
import Banner from '../Components/Home/Banner';

const Home = () => {
  return (
    <>
      {/* <Banner/> */}
      <About/>
      <SmartClass/>
      <FacilitiesHome/>
      <Foundation/>
    </>
  )
}

export default Home
