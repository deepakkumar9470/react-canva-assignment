import React from 'react'
import './Inspired.css'
import video from '../../videos/video1.mp4'
const Inspired = () => {
    return (
        <div className="inpired_container">

            <div className="left_video">
             <video class="vgWuEg" src={video} 
             draggable="false" playsinline="" loop="" autoplay=""></video>
   
            </div>  


             <div className="text_container">
                <h2 className="start_text">Start inspired</h2>
                <p>With thousands of professional templates, images and quality content to choose from, get a 
                    headstart on bringing your best ideas and work to life.
               </p>

              <button className="design_Button">Create a design</button>
             </div>

        </div>
    )
}

export default Inspired
