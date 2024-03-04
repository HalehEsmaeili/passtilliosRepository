import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";


function Footer() {
    const handleToggleClick = () => {
      const menuToggle = document.querySelector('.menu__toggle');
      menuToggle.classList.toggle('clicked');
    };
  
    return (
     <div style={{marginTop:"10%",textAlign:'center',marginBottom:0}}>
    {/* <p style={{textAlign:'center',color:'white'}} className="mt-5 mb-3 text-body-secondary">&copy; passtillios 2024</p>*/}
    
    <Link to="/Impressum" className="button">
    <p style={{display:'inline-block',textAlign:'center',color:'white'}} className="mt-5 mb-3 text-body-secondary">Impressum</p>
     </Link>
     <Link to="/Impressum" className="button">
    <p style={{display:'inline-block',textAlign:'center',color:'white'}} className="mt-5 mb-3 text-body-secondary">Datenschutz</p>
     </Link>
      

      </div>
    );
  }
  
  export default Footer;
  