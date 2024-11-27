import React from 'react'
import PageHeader from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate} from 'react-simple-animate';
// import { skillsData } from '../utills'
import './styles.scss'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { SiNextdotjs, SiTailwindcss, SiFigma, SiCsharp, SiMysql, SiSwagger, SiMongodb, SiDotnet, SiTypescript } from 'react-icons/si';

const skillsdatas = [
  {
    icon: <FaHtml5 />,
    label: 'HTML'
  },
  {
    icon: <FaCss3Alt />,
    label: 'CSS'
  },
  {
    icon: <FaJs />,
    label: 'JAVASCRIPT'
  },
  {
    icon: <FaReact />,
    label: 'REACT.JS'
  },
  {
    icon: <SiNextdotjs />,
    label: 'NEXT.JS'
  },
  {
    icon: <SiTypescript />,  // TypeScript icon
    label: 'TYPESCRIPT'
  },
  {
    icon: <MdDesignServices />,
    label: 'MATERIAL UI'
  },
  {
    icon: <SiTailwindcss />,
    label: 'TAILWIND.CSS'
  },
  {
    icon: <FaGitAlt />,
    label: 'GIT'
  },
  {
    icon: <SiFigma />,
    label: 'FIGMA'
  },
  {
    icon: <SiCsharp />,
    label: 'C#'
  },
  {
    icon: <SiMysql />,
    label: 'SQL'
  },
  {
    icon: <SiSwagger />,
    label: 'SWAGGER'
  },
  {
    icon: <SiMongodb />,
    label: 'MONGODB'
  },
  
];


const Skills = () => {

  return (
    <section id='skills' className='skills'>
      <PageHeader 
        headerText="Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
   
      <div className='skills__wrapper'>
        {
          skillsdatas.map((item, index) => (
            <div key={index} className='skills__wrapper_hold'>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{ transform: 'translateX(-200px)' }}
                end={{ transform: 'translateX(0px)' }}
              >
                <p className='skills__icon'>{item.icon} </p>
                <h3 className='skills__txt'>{item.label}</h3>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;
