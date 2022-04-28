import React from 'react'
import "aos/dist/aos.css";




function RoadmapItem ({ data }) {
    return(
    <div  data-aos= "fade-up" data-aos-duration="1300"
    data-aos-easing="ease-in-out" className ="Container-Item">
        <div className = "Content">
            <h1 className="Title">{data.title}</h1>
            <p className="Text">{data.text}</p>
            <span className = "Circle"></span>
        </div>
    </div>
    )
}

export default RoadmapItem
