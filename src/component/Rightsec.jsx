import React from 'react'
import {  Link, useLocation } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

function Rightsec() {
    const location =useLocation();
    useEffect(() => {
      if(location.pathname="/career_path"){  
        const subMenu=document.querySelector(".subMenu"); 
        const html="<li>Career pathway</li>";
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
                    <h2>Career pathway  </h2>
                </div>
                <div className="button_box">
                 <div className="btn_all">
                 <Link className="first_btn" to="/">Previous</Link>
                    <Link to="/dream"  className="second_btn">Continue</Link>
                 </div>
                </div>
            </div>
        </>
    )
}

export default Rightsec
