
import React, { useEffect, useState } from "react";


//import "./TeamPage.css";
import "./ContactPage.css";



import { useLanguageContext } from "../context/LanguageContext";
function Impressum () {
  const { t } = useLanguageContext();
    useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div style={{margin:"20%",marginTop:"60%",marginBottom:"50%"}} >
     
<h1>Impressum</h1>

<p>haleh esmaeili<br />
beckstrasse 8<br />
64287 darmstadt</p>

<h2>Kontakt</h2>
<p style={{color:"white"}}>Telefon: 017662560123<br />
{/*Telefax: +49 (0) 123 44 55 99<br />*/}
E-Mail: haleh@passtillios.com</p>


    </div>
  );
};

export default Impressum;




