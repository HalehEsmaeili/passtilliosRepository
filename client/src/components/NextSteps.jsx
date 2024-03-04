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

import { useNavigate } from "react-router-dom";


///components
import Button from "./Button.js";

////images
import logoWithHair from "../public/images/logo.png";
//import logoWithHair from "../public/images/div4/headLogoHair.png";
import nextSteps from "../public/images/div4/nextStepFinal.png";
import notTalking from "../public/images/broDIV2/2.png";

function NextSteps(props) {
  const navigate = useNavigate();
  //refs
  const divNextStepsRef = useRef(null);
  const isInViewdivNextStep = useInView(divNextStepsRef, {once:true, amount: 0.1 });
  
/////animation controlls
const controlslogoWithHair = useAnimationControls();
const controlsthirdPerson = useAnimationControls();
const nextStepsBodyAnimationControls = useAnimationControls();

const[showBtn1,setShowBtn1]=useState(true);
const[showBtn2,setShowBtn2]=useState(true);
const[showBtn3,setShowBtn3]=useState(true);

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
           right: ["10%", "40%", "-180%"],
           top: ["2%", "10%", "-30%"],
           opacity: 1,
           transition: { duration: 0.5 },
         });
         await controlsthirdPerson.start({
      
          opacity: 0,
          
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
  useEffect(()=>{
    
     
     ///which page are we in? blend out the btn leading to that page  
   if(props.dontshow &&props.dontshow==="btn1"){
    setShowBtn1(false);
   }
   else if(props.dontshow &&props.dontshow==="btn2"){
    setShowBtn2(false);
   }
   else if(props.dontshow &&props.dontshow==="btn3"){
    setShowBtn3(false);
   }

  },[]);

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
         {(showBtn1?

          <Button id="btn1" name="CAMPAIGN" handleClick={()=>navigate("/campaign")} />
:
<Button id="btn1" name="ART PAGE" handleClick={()=>navigate("/art")} />

         
          ) }
         {(showBtn3?
          <Button id="btn2" name="JOIN!" handleClick={()=>navigate("/contact")}  />
          :
<Button id="btn2" name="ART PAGE" handleClick={()=>navigate("/art")} />


         )}
         {(showBtn2?
  
          <Button id="btn3" name="THE TEAM"  handleClick={()=>navigate("/team")}  />
          :
<Button id="btn3" name="ART PAGE" handleClick={()=>navigate("/art")} />


         )}
        </motion.div>
      </div>

);


};
export default NextSteps;