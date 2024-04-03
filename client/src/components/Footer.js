import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./footer.css";
function Footer() {

    const navigate= useNavigate();

    const handleToggleClick = () => {

      const menuToggle = document.querySelector('.menu__toggle');
      menuToggle.classList.toggle('clicked');
    };
  
    return (
     
     
     <div style={{width:"100%",marginTop:"10%", textAlign: 'center', marginBottom: 0, display: 'flex', justifyContent: 'center',position:"relative" }}>
     
     <footer className="footer">
      <div className="footer-content">
        <span onClick={()=>navigate("/impressum")}  className="footer-link">Impressum</span>
        <span className="separator">|</span>
        <span onClick={()=>navigate("/datenschutz")}  className="footer-link">Data Policy</span>
        <span className="separator" >|</span>
        <span style={{margin:"0 10px"}} className="separator"> &copy; passtillios 2022 </span>
      </div>

    </footer>
{/*
        <button name='Impressum' onClick={()=>navigate("/impressum")} style={{ position:"relative",display: 'inline-block', textAlign: 'center',color:"#00eeb9",marginLeft:"30%",fontSize:"2vw"  }} className="mt-5 mb-3 text-body-secondary">Impressum</button>
       
    
      <p style={{display: 'inline-block',paddingLeft:"4%", textAlign: 'center', color: 'white' }} className="mt-5 mb-3 text-body-secondary">&copy; passtillios 2022</p>
    
      <Link to="/Datenschutz" className="button" style={{  }}>
        <p style={{ display: 'inline-block', textAlign: 'center',fontSize:"2vw",color:"#00eeb9" }} className="mt-5 mb-3 text-body-secondary">Datenschutz</p>
      </Link>
      */}
    </div>
    );
  }
  
  export default Footer;
  