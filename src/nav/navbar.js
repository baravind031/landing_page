import React from "react";
// import '.components/navbar.scss'
import Image from '../asset/Vector.png';
 


const navbar = ()=>{
    return (
        <>
        <div className="container">
        <div className="L_VPN">
        <img src={Image} alt="Vector Image" />
        {/* <img src="./assets/Vector.png" alt="Vector Image" /> */}
        <h2>LaslesVPN</h2>
        </div>
        <div >
            <button className="options">About</button>
            <button className="options">Features </button>
            <button className="options">Pricing </button>
            <button className="options">Testimonials</button>
            <button className="options"> Help</button>

        </div>
        <div >
            <button className="sign-in_option">Sign In</button>
           
        </div>
        <div className="btn"> 
            <button className="sign-in-btn">Sign In</button>
        </div>
        </div>
        </>
    )
}

export default navbar;