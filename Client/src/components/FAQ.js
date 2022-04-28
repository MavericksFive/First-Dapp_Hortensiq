import react,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import FAQData from "./FAQ-data.js"
import './FAQ.css'


const FAQItem = ({data}) => {
    const [Click,setClick] = useState(false);
    function handleClick(){
        return(setClick(!Click))
    }

    return(
    <div className = "FAQItem-container" id="Faq">
        <div className="Top-container">
        <button onClick = {handleClick}>{!Click ?
        <AiOutlinePlus className="Plus"/> :
        <AiOutlineMinus/>}
        </button>
        <h1>{data.Question}</h1>
        </div>
        {Click && <div className = "Text-container">
        <h3>{data.Answer}</h3> </div>}
    </div>
    )
}
function FAQ() {
    return (
        <>
        <div className="FAQ-container">
        <h1 className="FAQ-title">FAQ</h1>
        {FAQData.map((data,i) =>
        (<FAQItem data={data} key={i} />
        ))}
        </div>
        </>
    )

}

export default FAQ