import React from 'react'

import './Team.css'

const Team = () => {
    return (
        <div className="team_container">

               <h2>Templates for absolutely anything</h2>

               <div className="team_card_text">
                   <div className="team_card">
                    <h3>Canva Free</h3>
                    <p>For people and teams wanting to design absolutely anything, 
                        from logos and social media content to documents, prints and more. Tons of free templates, 
                        photos and fonts to bring your vision to life.
                    </p>
                    <button>Get Canva Free</button>
                   </div>

                   <div className="team_card">
                    <h3>Canva Pro</h3>
                    <p>For people and teams wanting to collaborate and grow their 
                        business. Includes social scheduling, team templates, 
                        brand management and other productivity tools.
                        </p>
                    <button>Start free trial</button>
                   </div>

                   <div className="team_card">
                    <h3>Canva Enterprise</h3>
                    <p>For large organisations needing design and communication 
                        tools at scale. Simplify your teams’ work with integrations to tools you use every day, advanced security 
                        and built-in approval workflows. Minimum 20 users.
                    </p>
                    <button>Learn more</button>
                   </div>

               </div>

            
        </div>
    )
}

export default Team
