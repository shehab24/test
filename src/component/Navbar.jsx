import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

function Navbar() {
    const location=useLocation();
       useEffect(() => {
        const roundTwo=document.querySelector(".round_2");
        const round=document.querySelector(".round");
           if(location.pathname=="/"){
            round.classList.add("active");
            roundTwo.classList.remove("active");
           }else if (location.pathname=="/career_path"){
               roundTwo.classList.add("active");
               round.classList.remove("active");
           }else if (location.pathname=="/dream"){
               roundTwo.classList.add("active");
               round.classList.remove("active");
           }else if (location.pathname=="/intrest"){
               roundTwo.classList.add("active");
               round.classList.remove("active");
           }
          
       })
    return (
        <>
            <div className="main_nav_box">
                <div className="logo_box">
                    <div className="logo"></div>
                </div>
                <div className="menu_box">
                    <div className="menu_item">
                    <div className="round "></div>
                   <div className="item_text"> <p>Step 1</p>
                    <small>District Profile</small></div>
                    </div>
                </div>
                <div className="menu_box_2">
                    <div className="menu_item_2">
                    <div className="round_2"></div>
                   <div className="item_text"> <p>Complete Profile</p>
                    <small>Personal Details</small></div>
                 
                    </div>
                    <div className="sub_item">
                        <ul className="subMenu">
                            
                           
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar
