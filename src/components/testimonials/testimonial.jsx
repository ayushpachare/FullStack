import React, { useRef } from 'react'
import "./testimonial.css"
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

      const testimonial = () => {
      
        const slider = useRef();
        let transletX = 0;

      function slidForward(){
         if(transletX>-50){
            transletX -=25;
            slider.current.style.transform = `translate(${transletX}%)`;
         }
      }      
      function slidBackward(){
          if(transletX<0){
            transletX += 25;
            slider.current.style.transform = `translate(${transletX}%)`
          }
      }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slidForward} />
      <img src={back_icon} alt="" className='back-btn'onClick={slidBackward}/>
      <div className="slider">
      <ul ref={slider}>
         <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity , USA</span>
                    </div>
                    <div>
                        <p>
                        My university is very good and has 
                        given me many opportunities to grow
                         both academically and personally. 
                         The faculty members are supportive, 
                         and the environment is very encouraging.
                          Thanks to the strong placement support
                           and training programs, I was able to
                            get placed in XYZ company. I am 
                            truly grateful for everything my
                             university has done for me.
                        </p>
                    </div>
                </div>
            </div>
         </li>

         <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Rohit Sharma</h3>
                        <span>Edusity , USA</span>
                    </div>
                    <div>
                        <p>
                        My university is very good and has 
                        given me many opportunities to grow
                         both academically and personally. 
                         The faculty members are supportive, 
                         and the environment is very encouraging.
                          Thanks to the strong placement support
                           and training programs, I was able to
                            get placed in XYZ company. I am 
                            truly grateful for everything my
                             university has done for me.
                        </p>
                    </div>
                </div>
            </div>
         </li>

         <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Lilly Wisdom</h3>
                        <span>Edusity , USA</span>
                    </div>
                    <div>
                        <p>
                        My university is very good and has 
                        given me many opportunities to grow
                         both academically and personally. 
                         The faculty members are supportive, 
                         and the environment is very encouraging.
                          Thanks to the strong placement support
                           and training programs, I was able to
                            get placed in XYZ company. I am 
                            truly grateful for everything my
                             university has done for me.
                        </p>
                    </div>
                </div>
            </div>
         </li>

         <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Steav Musk</h3>
                        <span>Edusity , USA</span>
                    </div>
                    <div>
                        <p>
                        My university is very good and has 
                        given me many opportunities to grow
                         both academically and personally. 
                         The faculty members are supportive, 
                         and the environment is very encouraging.
                          Thanks to the strong placement support
                           and training programs, I was able to
                            get placed in XYZ company. I am 
                            truly grateful for everything my
                             university has done for me.
                        </p>
                    </div>
                </div>
            </div>
         </li>

      </ul>
      </div>
    </div>
  )
}

export default testimonial
