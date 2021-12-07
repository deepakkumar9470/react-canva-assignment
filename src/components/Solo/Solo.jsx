import React from 'react'
import './Solo.css'
import solo1 from '../../videos/solo1.mp4'
import folder from '../../images/folder.png'
import mobile from '../../images/mobile.png'
import comment from '../../images/comment.png'
import collaboration from '../../images/collaboration.png'

const Solo = () => {
    return (
        <div className="solo_main_container">

              <h2>Work solo , or as a tem</h2>
                <p>
                Whether you’re on your own or part of a small, big, local or global team, 
                get all your work and communication done here, on-brand every time.
               </p>

              
              <div className="solo_container">

                  <div className="solo_text">
                       <div className="icons">
                       <img src={folder} alt="folder" />
                       <span><b>Team folders</b> to help you stay organised, store brand assets, and manage content</span>
                       </div>
                       <div className="icons">
                       <img src={mobile} alt="folder" />
                       <span><b>Plan, create, schedule and publish</b> your social media posts directly from Canva</span>
                       </div>
                      
                       <div className="icons">
                       <img src={collaboration} alt="folder" />
                       <span><b>Real-time collaboration</b> across countries, companies, and departments</span>
                       </div>
                      <div className="icons">
                      <img src={comment} alt="folder" />
                       <span><b>Built-in comments</b> to communicate, work, and resolve suggestions in real-time</span>
                      </div>
                  </div>

                  <div className="left_video1">
                    <video class="vgWuEg" src={solo1} 
                    draggable="false" playsinline="" loop="" autoplay=""></video>
        
                    </div>


              </div>
        
                <button>See work solutions</button>

        </div>
    )
}

export default Solo
