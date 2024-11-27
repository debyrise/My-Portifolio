import React from 'react'
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import About from '../about';
import Skills from '../skills';
import Project from '../project';
import Contact from '../contact';

const Home = () => {
      const navigate = useNavigate();

   const  handleContactClick = () => {
    navigate('/Contact')
   }

  return (
    
    <section >
      

    <div  id='home' className='home'>
          <div className='home__text_wrapper'> 
                  <h1 className='H1'>
                      Hello, I'm  Deborah
                      <br />
                      Frontend developer
                  </h1>
              
                <div className='contact__holds'>
                    <button onClick={handleContactClick}>Contact Info</button>
                       <a href='/cv.pdf'>
                         <button >Download Cv</button>
                       </a>
                </div>
                  
           </div>
            
            <div className='deby'>
                <img src="DDDD.PNG" alt="" />
            </div>
     </div>

     <About />
    <Skills />
    <Project/>
    <Contact  />


   </section>
    
  )
}

export default Home