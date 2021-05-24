import React from 'react'
import {  Link, useLocation } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

function Rightsec() {
    const location =useLocation();
    useEffect(() => {
      if(location.pathname="/"){  
        const subMenu=document.querySelector(".subMenu"); 
        subMenu.innerHTML='';
    
      } 
    })
    return (
        <>
            <div className="rightsec">
                <div className="rightsec_one">
                    <h1>Step  one </h1>
                    <h2>First page </h2>
                </div>
                <div className="button_box">
                 <div className="btn_all">
                 
                    <Link  to="/career_path" className="second_btn">Continue</Link>
                 </div>
                </div>
            </div>
        </>
    )
}

export default Rightsec
