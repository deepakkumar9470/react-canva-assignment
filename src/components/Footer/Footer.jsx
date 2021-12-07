import React from 'react'

import './Footer.css'
import {FaFacebook,FaTwitter,FaPinterest,FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="footer_container">
               <hr/>
             <div className="footer">
                
                  <div className="footer_links">
                      <h3>Browse</h3>
                      <a href="#apps">Apps</a>
                  </div>

                  <div className="footer_links">
                      <h3>Features</h3>
                      <a href="#apps">Photo Editing</a>
                  </div>

                  <div className="footer_links">
                      <h3>Product</h3>
                      <a href="#apps">For mobile</a>
                      <a href="#apps">Pro</a>
                      <a href="#apps">Educataion</a>
                      <a href="#apps">Pricing</a>
                  </div>

                  <div className="footer_links">
                      <h3>Company</h3>
                      <a href="#apps">About</a>
                      <a href="#apps">Terms and Privacy</a>
                      <a href="#apps">Developers</a>
                  </div>


             </div>

             <hr className="under_hr" />


             <div className="copyright">
                 <div className="copy-link">
                 <a href="#terms">Terms <span>and</span> Privacy</a>
                 <span className="copyright_span">&copy; 2021 All Right Reserved, Canva</span>
                 </div>

                 <div className="social_links">
                   <FaFacebook class="soc_icon" color="#0984e3" size={16}/>
                   <FaTwitter class="soc_icon" color="#1e90ff" size={16}/>
                   <FaPinterest class="soc_icon" color="#d63031" size={16}/>
                   <FaInstagram class="soc_icon" color="#ff7f50" size={16}/>

                 </div>

             </div>
        </div>
    )
}

export default Footer
