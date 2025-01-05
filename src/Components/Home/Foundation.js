import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../Styles/Foundation.css";

const Foundation = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="foundation p-3 p-sm-5 row justify-content-center gx-0">
      <div className="col-sm-6 col-lg-3">
        <p className="fo-title">OUR EXPERIENCE</p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fo-subtitle">
            {
            counterOn && <CountUp start={0} end={28} duration={2} delay={0} separator="" />
            } YEARS
          </p>
        </ScrollTrigger> 
      </div>
      <div className="col-sm-6 col-lg-3">
        <p className="fo-title">STUDENTS</p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fo-subtitle">
            {
            counterOn && <CountUp start={0} end={500} duration={2} delay={0} />
            }
            +
          </p>
        </ScrollTrigger> 
      </div>
      <div className="col-sm-6 col-lg-3">
        <p className="fo-title">TEACHERS</p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fo-subtitle">
            {
            counterOn && <CountUp start={0} end={50} duration={2} delay={0} />
            }
            +
          </p>
        </ScrollTrigger> 
      </div>
      <div className="col-sm-6 col-lg-3">
        <p className="fo-title">RESULT</p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
        <p className="fo-subtitle">
          {
          counterOn && <CountUp start={0} end={100} duration={2} delay={0} />
          }
          %
        </p>
        </ScrollTrigger> 
      </div>
    </section>
  );
};

export default Foundation;
