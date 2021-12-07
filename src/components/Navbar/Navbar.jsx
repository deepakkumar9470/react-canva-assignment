import React, { useState } from 'react'


import './Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'

import logo from '../../images/canva.png'

const Menu = () => {
    return (
        <>
                <p><a href="#home">Home</a></p>    
                 <p><a href="#discover">Discover</a></p>    
                 <p><a href="#pricing">Pricing</a></p>
       </>
    )
}
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="navbar">



            <div className="navbar_links">
                <div className="navbar_logo">
                 <img src={logo} alt="canva logo" />
                </div>


              <div className="navbar_links_container">
                      <Menu/>        
              </div>   

            </div>

             <div className="navbar_buttons">
                 <button>Log in</button>
                 <button>Sign up</button>
             </div>

             <div className="navbar_menu">
                 {toggleMenu ? 
                 <RiCloseLine 
                   color="#000" 
                   size={27}
                   onClick={()=>setToggleMenu(false)}/> 
                 
                 :

                 <FiMenu
                  color="#000" 
                  size={27}
                  onClick={()=>setToggleMenu(true)}/>

                 }
               {
                   toggleMenu && (
                    <div className="navbar_menu_container">
                       <div className="navbar_menu_container_links">

                            <Menu/>

                            <div className="navbar_buttons_contaner">
                                <button>Log in</button>
                                <button>Sign up</button>
                            </div>

                        </div>
                    </div>

                   )
               }

             </div>
             
       </div>
    )
}

export default Navbar
