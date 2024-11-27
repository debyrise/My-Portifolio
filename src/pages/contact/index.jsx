import React from 'react'
import PageHeader from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa";
import './styles.scss'


const personalDetails =[
  {
    label: "Name",
    value: "Deborah Ujunwam"
  },
  {
    value: "deborahoby693@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:deborahoby693@gmail.com"
  },
  {
    value: "https://www.linkedin.com/in/deborah-ujunwam-12ab61215/",
    icon: <FaLinkedin />,
     link: "https://www.linkedin.com/in/deborah-ujunwam-12ab61215/"
  },
  
   {
    value: "https://github.com/debyrise?tab=repositories",
    icon: < FaGithub />,
    link: "https://github.com/debyrise?tab=repositories"
   },
   {

    value: "08100364292",
    icon: <FaPhone />,
    link: "tel:+08100364292" 
  },


]

const Contact = () => {
  return (
    <section id='contact' className='contact'>
    <PageHeader 
    headerText = "My Contact"
    icon = {<BsInfoCircleFill size={40} />  }
    
    />

    <div className='contact__hold'>
    <h3 className='personal_info'>Personal Information</h3>
    <ul>
     {
       personalDetails.map((item,index) =>(
         <li key={index}>
         <a href={item.link} target="_blank" rel="noreferrer">
             <span className='icon'> {item.icon} </span>
             <span className='label'> {item.label} </span> 
             <span className='value'> {item.value} </span>
         </a>
         </li>

       ))
     }
     
     </ul>
    </div>
   

    </section>
  )
}

export default Contact