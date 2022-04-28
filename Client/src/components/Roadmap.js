import React from 'react'
import "./Roadmap.css"
import  RoadmapItem from "./RoadmapItem.js"
import RoadmapData from "./DataRoadmap.js"


function Roadmap() {
    return(
        <div className="Big-container" id ="Roadmap">
        <h1 className = "Roadmap-title">Roadmap</h1>
        <div className="Roadmap-container">
        {RoadmapData.map((data, i) => (
            <RoadmapItem data={data} key={i} />))
        }
        </div>
        </div>
    )
    }

export default Roadmap