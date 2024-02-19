import React, { useEffect, useState, useRef } from "react";
import "../public/intro.css";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useAnimate,
  useAnimationControls,
} from "framer-motion";


///components
import Button from "./Button.js";

////images
import logoWithHair from "../public/images/logo.png";
//import logoWithHair from "../public/images/div4/headLogoHair.png";
import nextSteps from "../public/images/div4/nextStepFinal.png";
import notTalking from "../public/images/broDIV2/2.png";

function NextSteps(props) {
 
  //refs
  const divNextStepsRef = useRef(null);
  const isInViewdivNextStep = useInView(divNextStepsRef, {once:true, amount: 0.1 });
  
/////animation controlls
const controlslogoWithHair = useAnimationControls();
const controlsthirdPerson = useAnimationControls();
const nextStepsBodyAnimationControls = useAnimationControls();



  useEffect(()=>{
    const logoAnimationToNextSteps = async () => {
        // controlsSecondPerson.start({ opacity: 0, transition: { duration: 0.3 } });
        // await controlslogo.start({ opacity: 0, transition: { duration: 0.3 } });
     try{
         await controlsthirdPerson.start({
           right: ["-40%", "10%"],
           top: ["-52%", "3%"],
           opacity: 1,
           transition: { delay: 0.05, duration: 0.27 },
         });
         controlslogoWithHair.start({
           right: ["-40%", "40%"],
           opacity: 1,
           transition: { delay: 0.05, duration: 0.26 },
         });
     
         await controlslogoWithHair.start({
           top: ["23%", "-20%", "10%"],
           right: ["40%", "53%", "76%"],
           scale: 0.9,
           rotate: -10,
           opacity: 1,
           transition: { delay: 0.4, type: "yoyo", duration: 0.3 },
         });
         await nextStepsBodyAnimationControls.start({
           opacity: 1,
           transition: { duration: 0.5 },
         });
     
         await controlsthirdPerson.start({
           right: ["10%", "40%", "-80%"],
           top: ["2%", "10%", "-25%"],
           opacity: 1,
           transition: { duration: 0.5 },
         });
     
         //controlsSecondPerson.start({x:["50vw","-47vw"],opacity:1,transition:{duration:.5}});
      
         return;}
         catch{
         // console.log("haaaah got caught!");
         }
       };
     ///call the function 
   if(isInViewdivNextStep && props.conditionForAnimStart){
    logoAnimationToNextSteps();
   }
console.log("conditionForAnimStart"+props.conditionForAnimStart);
console.log("isInViewdivNextStep"+isInViewdivNextStep);
  },[isInViewdivNextStep,props.conditionForAnimStart]);

return (
    <div ref={divNextStepsRef} className="nextstepDiv" >
        <motion.img
          id="personNotTalking3"
          animate={controlsthirdPerson}
          src={notTalking}
          alt="person not talking"
        ></motion.img>
        <motion.img
          id="logoWithHair"
          animate={controlslogoWithHair}
          src={logoWithHair}
          alt="logo"
        ></motion.img>
        <motion.div
          className="nextStepBodyContainer"
          animate={nextStepsBodyAnimationControls}
        >
          <motion.img
            src={nextSteps}
            className="nextSteps"
            alt="next steps"
          ></motion.img>
          <Button id="btn1" name="FIRST PROJECT" />
          <Button id="btn2" name="JOIN!" />
          <Button id="btn3" name="THE TEAM" />
        </motion.div>
      </div>

);


};
export default NextSteps;