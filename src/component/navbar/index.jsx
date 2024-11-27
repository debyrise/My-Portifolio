import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaReact} from "react-icons/fa"
import {HiX} from "react-icons/hi"
import './styles.scss';


  const data = [
   { label: "HOME",
    to: '/'
  },
  { label: "ABOUT",
    to: '/about'
  },
  { label: "RESUME",
    to: '/resume'
  },
  { label: "SKILLS",
    to: '/skills'
  },
  { label: "PROJECT",
    to: '/project'
  },
  { label: "CONTACT",
    to: '/contact'
  },
  ]

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false)

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);

  }

  const handleLinkClick = () => {
    setToggleIcon(false); // Close the menu when a link is clicked
  }
  return (
    <div> 
        <nav className='navabr'>
          <div className='nav__Container'>
              <h1>Deborah Ujunwam</h1>
          </div>
            <ul className={`navBar_menu ${toggleIcon ? 'active' : ''}`}>

              {
                data.map((item,key) =>(
                  <li key={key} className='navBar_menu_item'>
                  <Link  className='navBar_menu_item_links' to={item.to}
                      onClick={handleLinkClick}   // Close the menu on link click
                   >
                     {item.label}
                  </Link>

                  </li>

                ))
              }

            </ul>
            <div className='nav_icon' onClick={handleToggleIcon}>
            {
              toggleIcon ? <HiX size={30} /> :  <FaBars  size={30} />
            }
            
            </div>
        </nav>
    </div>
  )
}

export default NavBar;