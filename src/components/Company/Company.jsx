import React from 'react'

import './Company.css'
import paypal from '../../images/paypal.png'
import intel from '../../images/intel.png'
import davis from '../../images/davis.png'
import gucci from '../../images/gucci.png'
import danone from '../../images/danone.png'
import baxter from '../../images/baxter.png'
const Company = () => {
    return (
        <div className="company_container">

              <span>Canva Pro is free for 
                  <span><a href="#education">education</a></span> <span>and</span>
                 <span> <a href="#non-profit">nonprofits</a></span>
              </span>

              <div className="brands">
                   <img src={intel} alt="intel" />
                   <img src={paypal} alt="paypal" />
                   <img src={davis} alt="davis" />
                   <img src={baxter} alt="baxter" />
                   <img src={gucci} alt="gucci" />
                   <img src={danone} alt="denone" />
              </div>
            
        </div>
    )
}

export default Company
