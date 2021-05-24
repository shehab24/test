import React from 'react'
import {  Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

function Rightsec() {
    const location =useLocation();
    useEffect(() => {
      if(location.pathname="/dream"){  
        const subMenu=document.querySelector(".subMenu"); 
        const html="<li>Career pathway</li><li>Dream job</li>";
        subMenu.innerHTML=html;
    
      }else{
        const subMenu=document.querySelector(".subMenu"); 
        subMenu.innerHTML='';
      }
    })
    return (
        <>
            <div className="rightsec">
                <div className="rightsec_one">
                    <h1>  Dream Job </h1>
                    <h2>Dream page </h2>
                </div>
                <div className="button_box">
                 <div className="btn_all">
                 
                    <Link className="first_btn" to="/career_path">Previous</Link>
                    <Link to="/intrest"  className="second_btn">Continue</Link>
                 </div>
                </div>
            </div>
        </>
    )
}

export default Rightsec
