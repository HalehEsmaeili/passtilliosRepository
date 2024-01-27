import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useControls,useScroll, useMotionValueEvent, animate, easeIn, spring } from 'framer-motion';
import { scroll,Variants,useAnimationControls} from 'framer-motion';

import '../public/header.css';

function AnimationSlide() {
  const [greySplashPositionY, setGreySplashPositionY] = useState(400);
  const [greySplashPositionX, setGreySplashPositionX] = useState(500);
  const [greySplashScale, setGreySplashScale] = useState(1);
const[firstAnimationtime,setFirstAnimationtime]=useState(true);
  //const controls = useAnimation();
  const controls = useAnimationControls();
  
  useEffect(() => {
    
    controls.start({ opacity:1,scale:1 }
     // setFirstAnimationtime();
      )
  }, [firstAnimationtime]);


  const { scrollY } = useScroll();

useMotionValueEvent(scrollY, "change", (latest) => {
  handleScroll(latest);
});
/*
  useEffect(() => {
   console.log("we are in");
  setTimeout(()=>{
   animateimg1();

   },2000);
   controls.start({ opacx:"-6vw"})
  },  [animateimg2])
*/
/*await animateimg2(img2.current,{opacity:1,x:"-1vw",scale:[1,1.2,1]},{
  duration:0.05,
  type:"spring",
  stiffness:500});
await animateimg2(img2.current,{opacity:0},{delay:.2});
await animateimg1(img1.current,{opacity:1,x:"-1vw"},{
  duration:0.05,
  type:"spring",
  stiffness:500});
  
*/
  function handleScroll(scrollY) {
   // var xpos=greySplashPositionX;
   // var ypos=greySplashPositionY;
   
if(scrollY<=150){
  setFirstAnimationtime(false);
  setGreySplashPositionY(400+ scrollY * -5);
  setGreySplashPositionX(500+scrollY *-3);
  setGreySplashScale(1+scrollY*.03 )
}
else if(scrollY>150&&scrollY<=300){

  setFirstAnimationtime(false);
 

}
else if(scrollY>200){
 console.log(firstAnimationtime);
  setFirstAnimationtime(true);
  }
    
    //setGreySplashScale(${600 + scrollY * 0.09}+"vw");
  }

  return (
    <div className="fixed-div">
    
      <motion.h1 className="animationTxt" style={{opacity:firstAnimationtime? 1:0}}
initial={{scale:10, opacity:0}}
animate={controls} 
transition={{duration:3,type:"spring"}}>
GRAYNESS
</motion.h1>

      <motion.img
        src={require("../public/images/greyGreen.png")}
        alt="logo"
        style={{
          y: greySplashPositionY,
          x: greySplashPositionX,
          scale: greySplashScale,
        }}
        transition={{type:"spring",stiffness:500}}
       
      />


    </div>
  );
}

export default AnimationSlide;
