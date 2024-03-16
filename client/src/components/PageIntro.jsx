import React, { useState,useRef, useEffect } from "react";
import "../pages/pages.css";
import "./pageintro.css";
import colorTiles from "../public/images/header/colorTiles.png";
//import 'bootstrap/dist/css/bootstrap.min.css';

import {
    useInView,
  motion,
  useAnimationControls
} from "framer-motion";

////////intro images
import introSpice from "../public/images/Intro/spiceIntro.png";
import magicLeft from "../public/images/Intro/43.png";
import magicRight from "../public/images/Intro/44.png";

const PageIntro=(props)=>{

    const animateMagicContainer = useAnimationControls();
    const animateMagic = useAnimationControls();
    const titleControlls=useAnimationControls();
    const magicContainerRef = useRef(null);
    const isInViewMagicContainerRef = useInView(magicContainerRef, {
      once: true,
      amount: 0.8,
    });
  

    useEffect(() => {
      
          const spiceAnim = async () => {
            try{
            animateMagicContainer.start({
              scale: [1, 1.2, 1],
              rotate: [0, 30, 0, -30, 0, 20, 0, -20, 0],
              transition: { delay: 0.2, type: "yoyo" },
            });
             animateMagic.start({
              opacity: 1,
              transition: { delay: 0.7, type: "yoyo" },
            });

            await titleControlls.start({
                opacity: 1,
                transition: { delay: 0.7, type: "yoyo" },

               });
          }catch{
    
    
          }
          
          };
         if(isInViewMagicContainerRef){
            spiceAnim();
         }
        
    
      }, [isInViewMagicContainerRef]);
   
   return (

<div  className="pageintro-container">
{/**this is the magic div */}


 
<div ref ={magicContainerRef} className="magicContainer-pi">
            <motion.img
              className="grid-item-spice-pi"
              src={introSpice}
              initial={{ opacity: 1 }}
              animate={animateMagicContainer}
              alt="spice"
            ></motion.img>
            <motion.img
              className="grid-item-magicLeft-pi"
              initial={{ opacity: 0 }}
              animate={animateMagic}
              src={magicLeft}
              alt="magicLeft"
            ></motion.img>
            <motion.img
              className="grid-item-magicRight-pi"
              initial={{ opacity: 0 }}
              animate={animateMagic}
              src={magicRight}
              alt="magicRight"
            ></motion.img>
            
           
            </div>


             {/**<img style={{opacity:1,marginTop:"0%",marginBottom:"0%",display:"inline-block",marginLeft:"40%",width:"20%"}} src={colorTiles}></img> */} 
     
<h1  className="pageintroP">
Art is a superpower that speaks in its own language of colors, textures, and vibes, hitting you right in the feels and connecting people who just get it. So, how do we tap into that magic for our project? That's what this page is for!
</h1>

    {/**
    <img style={{opacity:1,marginTop:"0%",marginBottom:"0%",display:"inline-block",marginLeft:"40%",width:"20%"}} src={colorTiles}></img>

     */} 
     
</div>

   );  


};
export default PageIntro;

