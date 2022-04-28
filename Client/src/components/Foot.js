import "./Foot.css"
import {AiFillInstagram} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Foot() {
    return(
        <>
        <div className="FootContainer">
            <div className="FollowUs">
                <h1>Follow Us !</h1>
                <Link to="//instagram.com/hortense_chancerelle?igshid=YmMyMTA2M2Y=" className="nav-icon">
                <AiFillInstagram />
                </Link>
            </div>
            <div className="RightPart">
            <h1>Terms of sales</h1>
            <h1>Legal Notice</h1>
            <h1>Privacy</h1>
            <h1>Policy</h1>
            </div>
        </div>
        <h1 className="END">© 2022 MetaZork. All rights reserved
        </h1>
        </>
    )
}

export default Foot