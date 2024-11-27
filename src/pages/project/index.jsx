import React from 'react'
import PageHeader from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'

const Project = () => {
  return (
    <section id='project' className='project'>
    <PageHeader 
    headerText = "My Projects"
    icon = {<BsInfoCircleFill size={40} />  }
    
    />
   

    </section>
  )
}

export default Project