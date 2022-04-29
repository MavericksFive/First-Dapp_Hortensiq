import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {NavHashLink,HashLink} from 'react-router-hash-link'
import Logo from '../components/logo.svg'
import './navbar.css';
import {AiFillInstagram} from 'react-icons/ai'
import { Fade as Hamburger } from 'hamburger-react'

const scrollWithOffset = (el,px) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = px;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}
const NavbarLinks = () => {
   return(
<>
    <div>
    <HashLink className= "nav-link" to="/#Gallerie"  scroll={el => scrollWithOffset(el, -80)} >
    <h3>GALLERIE</h3>
     </HashLink>
     </div>
     <div>
     <HashLink  className= "nav-link" to="/#Roadmap" scroll={el => scrollWithOffset(el,-20)}>
     <h3>ROADMAP</h3>
     </HashLink>
     </div>
     <div>
     <HashLink className= "nav-link" to="/#Team"  scroll={el => scrollWithOffset(el,-30)}>
     <h3>TEAM</h3>
     </HashLink>
     </div>
     <div>
      <HashLink  className= "nav-link" to="/#Faq" scroll={el => scrollWithOffset(el, -200)}>
      <h3>FAQ</h3>
         </HashLink>
     </div>
     <div>
            <Link to="//instagram.com/hortense_chancerelle?igshid=YmMyMTA2M2Y=" className="nav-icon">
            <AiFillInstagram />
            </Link>
            </div>
     </>)
}


function Navbar() {
    const [Click,setClick] = useState(false);
    function handleClick(){
        return(setClick(!Click))
    }
    return (
    <>
    <nav className="nav-bar">
        <div className="navbar-container">
            <div className = "navbar-leftside">
             <div>
            <HashLink to="/#Top" className="navbar-logo" scroll={el => scrollWithOffset(el, -240)}>
            <img src={Logo} className="navbar-logo" alt="logo" />
            </HashLink>
            </div>
            <div> <HashLink to="/#Top" className ="nav-headlink" scroll={el => scrollWithOffset(el, -240)}>
            <h3>Hortensia</h3>
            </HashLink>
            </div>
            </div>

            <div className="navbar-rightside">
            <NavbarLinks />
            </div>
            <div className="Menu-button">
            <Hamburger color='#000000' size ={25} toggled={Click} onToggle={handleClick}/>
            </div>
        </div>
          {Click && <ul className="menu-list">
            <li className = "menu-item">
              <HashLink to="/#Gallerie" className= "menu-link"  onClick={handleClick} scroll={el => scrollWithOffset(el, -80)}>
                  GALLERIE
              </HashLink>
              </li>
              <li className = "menu-item">
              <HashLink to="/#Roadmap" className= "menu-link"  onClick={handleClick} scroll={el => scrollWithOffset(el, -20)}>
                  ROADMAP
              </HashLink>
              </li>
               <li className = "menu-item">
              <HashLink to="/#Team" className= "menu-link"  onClick={handleClick} scroll={el => scrollWithOffset(el, -30)}>
                  TEAM
              </HashLink>
              </li>
              <li className = "menu-item">
              <HashLink to="/#Faq" className= "menu-link"  onClick={handleClick} scroll={el => scrollWithOffset(el, -200)}>
                  FAQ
              </HashLink>
              </li>
              <li className = "menu-item">
              <Link to="//instagram.com/hortense_chancerelle?igshid=YmMyMTA2M2Y=" className="menu-icon" onClick={handleClick}>
            <AiFillInstagram />
            </Link>
            </li>
          </ul>}
    </nav>
    </>
  )
}


export default Navbar