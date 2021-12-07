import React from 'react'

import './Collaboration.css'

import coll from '../../videos/collab.mp4'
const Collaboration = () => {
    return (
        <div className="collaboration_container">

             <div className="text_container">
                <h2>Collaborate with ease</h2>
                <p>Invite people to edit with you or set your whole team up in Canva Pro to 
                    manage brand assets, leave feedback, get approvals, and scale your visual content.
               </p>

              <button className="design_Button">Work together</button>
             </div>

            
          <div className="right_video">
             <video class="vgWuEg" src={coll} 
             draggable="false" playsinline="" loop="" autoplay=""></video>
   
            </div>  


        </div>
    )
}

export default Collaboration
