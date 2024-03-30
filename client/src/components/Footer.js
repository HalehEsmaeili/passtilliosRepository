import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate= useNavigate();

    const handleToggleClick = () => {

      const menuToggle = document.querySelector('.menu__toggle');
      menuToggle.classList.toggle('clicked');
    };
  
    return (
      <div style={{width:"80%", marginTop: "10%", textAlign: 'center', marginBottom: 0, display: 'flex', justifyContent: 'center',position:"relative" ,marginLeft:"10%"}}>
     
        <button name='Impressum' onClick={()=>navigate("/impressum")} style={{ position:"relative",display: 'inline-block', textAlign: 'center',color:"#00eeb9",marginLeft:"30%",fontSize:"2vw"  }} className="mt-5 mb-3 text-body-secondary">Impressum</button>
       
       

     
      <p style={{display: 'inline-block',paddingLeft:"4%", textAlign: 'center', color: 'white' }} className="mt-5 mb-3 text-body-secondary">&copy; passtillios 2022</p>
    
      <Link to="/Datenschutz" className="button" style={{  }}>
        <p style={{ display: 'inline-block', textAlign: 'center',fontSize:"2vw",color:"#00eeb9" }} className="mt-5 mb-3 text-body-secondary">Datenschutz</p>
      </Link>
    </div>
    );
  }
  
  export default Footer;
  