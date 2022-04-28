import React from 'react'
import '../../App.css';
import Top from '../Top.js';
import Gallerie from '../Gallerie.js'
import Roadmap from '../Roadmap.js'
import Team from  '../Team.js'
import FAQ from  '../FAQ.js'
import Foot from  '../Foot.js'
import Navbar from '../navbar.js'





function Home() {
    return(
    <>
     <Top />
     <Gallerie/ >
     <Roadmap/>
     <Team />
     <FAQ  />
     <Foot />
     </>
);
}

export default Home;