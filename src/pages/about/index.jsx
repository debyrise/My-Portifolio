import React from 'react'
import PageHeader from '../../component/pageHeader'
import {BsInfoCircleFill} from 'react-icons/bs'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";




const About = () => {
  const navigate = useNavigate();

  const  handleContactClick = () => {
   navigate('/Contact' )
  }
  return (
    <section id='about' className='about'>
    <PageHeader 
    headerText = "About Me"
    icon = {<BsInfoCircleFill size={40} />  }
    
    />
        <div className='about__content'>

              <div className='debyrise'>
                  <img src="dddprev.png" alt="" className='deby_img' />
              </div>


              <div className='about__content_hold'>
                

              <h3>Fontend Developer</h3>

              <div   className='card__hold'>
                      

              <div  className='card'>
               <h4> <FaBriefcase className='icons'/> <br /> Experience</h4>
              <p className='card__item'>2+ years <br/>Fontend Developer </p>
              </div>

              <div className='card'>
               <h4><FaGraduationCap  className='icons' /> < br/> Education</h4>
               <p className='card__item'>Food Science & Technology <br/> Institute of Management & Technology, <br/> Enugu State.</p>
               
              </div>

           </div>
                 
                       <p className='objective'> Dynamic and passionate Agile software developer with extensive expertise in React, Typescript, Next.js, CSS, HTML, and JavaScript. Proven ability to work collaboratively in a team environment, delivering high-quality software solutions through development, testing, deployment, and maintenance. Seeking to contribute to the success of a forward-thinking organization. </p>

                       <div className='contact__holds'>
                       <button onClick={handleContactClick}>Contact Info</button>

                       <a href='/cv.pdf'>
                         <button >Download Cv</button>
                       </a>

                       </div>

                       
              
              </div>
        </div>
          
   

    </section>

  )
}

export default About