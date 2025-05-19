import React from 'react'
import './contact.css'
import msg_icon from '../../../src/assets/msg-icon.png'
import mail_icon from '../../../src/assets/mail-icon.png'
import phone_icon from '../../../src/assets/phone-icon.png'
import location_icon from '../../../src/assets/location-icon.png'
import white_arrow from '../../../src/assets/white-arrow.png'

const contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "94f59ab1-2616-42af-8973-d4907fd423b0");
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setResult(res.message);
          event.target.reset();
        } else {
          console.log("Error", res);
          setResult(res.message);
        }
      };

  return (
    <div className='contact'>
      <div className="contact-col">
           <h3>Send us a message <img src={msg_icon} alt="" /></h3>
           <p>
           Our institution, [College/University Name], is a premier educational institute dedicated to academic excellence and holistic student development. It offers a wide range of undergraduate and postgraduate programs in various disciplines. The college is equipped with modern infrastructure, experienced faculty, and a student-friendly environment that encourages learning and innovation.
           </p>
           <ul>
              <li><img src={mail_icon} alt="" />contact@123.dev</li>
              <li><img src={phone_icon} alt="" />+91 9876543455</li>
              <li><img src={location_icon} alt="" />54 massachus ave, cambrige <br /> MA 02139 , unitd states</li>
           </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' id="" required />

            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number ' required/>

            <label htmlFor="">write your messages here</label>
            <textarea name="meaage" rows="6" placeholder='Enter your message' id="" required></textarea>

            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default contact
