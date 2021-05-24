import React from 'react'
import {  Link, useLocation } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

function Rightsec() {
    const location =useLocation();
    useEffect(() => {
      if(location.pathname="/intrest"){  
        const subMenu=document.querySelector(".subMenu"); 
        const html="<li>Career pathway</li><li>Dream job</li><li>Intrested job</li>";
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
                    <h1>  Intrested </h1>
                    <h2> Intrested page </h2>
                </div>
                <div className="button_box">
                 <div className="btn_all">
                 <Link className="first_btn" to="/dream">Previous</Link>
                    <Link to="/"  className="second_btn">Submit</Link>
                 </div>
                </div>
            </div>
        </>
    )
}

export default Rightsec
