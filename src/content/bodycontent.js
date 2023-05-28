import React from "react";
import Img from '../asset/Illustration.png'

const bodycontent  = ()=>{
    return(
        <>
        <div className="container">
            <div>
        <div className="body_content">
           Want anything to be easy with LaslesVPN. 
           </div> 
           <div className="Body_text"> 
            <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            </div>
        <div className="get_btn">

            <button className="get_Stated">Get Started</button>
        </div>
        </div>
        <div className="imge">
            
        {/* <img src="../assets/Illustration.png" alt="Vector Image" /> */}
       <img src={Img} alt="Vector Image" />
        </div>
        </div>
        </>
    )
}

export default bodycontent;