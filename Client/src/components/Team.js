import React from 'react'
import "./Team.css"
import {Link} from 'react-router-dom'
import {AiFillInstagram} from 'react-icons/ai'
import TeamInformation from './Team-information'


const TeamMember = ({data}) => (
    <div className = 'Member-description'>
    <img className="Image" src={data.Image}/>
    <div className = "Information">
       <h1>{data.Name}</h1>
        <Link to={data.Insta} className ="Logo-insta">
        <AiFillInstagram />
        </Link>
    </div>
    </div>
)
function Team(){
    return(
        <div className = "Team-container" id="Team">
            <h1 className = "Team-title">Team</h1>
            <div className ="Team-description">
                    {TeamInformation.map((data,i) => (
                <TeamMember data={data} key= {i} />))
                }
             </div>
         </div>
           
    )
}

export default Team