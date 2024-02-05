import React from 'react';



function Footer() {
    const handleToggleClick = () => {
      const menuToggle = document.querySelector('.menu__toggle');
      menuToggle.classList.toggle('clicked');
    };
  
    return (
     <div style={{textAlign:'center',marginBottom:"0%"}}>
      <p style={{textAlign:'center',color:'white'}} className="mt-5 mb-3 text-body-secondary">&copy; passtillios 2024</p>
      </div>
    );
  }
  
  export default Footer;
  