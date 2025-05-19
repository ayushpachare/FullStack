import React, { useState } from 'react'
import NavBar from './components/navBar/navBar.jsx'
import Hero from './components/navBar/hero/hero'
import Programs from './components/programs/program'
import Title from './components/title/Title.jsx'
import About from './components/about/About.jsx'
import Campus from './components/campus/campus.jsx'
import Testimonial from './components/testimonials/testimonial.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import Videoplayer from './components/videoplayer/videoplayer.jsx'

const App = () => {

  const [playstate , setplaystate] = useState(false);


  return (
    <div>
     <NavBar/>
     <Hero/>
     <Title subtitle = "Our PROGRAM" title = "what we offer"/>
     <div className="container">
     <Programs/>
     <About setplaystate={setplaystate}/> 
     <Title subtitle='Gallery' title='Campus Photos'/>
     <Campus/>
     <Title subtitle='TESTIMONIALS' title='What Student Say'/>
     <Testimonial/>
     <Title subtitle='Contact Us' title='Get in Touch'/>
     <Contact/>
     <Footer/>
     </div>
     <Videoplayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App



// play :- 28:36
