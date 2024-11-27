import React from 'react'
import PageHeader from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <PageHeader 
    headerText = "Resume"
    icon = {<BsInfoCircleFill size={40} />  }
    
    />
   

    </section>
  )
}

export default Resume