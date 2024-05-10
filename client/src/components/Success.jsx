import React, { useEffect, useState } from "react";

//import axiosInstance from "../Api/axiosInstance.js";

//import { useLanguageContext } from "../context/LanguageContext";
const Success = () => {
 // const { t } = useLanguageContext();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pages">
 <div className="successContainer">
          <video className="contactListVid" autoPlay muted loop>
            <source
              src="/images/contact/success.mp4"
              type="video/mp4"
            ></source>
          </video>
          <p style={{ marginLeft: "10%",marginRight: "10%"}} className="contactListMsg">
            {" "}
            I promised to show you some real nice chicks when you come back as a welcome bonus 😏😁! Here they are... Did you expect something else?
            WELL! go work on yourself!😏
            anywaysss! 🌟 So stoked to welcome you to the Passtillios crew!
            Your trust means the world to me. it will be aweome so buckel up
            because we're about to embark on an epic journey, collecting some
            incredible stories together. I'll be dropping you a welcome email
            soon, so keep an eye out! Take care, and get ready for the
            awesomeness ahead!🚀🎨✨
          </p>
        </div>
    
   
  

     
    </div>
  );
};

export default Success;
