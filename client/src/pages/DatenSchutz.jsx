
import React, { useEffect, useState } from "react";


//import "./TeamPage.css";
import "./ContactPage.css";
import "./datenschutz.css";


import { useLanguageContext } from "../context/LanguageContext";
function Datenschutz () {
  const { t } = useLanguageContext();
    useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
  <div>
  </div>
  );
}





export default Datenschutz;




