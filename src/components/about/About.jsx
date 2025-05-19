import React from 'react'
import '../about/Aboutc.css'
import about_img from '../../../src/assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplaystate}) => {
  return (
    <div className='about'>
      
      <div className='about-left'>
        <img src= {about_img} alt=""className='about-img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setplaystate(true)}}/>
      </div>

      <div className='about-right'>
       <h3>ABOUT UNIVERSITY</h3>
       <h2> ABOUT UNIVERSITY</h2>
       <p>
       Our university is committed to building a strong and lasting
        bond with people by focusing not just on academic excellence
         but also on real-world impact. We believe education is most
          powerful when it connects with the community, empowering 
          students and society alike. With a future-driven approach,
           we constantly upgrade our curriculum to match the evolving
            demands of industries.
       </p>

       <p>Our dedicated placement cell works closely with top companies, 
        ensuring that students are not only job-ready but also career-confident. 
        As we grow, we envision becoming a hub of innovation, opportunity, 
        and meaningful relationships that last beyond graduation.</p>

        <p>
        At our university, we believe that education is about connection 
         with knowledge, with people, and with the world. We’re continuously
          strengthening our bond with the wider community through outreach,
           partnerships, and inclusive initiatives. Looking ahead, we aim to 
           lead in innovation, research, and career development.
        </p>

      </div>
    
    </div>
  )
}

export default About
