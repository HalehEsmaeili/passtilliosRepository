import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";


function Footer() {
    const handleToggleClick = () => {
      const menuToggle = document.querySelector('.menu__toggle');
      menuToggle.classList.toggle('clicked');
    };
  
    return (
      <div style={{width:"80%", marginTop: "10%", textAlign: 'center', marginBottom: 0, display: 'flex', justifyContent: 'center',position:"relative" ,marginLeft:"10%"}}>
      <Link to="/Impressum" className="button" style={{  }}>
        <p style={{ position:"relative",display: 'inline-block', textAlign: 'center',color:"#00eeb9",marginLeft:"30%",fontSize:"1.2em"  }} className="mt-5 mb-3 text-body-secondary">Impressum</p>
      </Link>
     
      <p style={{display: 'inline-block',paddingLeft:"4%", textAlign: 'center', color: 'white' }} className="mt-5 mb-3 text-body-secondary">&copy; passtillios 2022</p>
    
      <Link to="/Datenschutz" className="button" style={{  }}>
        <p style={{ display: 'inline-block', textAlign: 'center',fontSize:"1.2em",color:"#00eeb9" }} className="mt-5 mb-3 text-body-secondary">Datenschutz</p>
      </Link>
    </div>
    );
  }
  
  export default Footer;
  