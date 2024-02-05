import React, { useEffect, useState,useRef,useHover} from "react";

import '../public/intro.css';
import CampaignStatement from "./campaign/CampaignStatement.jsx";
import ProjectSection from "./ProjectSection.jsx";
//1901 change the h1s positioning css.
//the local deployment works with serve,but with heroku not yet
//heroku logs --tail -a passtilliostest1
// "start": "node app/index.js"
//https://github.com/HalehEsmaeili/passtilliosRepository
//heroku git:remote -a passtilliosfrontendtest
//vids
//import teamHeaderVid from "../public/video/teamGif.gif";

import whatpaintingsVid from "../public/video/bro2.mp4";
import bobVid from "../public/images/nextSteps/28.mp4";

import Button from "./Button.js";
import { motion,useInView,useSpring, useMotionValueEvent, useScroll,useAnimate,useAnimationControls, useMotionValue,useAnimation } from "framer-motion";
import Highlighted from "../components/Highlighted.js";
import useWindowDimensions from "./useWindowDimensions.js";
import throatCleaning from "../public/images/broDIV2/1.png";
import poking from "../public/images/broDIV2/needle.png";
import talking from "../public/images/broDIV2/3.png";
import notTalking from "../public/images/broDIV2/2.png";
import schirm from "../public/images/broDIV2/schirm.png";
import logo from "../public/images/logo.png";
import yourColors from "../public/images/yourColors/6.png";
/////your life as a painting

/////bubbles for lets go
import l from  "../public/images/bubbles/7.png";
import e from  "../public/images/bubbles/8.png";
import t from  "../public/images/bubbles/9.png";
import ss from  "../public/images/bubbles/10.png";
import g from  "../public/images/bubbles/11.png";
import o from  "../public/images/bubbles/12.png";
import zeichen from  "../public/images/bubbles/13.png";
/////bubbles for color splashes

import bubble1 from  "../public/images/EmptyBubbles/1.png";
import bubble2 from  "../public/images/EmptyBubbles/2.png";
import bubble3 from  "../public/images/EmptyBubbles/3.png";
import bubble4 from  "../public/images/EmptyBubbles/4.png";
import bubble5 from  "../public/images/EmptyBubbles/5.png";
import bubble6 from  "../public/images/EmptyBubbles/6.png";
import bubble7 from  "../public/images/EmptyBubbles/7.png";
import bubble8 from  "../public/images/EmptyBubbles/8.png";
////////color splashes for the bubbles
import splash1 from  "../public/images/colorSplash/9.png";
import splash2 from  "../public/images/colorSplash/5.png";
import splash3 from  "../public/images/colorSplash/11.png";
import splash4 from  "../public/images/colorSplash/12.png";
import splash5 from  "../public/images/colorSplash/13.png";
import splash6 from  "../public/images/colorSplash/14.png";
import splash7 from  "../public/images/colorSplash/15.png";
import splash8 from  "../public/images/colorSplash/16.png";
import splash9 from  "../public/images/colorSplash/7.png";
import splash10 from  "../public/images/colorSplash/2.png";
import splash11 from  "../public/images/colorSplash/3.png";

////////intro images
import introSpice from  "../public/images/Intro/spiceIntro.png";
import magicLeft from  "../public/images/Intro/43.png";
import magicRight from  "../public/images/Intro/44.png";
//////////greydiv imports
import greyDown from "../public/images/greyDivGrey/1.png";
import greyUP from "../public/images/greyDivGrey/2.png";
import greySplashs from "../public/images/greyDivGrey/3.png";
import greySplash from "../public/images/greyDivGrey/4.png";
///////////greyDiv imports end
import logoBeforPush from "../public/images/logoHandLeg/4.png";
import logoAfterPush from "../public/images/logoHandLeg/5.png";
//////////////imports div0 rainbow
import rainbowAbsolute from "../public/images/layoutPart1/Frame1.png";
import rainbowEnd from "../public/images/layoutPart1/3.png";
import colorSplash from "../public/images/layoutPart1/paintsplashReal.png";
////div4 and div5 imports
import logoWithHair from "../public/images/logo.png";
//import logoWithHair from "../public/images/div4/headLogoHair.png";
import nextSteps from "../public/images/div4/nextStepFinal.png";
import showMeImgLine from "../public/images/nextSteps/showMeSec.png";
import  Carousel from './Carousel.jsx';

function IntroParallax() {
  const text="Imagine a world painted only in shades of gray, where only black and white call the shots. It's a place without the cozy warmth of lively colors.In this imaginary place, our eyes reveal emptiness, echoing the loneliness inside. The once-fiery passion in hearts, eager to use their unique colors to make a beautiful difference on our collective canvas of life, now flickers, struggling to survive in a world that only wants us to be either black or white.Creativity and inspiration take a backseat. Life in this gray and expected canvas feels like a broken record, missing the beat of unpredictability that makes it exciting and dance-worthy!";
  
  const [scrollToGreyActive,setScrollToGreyActive]=useState(false);
 const[scrollToNextStepsActive,setScrollToNextStepsActive]=useState(false);

  const [broAnimHasStarted, setBroAnimHasStarted] = useState(false);
  const [div3AnimHasStarted, setDiv3HasStarted] = useState(false);
  const [logoAnimationTodiv4HasStarted, setLogoAnimationTodiv4HasStarted] = useState(false);
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const [logoAnimationTodiv4Compelete, setLogoAnimationTodiv4Compelete] = useState(false);
  const [mouseOnDiv2, setMouseOnDiv2] = useState(false);
  const [letsGoBubbleShow,setletsgoBubbleShow]=useState(false);
  const [greyScrolled,setGreyScrolled]=useState(false);
  /*broanimation
  /*broanimation async function broAnimation(){
    await animate(img1.current, {
      opacity:1,x:"-1vw"
     
    },
      {delay:0,type:"yoyo",duration:.75}
      
    );
    await animate(img1.current, {
      opacity:0
    
    },
      
      {delay:2,type:"spring",stiffness:4},

    );
    await animate(img2.current, {
      opacity:1,
      x:"-1vw"
    
    },
      
      {delay:2,type:"spring",stiffness:4});
    
  }
}
  */
  /*
  
<div >
<h1 style={{color:"white"}}>About</h1>
<p style={{color:"white"}}>pgojblkbn pigfbn kn opöygnbp m eüzjhtehpoä peotjgk #
ühpjk üojhpghjm poöjgmpetöhoj#züo  üothj ütojhüeoj hüojmdiogjyhpibpihj
gpnjgpnjdghpäojbpäfmnp</p>
</div>
  */
  //const { scrollYProgress } = useScroll();
  //<motion.img variants={brovariant} animate="visible"  src={require ("../public/images/logo.png")} alt="logo" ></motion.img>
  const [isGreyContentVisible, setGreyContentVisible] = useState(false);
 
  
  const [animationComplete, setAnimationComplete] = useState(false);
  const [broAnimationComplete, setBroAnimationComplete] = useState(false);
  const [nextStepAnimationStarted, setNextStepAnimationStarted] = useState(false);
 
  const [h1moved, setH1Moved] = useState(false);
  const [greyDustPositionX, setGreyDustPositionX] = useState(500);
  const [scope, animate] =useAnimate();
  const[img1,animateimg1]=useAnimate();
  const[img2,animateimg2]=useAnimate();
  const[img3,animateimg3]=useAnimate();
  const[img1visible,setimage1visible]=useState(false);

const[img2visible,setimage2visible]=useState(false);
const[img3visible,setimage3visible]=useState(false);
const[visibletime,setvisible]=useState(0);
const[scrolled,setScrolled]=useState(false);
const [isnextArrowClickable, setIsNextArrowClickable] = useState(true);

  ///////////refs and useinview aniamtion set up
const h1refPainting=useRef(null);
const div0=useRef(null);
const div2=useRef(null);
const div3=useRef(null);
const div4=useRef(null);
const yourLifePaintingDiv=useRef(null);
const whatPaintingRef=useRef(null);
const finalWordsDiv=useRef(null);
const divNextSteps=useRef(null);
const nextStepBodyContainerRef=useRef(null);
const greyContent=useRef(null);
const greydiv=useRef(null);
const handPoking=useRef(null);
const magicContainerRef=useRef(null);
const wtfRef=useRef(null);
const campaignImgRef=useRef(null);
const isInViewWtfRef=useInView(wtfRef,{amount:.1});
const isInViewCampaignImg=useInView(campaignImgRef,{once:true,amount:.7});
const isInViewMagicContainerRef=useInView(magicContainerRef,{once:true,amount:.3});
const isInViewH1Painting=useInView(h1refPainting,{amount:.3});
const isInViewWhatPaintingRef=useInView(whatPaintingRef,{amount:.2});
const isInViewYourLifePaintingDiv=useInView(yourLifePaintingDiv,{once:true, amount:.8});
const isInViewGreyTxt=useInView(greyContent,{once:true, amount:.7});
const isInViewdivNextStep=useInView(divNextSteps,{ amount:.7});
const isInViewdivNextStepBody=useInView(nextStepBodyContainerRef,{once:true, amount:.4});
//const isInViewdiv0=useInView(div0, {once:true});
//const isInViewDivGrey=useInView(greydiv, {once:true});
const isInViewdiv2=useInView(div2, {once:true,amount:1});
const isInViewdiv3=useInView(div3, {once:true,amount:.8});

//const [isHovered,handleHover]=useHover();
///////dont let grey take over
const dontAnim =useAnimationControls();
const letAnim  =useAnimationControls();
const greyAnim =useAnimationControls();
const takeAnim =useAnimationControls();
const overAnim =useAnimationControls();
  ////////////////////////animation controls
  const controls =useAnimationControls();
  const controlsimg2 =useAnimationControls();
  const controlsimg3 =useAnimationControls();
  const controlsHand =useAnimationControls();
  const controlslogo =useAnimationControls();
  const controlsBroDialog=useAnimationControls();
  const greyCloudControl =useAnimationControls();
  const greyCloudDownControl=useAnimationControls();
  const firstrainbowControl =useAnimationControls(); 
  const secondrainbowControl =useAnimationControls();
  const paintingH1Control =useAnimationControls();
  const rainbowSvgControl =useAnimationControls();
  const rainbowSvgControl2 =useAnimationControls();
  const controlsschirm = useAnimationControls();
  const colorSplashControl= useAnimationControls();
  const introLogoControl= useAnimationControls();
  const controlslogoImage=useAnimationControls();
  const controlsSecondPerson=useAnimationControls();
  const greyToAnimate=useAnimationControls();
  const nextStepsBodyAnimationControls=useAnimationControls();
  const handOfCanvasControls=useAnimationControls();
  const greyCloudOutCanvasControls=useAnimationControls();
  ////bubble attack
  const bubbleForLogoControls=useAnimationControls();
  const splash1Controls=useAnimationControls();
  const splash2Controls=useAnimationControls();
  const splash3Controls=useAnimationControls();
  const splash4Controls=useAnimationControls();
  const splash5Controls=useAnimationControls();
  const splash6Controls=useAnimationControls();
const controlsLogoAfterPush=useAnimationControls();
const controlsLogoBeforPush=useAnimationControls();
//////
const oneCrazyProject=useAnimationControls();
const controlsMemories=useAnimationControls();
const controlsAtATime=useAnimationControls();
const nextButtonControls=useAnimationControls();
const atATimeSlideControls=useAnimationControls();
  //////your life as a painting 
  const magnetControls=useAnimationControls();
  const lampControls=useAnimationControls();
  const asAControls=useAnimationControls();
  const paintingImgControls=useAnimationControls();
  const yourControls=useAnimationControls();
  const paintBrushControls=useAnimationControls();
  /////////////////controls for bubbles
  ///lets go bubbles
  const lControls=useAnimationControls();
  const eControls=useAnimationControls();
  const tControls=useAnimationControls();
  const sControls=useAnimationControls();
  const gControls=useAnimationControls();
  const oControls=useAnimationControls();
  const zeichenControls=useAnimationControls();
////color bubbles
const b1Controls=useAnimationControls();
const b2Controls=useAnimationControls();
const b3Controls=useAnimationControls();
const b4Controls=useAnimationControls();
const b5Controls=useAnimationControls();
const b6Controls=useAnimationControls();
const b7Controls=useAnimationControls();
const b8Controls=useAnimationControls();
const b9Controls=useAnimationControls();
const b10Controls=useAnimationControls();
const b11Controls=useAnimationControls();
const b12Controls=useAnimationControls();
const b1EmptyControls=useAnimationControls();
const b2EmptyControls=useAnimationControls();
const b5EmptyControls=useAnimationControls();
const b9EmptyControls=useAnimationControls();
const b10EmptyControls=useAnimationControls();
const b11EmptyControls=useAnimationControls();
const b12EmptyControls=useAnimationControls();
const controlslogoWithHair=useAnimationControls();
const controlsthirdPerson=useAnimationControls();
const controlsHandSVG=useAnimationControls();
const storyTimeControls=useAnimationControls();
const oneInOnePaintingCotrols=useAnimationControls();
const animateMagicContainer=useAnimationControls();
const animateMagic=useAnimationControls();
const logoLineAnimation=useAnimationControls();
const wtfAnimation=useAnimationControls();
const campaignImgAnimation=useAnimationControls();
 /*
  const[animateimg1,setimg1animate]=useState(false);
  const[animateimg2,setimg2animate]=useState(true);
  const[animateimg3,setimg3animate]=useState(false);
  */
//////////////////////animation functions
const wtfAnim=async ()=>{
  await wtfAnimation.start({scale:[1,1.1],opacity:1,transition:{delay:.3,duration:.5}});
 };
useEffect(() =>{
  if(isInViewWtfRef){
    wtfAnim();
  }
  
  
  },[isInViewWtfRef]);
  const campaignImgAnim=async ()=>{
    await campaignImgAnimation.start({scale:[1,1.3,1.2],transition:{delay:.3,duration:.5}});
   };
  useEffect(() =>{
    if(isInViewCampaignImg){
      campaignImgAnim();
    }
     
   
  },[isInViewCampaignImg]);
    
useEffect(() =>{
  const svgLineAnim=async ()=>{
   // animateMagicContainer.start({scale:[1,1.2,1],rotate:[0,30,0,-30,0,20,0,-20,0], transition:{delay:.2,type:"yoyo"}});
   await logoLineAnimation.start({pathLength:1, transition:{delay:3,duration:3,transition:{stiffness:2}}});
  };
  if(scrollToGreyActive){
    svgLineAnim();
  }
  
  
  },[isInViewGreyTxt,scrollToGreyActive]);

useEffect(() =>{
if(isInViewMagicContainerRef){
  const spiceAnim=async ()=>{
    animateMagicContainer.start({scale:[1,1.2,1],rotate:[0,30,0,-30,0,20,0,-20,0], transition:{delay:.2,type:"yoyo"}});
    animateMagic.start({opacity:1, transition:{delay:.7,type:"yoyo"}});
  };
  spiceAnim();
}


},[isInViewMagicContainerRef]);

useEffect(()=>{
 
  if(isInViewdiv3){
  nextButtonControls.start({opactity:1, left:["-10%","92%","82%"], transition:{duration:.5,type:"yoyo",ease:"easeIn"}});  
  }

},[isInViewdiv3]);
//const[h1Index,setH1Index]=useState(1);

var h1Index= 1;
const handleH1Show=async ()=>{

if(isnextArrowClickable){
  switch (h1Index) {
    case 0:{
      h1Index=1;
      console.log("im in caaase here in 0");
   //setIsNextArrowClickable(false);
      await  nextButtonControls.start({opactity:1, left:["80%","78%","120%"], transition:{duration:.5,type:"yoyo",ease:"easeIn"}});  
      await  nextButtonControls.start({opactity:0, left:["120%","-10%"], transition:{duration:.01}});  
      await  nextButtonControls.start({opactity:1, left:["-10%","95%","80%"], transition:{duration:.5,type:"yoyo",ease:"easeIn"}});  
   
      await  atATimeSlideControls.start({left:["0%","10%","-188%"], transition:{duration:.7,type:"yoyo",ease:"easeIn"}});
     // await oneCrazyProject.start({opacity:1,transition:{duration:1.5,delay:.1}});
      //await oneCrazyProject.start({opacity:0,transition:{duration:.5}});
      //setIsNextArrowClickable(true);
    }
    
    break;
    case 1:{
      h1Index=2;
     // setIsNextArrowClickable(false);
      //oneCrazyProject.start({opacity:0,transition:{duration:.01}});
      controlsMemories.start({opacity:1,transition:{duration:.1}});
      await  nextButtonControls.start({opactity:1, left:["80%","82%","80%"], transition:{duration:.4,type:"yoyo",ease:"easeIn"}}); 
      await  atATimeSlideControls.start({left:["-188%","-73%"], transition:{duration:.5,type:"yoyo",ease:"easeIn"}});
     
      // await oneCrazyProject.start({opacity:0,transition:{duration:.01}});
     
      //await controlsMemories.start({opacity:0,transition:{duration:.5}});
  
     // setIsNextArrowClickable(true);
   
    }
    break;
    case 2:{
     // setIsNextArrowClickable(false);
      h1Index=0;
      await  nextButtonControls.start({left:["80%","82%","80%"], transition:{duration:.5,type:"yoyo",ease:"easeIn"}}); 
    //  await controlsAtATime.start({opacity:1,transition:{duration:1.2}});
      controlsMemories.start({opacity:0,transition:{duration:1}});
  
      await  atATimeSlideControls.start({left:["-73%","0%"], transition:{duration:.5,type:"yoyo",ease:"easeIn"}});
 
      //await controlsAtATime.start({opacity:1,transition:{duration:1.5,delay:.1}});
      //await controlsAtATime.start({opacity:0,transition:{duration:.5}});
      //setIsNextArrowClickable(true);
    }
    break;

}

}
}

/*
useEffect(()=>{
  const loopAnimation = () => {
    oneCrazyProjectAnimation();
    setTimeout(oneCrazyProjectAnimation, 7000); // Adjust the delay as needed  };*/
  
 /*
  const oneCrazyProjectAnimation =async () => {
   await oneCrazyProject.start({opacity:1,transition:{duration:1.5,delay:.1}});
   await oneCrazyProject.start({opacity:0,transition:{duration:.5}});
   await controlsMemories.start({opacity:1,transition:{duration:1.5,delay:.1}});
   await controlsMemories.start({opacity:0,transition:{duration:.5}});
   await controlsAtATime.start({opacity:1,transition:{duration:1.5,delay:.1}});
   await controlsAtATime.start({opacity:0,transition:{duration:.5}});
   
  };

  if(isInViewH1Painting) {
    loopAnimation();
}

},[isInViewH1Painting]);
*/

useEffect(()=>{
 
  if(scrollToGreyActive){
  const bubbleBurstAnim=async ()=>{
    b2Controls.start({left:"85%",top:"120%",transition:{stiffness:.1,duration:5}});
    b5Controls.start({left:"-17%",top:"2%",x:["-5vw","16vw"],y:["10vw","28vw"],transition:{delay:1,stiffness:.1,duration:5}});
    b10Controls.start({left:"-10%",top:"-30%",transition:{delay:4,stiffness:.1,duration:5}});
    b9Controls.start({ left:"78%",top:"-18%",transition:{delay:1.3,stiffness:.1,duration:9}});
   
    
    await  b11Controls.start({ left:"17%",top:"-131vw",transition:{stiffness:1,duration:5}});
   
    b11EmptyControls.start({scale:6, opacity:0, transition:{duration:.1}});
     
    await splash5Controls.start({scale:6,transition:{}});
    dontAnim.start({opacity:1});
   
    b2EmptyControls.start({scale:6, opacity:0, transition:{delay:1,duration:.1}});
    await splash2Controls.start({opacity:1,scale:5.5,transition:{delay:1}});
    letAnim.start({opacity:1});

    b5EmptyControls.start({scale:6, opacity:0, transition:{delay:.5,duration:.1}});
     await  splash1Controls.start({scale:4.5,transition:{delay:.5}});
    greyAnim.start({opacity:1});

   b10EmptyControls.start({scale:8, opacity:0, transition:{delay:2,duration:.1}});
   await splash4Controls.start({scale:6.5,transition:{delay:2}});
    takeAnim.start({opacity:1});
   
   b9EmptyControls.start({scale:6, opacity:0, transition:{delay:.5,duration:.1}});
   await splash3Controls.start({scale:6,transition:{delay:.5}});
   overAnim.start({opacity:1});
  }
   bubbleBurstAnim();
  }
  
  },[scrollToGreyActive]);


async function myAnimation() {
 
  
  await animate(scope.current, {
    y:["-50vh","-60vh"] 
  },
    
    {type:"spring",stiffness:100},
   
  );
  await animate(scope.current, {
    y:"200vh"
  },
    
    {type:"spring",stiffness:100},
   
  );

  await animate(scope.current,{
    y:["200vh","7vh"],
    x:"-30vw"},

     {type:"spring",stiffness:20});
  
}

/*
async function person1Animation(){
await animateimg1(img1.current,{opacity:1,x:"-1vw"},{
  duration:0.05,
  type:"spring",
  stiffness:500});


}
async function person2Animation(){
  
await animateimg2(img2.current,{opacity:1,x:"-1vw",scale:[1,1.2,1]},{
  duration:0.05,
  type:"spring",
  stiffness:500});
  

  
  }
  /////////////////////useeffect section
  */
//greydust animation controller 
/*

const {dim:{height,width},motionT} =useWindowDimensions();
console.log("heighhhhhhhhhhhhhhht"+width);
const ydiv0=useMotionValue(1000);
const ydiv2=useMotionValue(1000);
const ydivGrey=useMotionValue(1000);
const ydiv3=useMotionValue(1000);
const ydiv4=useMotionValue(1000);
const ydiv5=useMotionValue(1000);
*/
/*
//const y = useMotionValue(-width/2);
const xSlow = useMotionValue(-width/2);
useSpring(x, { stiffness: 10, damping: 200 });
useSpring(xSlow, { stiffness: 1, damping: 1 });

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  handleScroll(latest);
});

*/
////////////////////useeffects
/*
useEffect(() => {
  //myAnimation();
 /*
  setTimeout(()=>{
    setvisible(1);
  },1000);
  */

/*
const broAnim= async ()=> {
controls.start({opacity:1,x:"-2vw"});
controls.start({opacity:0,transition:{delay:1}});
controlsimg2.start({opacity:1,x:"-1vw"});
////delay-group 1
console.log("im in delay1");
    controlsimg2.start({opacity:0,transition:{delay:3}});
    controlsimg3.start({opacity:1,x:"-1vw",transition:{delay:3}});
    controlsHand.start({opacity:1,x:[0,-25,0,-20,0],transition:{delay:3,type:"Spring",duration:.5,stiffness:2}});
    controlslogo.start({opacity:1,x:[0,-40,0,-20,0],rotateZ:[0,10,0,10,0],transition:{delay:3,type:"yoyo",duration:.5,stiffness:2}})
 
////delay-group 2
    controlsHand.start({opacity:0,transition:{delay:5}});
    controlsimg3.start({opacity:0,transition:{delay:5}});
    controls.start({opacity:1,x:"-1vw",transition:{delay:5}});
  }
  broAnim();
  */
/*
  setTimeout(()=>{
   
    controls.start({opacity:1,x:"-1vw"});
  },17000);
 //person2Animation();

  
  setTimeout(()=>{
 
    controls.start({opacity:0});
    controlsimg2.start({opacity:1,x:"-1vw"});
  },18000);
  setTimeout(()=>{
    controlsimg2.start({opacity:0});
    controlsimg3.start({opacity:1,x:"-1vw"});
    controlsHand.start({opacity:1,x:[0,-25,0,-20,0],transition:{type:"Spring",duration:.5,stiffness:2}});
    controlslogo.start({opacity:1,x:[0,-40,0,-20,0],rotateZ:[0,10,0,10,0],transition:{type:"yoyo",duration:.5,stiffness:2}})
  },18700);
  setTimeout(()=>{
 controlsHand.start({opacity:0});
    controlsimg3.start({opacity:0});
    controls.start({opacity:1,x:"-1vw"});
  },20000);
 
},[]);*/

///////////////////////////////it is not working out side of timeouts
/*
 async function sequence() {
    console.log("im insequnce");
    await controls.start({opacity:1,x:"-2vw"});
    return controls.start({opacity:0,transition:{delay:1}});
  }
*/
///animation div2
////the screen sizes
//const {dim:{height}} =useWindowDimensions();
 
const handleScrollToDivNext = (e) => {
   
  setScrollToNextStepsActive(true);
  // Access the current property of the ref to get the DOM element
 /*
  const element = divNextSteps.current;

  // Check if the element exists before scrolling
  if (element) {
    // Use the scrollIntoView method to scroll to the element
    setTimeout(() => {
      element.scrollIntoView({  behavior: 'smooth', block: 'center', inline: 'center',duration: 3000  });
    },);
  }*/
};

const handleClickOfNext=(e) => {



};
const handleScrollToDivgrey=(e) => {
 
setScrollToGreyActive(true);
// Access the current property of the ref to get the DOM element

const element = greydiv.current;

// Check if the element exists before scrolling
if (element) {
  // Use the scrollIntoView method to scroll to the element
  setTimeout(() => {
    element.scrollIntoView({  behavior: 'smooth', block: 'center', inline: 'start',duration: 6000  });
  }, 0);
}
};




const { scrollYProgress :s } = useScroll();
const { scrollYProgress :divFinalWordsScroll } = useScroll({
target:finalWordsDiv,
offset: ["start end", "end end"]
});

useMotionValueEvent(s, "change", (latest) => {
 
  if(isInViewGreyTxt&&introAnimationComplete){
   setGreyScrolled(true);
  }
  if(isInViewdiv3&&broAnimationComplete){
    console.log(isGreyContentVisible);
   setScrolled(true);
  }

 /*
if(latest>=0.25 && latest<.4){

  greyCloudDownControl.start({x:"-15vw",y:"-10%",rotate:20,scale:1.3, transition:{duration:1.5}});
 
}

if(latest>=0.26){
  greyCloudControl.start({x:"28vw",y:"-30%",rotate:-40,opacity:.5,scale:1.7, transition:{duration:2}});
  b1EmptyControls.start({
    scale:2,
    opacity:0,
    transition:  {duration:.01}
  });
 
  b1Controls.start({
    opacity:0,
    transition:  {duration:2.3}
  });
} 
if(latest>=0.4 && latest<.5){

  greyToAnimate.start({opacity:1});
}

*/
/*
if(isInViewdiv2){
console.log("div 2 in view"+isInViewdiv2);
  broAnim().then(()=>{
  setAnimationComplete(true);
  }
    
  )};
  */
 /*
  if(animationComplete && broAnimHasStarted && introAnimationComplete&&latest>.7 && (!logoAnimationTodiv4Compelete&& !logoAnimationTodiv4HasStarted)){
  setLogoAnimationTodiv4HasStarted(true);
  logoAnimationTodiv4().then(()=>{
  setLogoAnimationTodiv4Compelete(true);
  if(latest>.6){
    //controlslogo.start({x:["50vw","40vw","14vw"],y:["780%","700%","1003%"],rotate:-20,scale:1.1,transition:{type:"yoyo",duration:.5}}); 
   // controlslogo.start({y:ydiv4.get(),x:"14vw",rotate:-20,scale:1.1,transition:{type:"yoyo",duration:.5}});  
  }

});
 
 */
});
useMotionValueEvent(divFinalWordsScroll, "change", (latest) => {
// && scope.current.offsetTop==h1refPainting.current.offsetTop
// && controlslogo.get("y")===3

  });

  
  //if the div 2 is hovered over start the bro animation 
  const handleDiv2HoverStart = () => {
      
   // console.log("introAnimmmmmmmm"+introAnimationComplete);
    if(introAnimationComplete){
     div2.current.removeEventListener('mouseover',  handleDiv2HoverStart);
   //  console.log("we areeeeeee innnn"+introAnimationComplete);
     broAnim().then(() => setAnimationComplete(true));
    }
   
    };

  const logoAnimationTodiv4 = async () => {
 
    await oneInOnePaintingCotrols.start({rotate:-90,x:"-1vw",paddingRight:"3vw",transition:{type:"yoyo",duration:.3}});
      await  paintingH1Control.start({x:"10vw",transition:{type:"yoyo",duration:.3}});
    
      await  paintingH1Control.start({x:"-1vw",transition:{type:"yoyo",duration:.1}});
   
      await  controlslogo.start({x:"10vw",transition:{type:"yoyo",duration:.5}});
      controlslogoImage.start({rotate:[0,360,720,0],transition:{duration:1}});
      controlsSecondPerson.start({opacity:1});  
      whatPaintingRef.current.play();
             await  controlslogo.start({x:["10vw","19vw","24vw","29vw","45vw"],y:["316%","346%","376%","400%","868%"],transition:{type:"yoyo",duration:1}});
      
      await  controls.start({x:"100vw",opacity:1}); 
      await oneInOnePaintingCotrols.start({rotate:0,paddingRight:"0vw",transition:{type:"yoyo",duration:.3}});
       //controlslogo.start({x:["32vw","50vw"],y:["410%","780%"],transition:{type:"yoyo",duration:.5}});
           if(!scrollToGreyActive){
            b10Controls.start({left:"70%",top:"450%",transition:{stiffness:1,duration:5}});
           }
         
       // await controlslogo.start({x:["34vw","36vw"],y:["500%","811%"],rotate:-20,transition:{type:"yoyo",duration:.5}});  
     
      
   
       storyTimeControls.start({opacity:1,transition:{delay:1.5}});
       setLogoAnimationTodiv4Compelete(true);
         return;
    };
    const logoAnimationToNextSteps= async () => {
             controlsSecondPerson.start({opacity:0,transition:{duration:.3}});   
      await  controlslogo.start({opacity:0,transition:{duration:.3}});
     
      await   controlsthirdPerson.start({right:["-40%","10%"],top:["-52%","3%"],opacity:1,transition:{delay:.05,duration:.27}});   
             controlslogoWithHair.start({right:["-40%","40%"],opacity:1,transition:{delay:.05,duration:.26}});   
     
      await  controlslogoWithHair.start({top:["23%","-20%","10%"],right:["40%","53%","76%"],scale:.9,rotate:-10,opacity:1,transition:{delay:.4,type:"yoyo",duration:.3}});    
      await  nextStepsBodyAnimationControls.start({opacity:1,transition:{duration:.5}});   
      
      await  controlsthirdPerson.start({right:["10%","40%","-80%"],top:["2%","10%","-25%"],opacity:1,transition:{duration:.5}});   
   
     //controlsSecondPerson.start({x:["50vw","-47vw"],opacity:1,transition:{duration:.5}}); 
  
     return;
    };
  const introAnim = async () => {
    console.log('introAnim started');
    //await introLogoControl.start({x:"-30vw",transition:{delay:1,stiffness:700}});
  
    await introLogoControl.start({
     y:["0%","-20%"],
    
     transition:  {delay:2,type:"spring",stiffness:100,duration:.06}
   });
   //setletsgoBubbleShow(()=>{true});
//console.log("set bubbbble"+letsGoBubbleShow);
lControls.start({
  opacity:1,
 
  transition:  {duration:.001}
});
eControls.start({
  opacity:1,
  
  transition:  {duration:.001}
});
tControls.start({
  opacity:1,
 
  transition:  {duration:.001}
});
 sControls.start({
  opacity:1,

  transition:  {duration:.001}
});
 gControls.start({
  opacity:1,

  transition:  {duration:.001}
});
 oControls.start({
  opacity:1,
  
  transition:  {duration:.001}
});
 await zeichenControls.start({
  opacity:1,
  
  transition:  {duration:.001}
});
  ///colorful bubblessss animation
  
  b1Controls.start({
    
    x:["-.3vw","0vw","-.3vw"],
    y:[".3vh","0vh",".3vh"],
    transition:  {type:"yoyo",repeat:Infinity,duration:3}
  });
  b2Controls.start({
    
    top:"170%",
    left:"70%",
    transition:  {type:"spring",stiffness:22,duration:.2}
  });
 
  b3Controls.start({
    opacity:1,
    top:"40%",
    left:"45%",
    transition:  {type:"spring",stiffness:17,duration:.2}
  });

  b4Controls.start({
    opacity:1,
    top:"60%",
    left:"-70%",
    transition:  {type:"spring",stiffness:15,duration:.2}
  });

  b5Controls.start({
    opacity:1,
    top:"10%",
    left:"70%",
    transition:  {type:"spring",stiffness:20,duration:.2}
  });
 
  /*
  b8Controls.start({
    opacity:1,
    top:"260%",
    left:"60%",
    transition:  {type:"spring",stiffness:8,duration:.2}
  });
*/
/////
b1Controls.start({
  top:"10%",
  left:"7%",
  transition:  {type:"spring",stiffness:14,duration:.1}
});
    lControls.start({
    opacity:1,
    top:"-200%",
    left:"-5%",
    scale:1.5,
    transition:  {type:"spring",stiffness:10,duration:.9}
  });
 eControls.start({
  top:"-200%",
  left:"0%",
    opacity:1,
   
    scale:1.4,
    transition:  {type:"spring",stiffness:9.5,duration:.9}
  });
  tControls.start({
    opacity:1,
    top:"-200%",
    left:"5%",
    scale:1.3,
    transition:  {type:"spring",stiffness:9,duration:.9}
  });
   sControls.start({
    opacity:1,
    top:"-200%",
    left:"10%",
    scale:1.2,
    transition:  {type:"spring",stiffness:8.5,duration:.9}
  });
   gControls.start({
    opacity:1,
    top:"-130%",
    left:"15%",
    transition:  {type:"spring",stiffness:7.8,duration:.5}
  });
   oControls.start({
    opacity:1,
    top:"-130%",
    left:"20%",
    transition:  {type:"spring",stiffness:7.2,duration:.5}
  });
  zeichenControls.start({
    opacity:1,
    top:"-100%",
    left:"25%",
    transition:  {type:"spring",stiffness:6.8,duration:.2}
  });
  
   await  introLogoControl.start({
     y:"10000%",
    transition: {type:"spring",stiffness:100,duration:.02}
   });
   introLogoControl.start({
   opacity:0,
   transition: {duration:.02}
  });

      /*
     await  gControls.start({
    
        x:["-.3vw","0vw","-.3vw"],
        y:["-.3vh","0vh","-.3vh"],
        transition:  {type:"yoyo",repeat:2,duration:3}
      });
       oControls.start({
        
        x:["-.3vw","0vw","-.3vw"],
        y:["-.3vh","0vh","-.3vh"],
        transition:  {type:"yoyo",repeat:2,duration:3}
      });
    zeichenControls.start({
        
        x:["-.3vw","0vw","-.3vw"],
        y:["-.3vh","0vh","-.3vh"],
        transition:  {type:"yoyo",repeat:2,duration:3}
      });
      await  gControls.start({
        
       opacity:0,
        transition:  {type:"yoyo",duration:.8}
      });
      
      oControls.start({
        
        opacity:0,
         transition:  {type:"yoyo",duration:.8}
       });
       
       zeichenControls.start({
        
        opacity:0,
         transition:  {type:"yoyo",duration:.8}
       });

   await b1Controls.start({
    opacity:0,
    transition:  {delay:3,type:"yoyo",duration:.8}
   });
   */
       
       setIntroAnimationComplete(true);
       return;
   };
//startbroanimation 
   const broAnim = async () => {
    
  
       if(!scrollToGreyActive){
       b9Controls.start({ left:"10%",top:"-10%",transition:{delay:1,stiffness:.1,duration:5}});
       }
 
    /*
     console.log('broAnim started');
     await controls.start({ x: "10vw" });
     await controlslogo.start({
       y:["-50vh","-60vh"],
       transition:  {type:"spring",stiffness:100,duration:.06}
     });
     await controlslogo.start({
       y:"200vh",
      transition: {type:"spring",stiffness:100,duration:.02}
     });
      controlsschirm.start({opacity:1});
    
   await  controls.start({rotate:-45, transition: {type:"spring",stiffness:50,duration:.001}});

   
   controls.start({rotate:0, transition: {type:"spring",stiffness:50,duration:.1}});
   
    
    await controlslogo.start({
       y:["200vh","7vh"],
       x:"100%",
       transition:  {type:"spring",stiffness:20,duration:.3}});
       
  */
     

       
    
       await controls.start({rotate:-45, transition: {type:"spring",stiffness:50,duration:.001}});
       b6Controls.start({
        opacity:1,
        top:"500%",
        left:"10%",
        transition:  {type:"spring",stiffness:5.5,duration:.2}
      });
       b7Controls.start({
        opacity:1,
        top:"920%",
        left:"67%",
        transition:  {type:"spring",stiffness:5.5,duration:.2}
      });
   
       await controls.start({rotate:0, transition: {type:"spring",stiffness:50,duration:.1}});
        controlsschirm.start({opacity:1});
     
        controlslogo.start({
          opacity:1,
       
           transition:  {type:"spring",stiffness:1000,duration:.001}});

  
           controls.start({rotate:16, transition: {type:"spring",stiffness:12,duration:.01}});
       await  controlslogo.start({
        
           y:["1000%","100%"],
           x:"100%",
          
           transition:  {type:"spring",stiffness:20,duration:.3}});

 controlsLogoBeforPush.start({opacity:1,transition:{duration:1}});
 await  controlslogo.start({
  y:["100%","30%"],
  transition:{stiffness:1,duration:1}
  });
 controlsLogoBeforPush.start({opacity:0});
 controlsLogoAfterPush.start({opacity:1,transition:{duration:.3}});
 await  controlslogo.start({
y:["100%","199%"],
transition:{stiffness:100,duration:.3}
});
await controlsLogoAfterPush.start({opacity:0,transition:{duration:.01}});
await  controlslogo.start({
  y:["199%","100%"],
  transition:{stiffness:.01,duration:1.5}
  });

//await controlsLogoBeforPush.start({opacity:1,transition:{delay:-.,duration:1.7}});
/*
await  controlsLogoBeforPush.start({opacity:0,transition:{stiffness:100,duration:.01}});
 controlsLogoAfterPush.start({opacity:1,transition:{stiffness:80,delay:.08,duration:.3}});
  await controlslogo.start({
y:["50%","150%","50%"],
transition:{stiffness:1,delay:.08,duration:.3}
});
controlsLogoAfterPush.start({opacity:0,transition:{duration:.5}});
*/
await controls.start({ opacity: 0, transition: { delay: -.2,duration:0.01} }).catch(error => console.error(error));
    

   await controlsimg2.start({opacity:1,x:"10vw"});
    ////delay-group 1

       await  controlsimg2.start({opacity:0,transition:{type:"Spring",duration:.05,stiffness:2}});
        await controlsimg3.start({opacity:1,transition:{duration:.2}});
      
        controlsBroDialog.start({
          opacity:.3,
          left:"5%",
          top:"-20%",
          scale:15,
         transition: {duration:1.3,stiffness:1}
        });
      
        await  controlsimg3.start({opacity:0,transition:{delay:.5,duration:0.1}});
       
        await  controls.start({opacity:1,transition:{delay:.05}});
     
         
      
      controlsBroDialog.start({
        opacity:0,
       transition: {stiffness:.1, delay:-.5,duration:1}
      });
    ////delay-group 2
    await  controlsHand.start({ pathLength: 1,transition:{type:"Spring",duration:1,stiffness:60}});
    await  controlsHandSVG.start({left:["22%","10%","23%"],rotate:[0,-10,0],transition:{type:"Spring",duration:.2,stiffness:100}});
    // await  controlslogo.start({opacity:1,x:["-30vw","-30.5vw","-30vw","-30.5vw"],rotateZ:[0,10,0,10,0],transition:{type:"yoyo",duration:.5,stiffness:2}})
    await controlsHand.start({pathLength: 0});
    //await  controlsHandSVG.start({opacity:0});
    controlsschirm.start({opacity:0});
 
   
   
       //  secondrainbowControl.start({opacity:0});
      /*
       if(!scrollToGreyActive){
       b9Controls.start({ left:"10%",top:"140%",transition:{delay:1,stiffness:.1,duration:5}});
       }
       */
        bubbleForLogoControls.start({opacity:1,left:"16%",top:"427.5%",scale:1.7,transition:{type:"spring",stiffness:16,duration:.02}});
        rainbowSvgControl2.start({opacity:0,pathLength:0});
        
    await  firstrainbowControl.start({rotate:-45});
    
    controls.start({rotate:-25 ,transition: {stiffness:6,delay:0.7}});
    await  controlslogo.start({
      y:"300%",
      transition:  {delay:0.5,type:"spring",stiffness:60,duration:.003}});
     /*bubbleForLogoControls.stop();*/
  
      
    await  controls.start({rotate:0, transition:  {delay:1,stiffness:5}});
    
    await controlslogo.start({
      y:"150%",
      x:"165%",
      transition:  {type:"spirng",stiffness:600,duration:.25}});
      await  firstrainbowControl.start({rotate:0});  
      rainbowSvgControl2.start({opacity:1});
      await  rainbowSvgControl2.start({pathLength:1});  
      await  colorSplashControl.start({opacity:1});
      await  bubbleForLogoControls.start({opacity:0,scale:7,transition:{type:"spring",duration:.06}});
      controlslogo.start({
        y:"316%",
        x:"27vw",
        transition:  {type:"spring",duration:.75}});
      await controls.start({  x: "4vw" , transition:  {type:"spring", stiffness:150,duration:.002}});
      setBroAnimationComplete(true);
      console.log("broanimation is compelete"+broAnimationComplete);
return;
   
      };
/*
useEffect(
  () => {
   
   
   const container2 = div2.current;

  
  // Attach event listeners to the container
  ////div2
     
     
  container2.addEventListener('mouseover', handleDiv2HoverStart);

  
  

  // Cleanup event listeners
  return () => {
    container2.removeEventListener('mouseover',  handleDiv2HoverStart);
   
   
  };
}, [introAnimationComplete,
  controls,
  controlslogo,
  controlsschirm,
  controlsimg2,
  controlsimg3,
  controlsHand,
  firstrainbowControl,
]);
*/
/*
useEffect(()=>{

  document.getElementById("myAnchor").addEventListener("click", function(event){
    console.log("event for myanchor"+ event.preventDefault());
     event.preventDefault();
   },[]);
});
*/
/////////useEffectSection
useEffect(()=>{
  const greyAnim = async () => {
  greyCloudDownControl.start({x:"-15vw",y:"-10%",rotate:20,scale:1.3, transition:{duration:2}});
  greyCloudControl.start({x:"28vw",y:"-30%",rotate:-40,opacity:.5,scale:1.7, transition:{duration:2.5}});
 b1EmptyControls.start({
    scale:2,
    opacity:0,
    transition:  {duration:.01}
  });
 b1Controls.stop();
   b1Controls.start({
    opacity:0,
    transition:  {duration:2.3}
  });
  await greyToAnimate.start({opacity:1});
} ;

if(isInViewGreyTxt && introAnimationComplete&& greyScrolled){
 
  setGreyContentVisible(true);
 greyAnim();
}

},[isInViewGreyTxt,introAnimationComplete,greyScrolled]);
useEffect(()=>{
 
  if(isInViewYourLifePaintingDiv){
    const yourLifePaintigAnim=async ()=>{
    paintBrushControls.start({left:["-30vw","3vw"],top:["-13vw","-1vw"],rotate:90, transition:{type:"yoyo",stiffness:70,duration:.4}});
    magnetControls.start({opacity:.4,scale:1, transition:{duration:.3}});
    magnetControls.start({opacity:0,transition:{delay:.3,duration:.1}});
    asAControls.start({opacity:1,right:["-20vw","-5vw"],top:["-8vw","-.5vw"],rotate:60, color: "#00EEB9", transition:{delay:.5,duration:.2}});
    paintingImgControls.start({opacity:1,transition:{delay:.7,duration:.1}});
    await lampControls.start({opacity:1, transition:{delay:.6,duration:.3}});
    
  await greyCloudOutCanvasControls.start({right:["-80vw","-18vw"],scale:2, transition:{stiffness:1,duration:5}});
  await  handOfCanvasControls.start({opacity:.5});
  handOfCanvasControls.start({rotate:[-50,50,-40,40],scale:[1.2,1], transition:{type:"yoyo",stiffness:50,duration:.3}});
  await  greyCloudOutCanvasControls.start({right:["-18vw","-80vw"], transition:{delay:.4,stiffness:1,duration:.7}});
 handOfCanvasControls.start({opacity:0,transition:{stiffness:50,duration:.01}});
 
  }
   yourLifePaintigAnim();
  }
  
  },[isInViewYourLifePaintingDiv]);

useEffect(()=>{
 
if(isInViewdiv2){

 broAnim();
}

},[isInViewdiv2]);

useEffect(()=>{

if(isInViewdiv3&&broAnimationComplete&&scrolled){
  logoAnimationTodiv4();
}

},[isInViewdiv3,broAnimationComplete,scrolled]);

useEffect(()=>{
 /*
  if(isInViewdivNextStep){
    b11Controls.start({top:"1280%",left:"10%",transition:{stiffness:1,duration:2}});   
  }
  */
  
  if(isInViewdivNextStep&&logoAnimationTodiv4Compelete&&scrollToNextStepsActive&&!nextStepAnimationStarted){
    setNextStepAnimationStarted(true);
    logoAnimationToNextSteps();
  }
  
  },[isInViewdivNextStep,logoAnimationTodiv4Compelete,scrollToGreyActive,scrollToNextStepsActive,nextStepAnimationStarted]);
/*
  useEffect(()=>{
  const greyAnim = async () => {
  greyCloudDownControl.start({x:"-15vw",y:"-10%",rotate:20,scale:1.3, transition:{duration:1.5}});
  greyCloudControl.start({x:"28vw",y:"-30%",rotate:-40,opacity:.5,scale:1.7, transition:{duration:2}});
  b1EmptyControls.start({
    scale:2,
    opacity:0,
    transition:  {duration:.01}
  });
 
   b1Controls.start({
    opacity:0,
    transition:  {duration:2.3}
  });
  await greyToAnimate.start({opacity:1});
} ;

if(isInViewGreyTxt){
 setGreyContentVisible(true);
 greyAnim();
}

},[]);
*/

useEffect(()=>{
  //ydiv0.set(div0.current.clientHeight);
  //ydivGrey.set(ydivGrey.current.clientHeight);
  /*ydiv2.set(div2.current.clientHeight);
  ydiv3.set(div3.current.clientHeight);
  ydiv4.set(div4.current.clientHeight);
  console.log("thiiiiiiis is div 4 height"+ydiv4.get());
  if ('scrollRestoration' in window.history) {
     window.history.scrollRestoration = 'manual';
  }
  //by each reload it brings it back to the top
  //see if it is something you want to keep or not
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
  */
    // Run your intro animation
  introAnim();
  //const timeoutId = setTimeout(() => {
    // Code to run after the delay
    document.body.style.overflow = 'auto'
    window.scrollTo(0, 0);
 // }, 6000);

  // Cleanup function to clear the timeout in case the component unmounts before the timeout
  return () => {
    //clearTimeout(timeoutId);
  };
    // Cleanup function to enable scrolling in case the component unmounts before the animation completes
   
}, []);




  /*
   const introAnim = async () => {
     console.log('introAnim started');
     await introLogoControl.start({x:"-30vw",transition:{delay:1,stiffness:700}});
     await introLogoControl.start({
      y:["0%","-20%"],
      transition:  {delay:2,type:"spring",stiffness:100,duration:.06}
    });
    await introLogoControl.start({
      y:"1000%",
     transition: {type:"spring",stiffness:100,duration:.02}
    });
      introAnim().then(() =>{
        setIntroAnimationComplete(true);
  
      }
      
      );
    /*
     controlsschirm.start({opacity:1});
   
     await controls.start({ x: "10vw" });
     await controlslogo.start({
       y:["-50vh","-60vh"],
       transition:  {type:"spring",stiffness:100,duration:.06}
     });
     await controlslogo.start({
       y:"200vh",
      transition: {type:"spring",stiffness:100,duration:.02}
     });
     
   //<motion.img className="greyToAnimate" id="greySplashs" src={greySplashs}  initial={{opacity:0}} animate={greyToAnimate}   alt="logo"  ></motion.img>

  
  // Attach event listeners to the container
  ////div2
  
  
      
      // console.log("broanimationseeeeeeeettto"+broAnimHasStarted);
     */
/*bubble contaiers

<motion.div  className="bubbleContainer"  animate={b3Controls}>
<motion.img className="emptyBubble"  src={bubble3} alt="b3"  ></motion.img>
<motion.img className="colorSplash"  src={splash3}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div  className="bubbleContainer"  animate={b4Controls}>
<motion.img className="emptyBubble"  src={bubble4} alt="b4"  ></motion.img>
<motion.img className="colorSplash"  src={splash4}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div className="bubbleContainer"  animate={b5Controls}>
<motion.img className="emptyBubble"  src={bubble5} alt="b5"  ></motion.img>
<motion.img className="colorSplash"  src={splash5}  alt="colorSplash" ></motion.img>
</motion.div>


<motion.div className="bubbleContainer"  animate={b6Controls}>
<motion.img className="emptyBubble"  src={bubble6} alt="b6"  ></motion.img>
<motion.img className="colorSplash"  src={splash6}  alt="colorSplash" ></motion.img>
</motion.div>
*/


  ///console.log(-(motionT.current)/2);
   // var ypos=greySplashPositionY;
  
  //setGreySplashScale(1+scrollY*.03 )
  
/*
useEffect(
   () => {
    const broAnim = async () => {
      console.log('broAnim started');
      await controls.start({ opacity: 1, x: "10vw" });
      await controlslogo.start({
        y:["-50vh","-60vh"],
        transition:  {type:"spring",stiffness:100,duration:.06}
      });
      await controlslogo.start({
        y:"200vh",
       transition: {type:"spring",stiffness:100,duration:.02}
      });
       controlsschirm.start({opacity:1});
     
    await  controls.start({rotate:-45, transition: {type:"spring",stiffness:50,duration:.001}});

    
    controls.start({rotate:0, transition: {type:"spring",stiffness:50,duration:.1}});
    
     
     await controlslogo.start({
        y:["200vh","7vh"],
        x:"100%",
        transition:  {type:"spring",stiffness:20,duration:.3}});
        
   
    await   controls.start({ opacity: 0, transition: { delay: 1,duration:0.01} }).catch(error => console.error(error));
    await controlsimg2.start({opacity:1,x:"10vw"});
     ////delay-group 1
     
        await  controlsimg2.start({opacity:0,transition:{type:"Spring",duration:.05,stiffness:2}});
        await  controlsimg3.start({opacity:1,x:"1vw"});
        //await  controlsHand.start({opacity:1,x:[0,-25,0,-20,0],transition:{type:"Spring",duration:.5,stiffness:2}});
       // await  controlslogo.start({opacity:1,x:["-30vw","-30.5vw","-30vw","-30.5vw"],rotateZ:[0,10,0,10,0],transition:{type:"yoyo",duration:.5,stiffness:2}})
      
     ////delay-group 2
     await  controlsHand.start({opacity:0,transition:{delay:.5,duration:0.01}});
     await  controlsimg3.start({opacity:0,transition:{delay:.5,duration:0.01}});
     await  controls.start({opacity:1,x:"1vw",transition:{delay:.05}});
     await controlsschirm.start({opacity:0});
     await  firstrainbowControl.start({rotate:-45});
     await controlslogo.start({
      y:"300%",
      transition:  {delay:0.5,type:"spring",stiffness:60,duration:.003}});
    
       controls.start({rotate:-45});
     await  controls.start({rotate:0, transition:  {delay:1}});
     await controlslogo.start({
      y:"150%",
      x:"140%",
      transition:  {type:"spirng",stiffness:600,duration:.25}});
      await  firstrainbowControl.start({rotate:0});  
      controlslogo.start({
        y:"278%",
        x:"240%",
        transition:  {type:"spring",duration:.75}});
        await controls.start({  x: "10vw" , transition:  {type:"spring", stiffness:150,duration:.002}});
    }
  
    if (isInViewdiv2) {
    // myAnimation();
     broAnim();
      
    }
}, [isInViewdiv2]);
*/

/*
useEffect(
  () => {
   const broAnim = async () => {
     console.log('broAnim started');
     await controls.start({ opacity: 1, x: "10vw" });
     await controlslogo.start({
       y:["-50vh","-60vh"],
       transition:  {type:"spring",stiffness:100,duration:.06}
     });
     await controlslogo.start({
       y:"200vh",
      transition: {type:"spring",stiffness:100,duration:.02}
     });
      controlsschirm.start({opacity:1});
    
   await  controls.start({rotate:-45, transition: {type:"spring",stiffness:50,duration:.001}});

   
   controls.start({rotate:0, transition: {type:"spring",stiffness:50,duration:.1}});
   
    
    await controlslogo.start({
       y:["200vh","7vh"],
       x:"100%",
       transition:  {type:"spring",stiffness:20,duration:.3}});
       
  
   await   controls.start({ opacity: 0, transition: { delay: 1,duration:0.01} }).catch(error => console.error(error));
   await controlsimg2.start({opacity:1,x:"10vw"});
    ////delay-group 1
    
       await  controlsimg2.start({opacity:0,transition:{type:"Spring",duration:.05,stiffness:2}});
       await  controlsimg3.start({opacity:1,x:"1vw"});
       //await  controlsHand.start({opacity:1,x:[0,-25,0,-20,0],transition:{type:"Spring",duration:.5,stiffness:2}});
      // await  controlslogo.start({opacity:1,x:["-30vw","-30.5vw","-30vw","-30.5vw"],rotateZ:[0,10,0,10,0],transition:{type:"yoyo",duration:.5,stiffness:2}})
     
    ////delay-group 2
    await  controlsHand.start({opacity:0,transition:{delay:.5,duration:0.01}});
    await  controlsimg3.start({opacity:0,transition:{delay:.5,duration:0.01}});
    await  controls.start({opacity:1,x:"1vw",transition:{delay:.05}});
    await  controlsschirm.start({opacity:0});
    await  firstrainbowControl.start({rotate:-45});

    await controlslogo.start({
      y:"300%",
      transition:  {delay:0.5,type:"spring",stiffness:60,duration:.003}});
    await  controls.start({rotate:-45});
    return  await  controls.start({rotate:0, transition:  {delay:1}});


   };
 
   const rainbowAnim= async () => {
    console.log("already in animmmmmm raaaaainboooow");
    await controlslogo.start({
     y:"150%",
     x:"140%",
     transition:  {type:"spirng",stiffness:600,duration:.25}});
     await  firstrainbowControl.start({rotate:0});  
     controlslogo.start({
       y:"278%",
       x:"240%",
       transition:  {type:"spring",duration:.75}});
      return await controls.start({  x: "10vw" , transition:  {type:"spring", stiffness:150,duration:.002}});
   };
   const container2 = div2.current;
   const container3 = div3.current;
  
  // Attach event listeners to the container
  ////div2
  
 function handleDiv3HoverStart  () {
   
    container3.removeEventListener('mouseenter', handleDiv3HoverStart);
    console.log("div3 hovered");
    rainbowAnim();
  
  };
  const handleDiv2HoverStart = () => {
       container2.removeEventListener('mouseenter',  handleDiv2HoverStart);
       console.log("broanimationseeeeeeeettto"+broAnimHasStarted);
       broAnim().then( ()=>{
        setBroAnimHasStarted(true);
        console.log("raaaaainboooow"+broAnimHasStarted);
  
    container3.addEventListener('mouseenter', handleDiv3HoverStart);
   
  ////div3

 
     

       });
    
  
  
  };
 
  // Attach event listeners to the container
  ////div2
  
  container2.addEventListener('mouseenter', handleDiv2HoverStart);
  
  
  // Cleanup event listeners
 
  // Cleanup event listeners
  return () => {
    container2.removeEventListener('mouseenter',  handleDiv2HoverStart);
    container3.removeEventListener('mouseenter',  handleDiv3HoverStart);
   
  };
}, [
  controls,
  controlslogo,
  controlsschirm,
  controlsimg2,
  controlsimg3,
  controlsHand,
  firstrainbowControl,
]);



useEffect(
  () => {
   
}, [broAnimHasStarted,
  controls,
  controlslogo,
  controlsschirm,
  controlsimg2,
  controlsimg3,
  controlsHand,
  firstrainbowControl,
]);







/*
useEffect(()=>{

  console.log("animation should starrrrrrrrrrrrrrrrrt"+scrollYProgress);
   if(scrollYProgress>.65){
    console.log("animation should starrrrrrrrrrrrrrrrrt"+scrollYProgress);

   }
   
 



},[isHovered])
*/
/*
useEffect(() => {
  setTimeout(()=>{
    controls.start({opacity:1,x:"-1vw"});
  },1000);
 //person2Animation();

  
  setTimeout(()=>{
    setimage1visible(false);
    setimage2visible(true);
    controlsimg2.start({opacity:1,x:"-1vw"});
  },2000);
  
}, [img1visible,img2visible]);

*/
/// style={{opacity: animateimg1? 1:0}}
/////////////////////////useeffect section end
//variants={logovariant} animate="visible"
 //<motion.img  id="spashStart" style={{opacity:0}} src={spashStart} alt="spashStart" ></motion.img>
/*
<section className="section1">
<div className="greyness" >
<motion.img id="greyslow" style={{x:x}} src={greyDust} alt="dust" ></motion.img>
<motion.img id="greyfast" style={{x:xSlow}} src={greyDust} alt="dust" ></motion.img>
</div>
</section>
*/
///<motion.img id="rainbowStart"  src={rainbowAbsolute} alt="colorLines" animate={firstrainbowControl} ></motion.img>
/*grey images from divgrey

<motion.img id="greyUP"  src={greyUP} alt="greyup"  ></motion.img>
<motion.img className="greyDown"  src={greyDown} alt="greyDown"  ></motion.img>
<motion.img className="greySplash" src={greySplash} alt="greySplash"  ></motion.img>
<img src={callMe}></img>
*/
return (
<div >

<motion.div ref={div0}  className="div0">



<motion.div  className="bubbleContainerIntro"  animate={b3Controls}>
<motion.img className="emptyBubble"  src={bubble3} alt="b3"  ></motion.img>
<motion.img className="colorSplash"  src={splash3}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div  className="bubbleContainerIntro"  animate={b4Controls}>
<motion.img className="emptyBubble"  src={bubble4} alt="b4"  ></motion.img>
<motion.img className="colorSplash"  src={splash4}  alt="colorSplash" ></motion.img>
</motion.div>


<div style={{position:"relative", zIndex: 1,marginTop:"20%"}}></div>
<motion.img src={logo} style={{scale:1.3,marginBottom:"5%"}} animate={introLogoControl} alt="logo" ></motion.img>
<motion.h1  id="h1Intro" initial={{opacity:0}} animate={{opacity:1}}  transition={{type:"yoyo"}} >ITS ABOUT DAMN TIME WE INFUSE SOME of that MAGICal SPICE INTO OUR LIVES!</motion.h1>
<motion.img className="bubbles"  src={l} animate={lControls} alt="l" ></motion.img>
<motion.img className="bubbles" src={e} animate={eControls} alt="e" ></motion.img>
<motion.img className="bubbles" src={t} animate={tControls} alt="t" ></motion.img>
<motion.img className="bubbles" src={ss} animate={sControls} alt="s" ></motion.img>
<motion.img className="bubbles" src={g} animate={gControls} alt="g" ></motion.img>
<motion.img className="bubbles" src={o} animate={oControls} alt="o" ></motion.img>
<motion.img className="bubbles" src={zeichen} animate={zeichenControls} alt="zeichen" ></motion.img>

<div ref={magicContainerRef} className="magicContainer">

<motion.img  className="grid-item-spice" src={introSpice} initial={{opacity:1}} animate={animateMagicContainer} alt="spice" ></motion.img>
<motion.img className="grid-item-magicLeft" initial={{opacity:0}} animate={animateMagic}  src={magicLeft} alt="magicLeft" ></motion.img>
<motion.img className="grid-item-magicRight" initial={{opacity:0}} animate={animateMagic} src={magicRight} alt="magicRight" ></motion.img>

</div>

</motion.div>

{/**
<video id="yourcolorsVid"  autoplay="autoplay" muted loop> <source src={teamHeaderVid} type="image/gif"></source>  </video> 
*/}


<CampaignStatement/>

<motion.div  className="divGrey" ref={greydiv}  >
  
<motion.div className="bubbleContainerGrey"  animate={b1Controls}>
<motion.img className="emptyBubble"  animate={b1EmptyControls}    src={bubble1} alt="b1"></motion.img>
<motion.img className="colorSplash"      src={splash1}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div  className="bubbleContainerGrey"  animate={b2Controls}>
<motion.img className="emptyBubble"  animate={b2EmptyControls}  src={bubble2} alt="b2"  ></motion.img>
<motion.img className="colorSplash" initial={{zIndex:0,scale:.7,opacity:.8}} animate={splash2Controls} src={splash2}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div className="bubbleContainerGrey" initial={{zIndex:4000000}} animate={b5Controls}>
<motion.img className="emptyBubble"  animate={b5EmptyControls} src={bubble5} alt="b5"  ></motion.img>
<motion.img className="colorSplash" animate={splash1Controls} src={splash5}  alt="colorSplash" ></motion.img>
</motion.div>


<motion.div className="bubbleContainerGrey"  animate={b6Controls}>
<motion.img className="emptyBubble"  src={bubble6} alt="b6"  ></motion.img>
<motion.img className="colorSplash" src={splash6}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div  className="bubbleContainerGrey"  animate={b7Controls}>
<motion.img className="emptyBubble"  src={bubble7} alt="b4"  ></motion.img>
<motion.img className="colorSplash"  src={splash7}  alt="colorSplash" ></motion.img>
</motion.div>

<motion.div className="bubbleContainerGrey"  animate={b8Controls}>
<motion.img className="emptyBubble"  src={bubble8} alt="b4"  ></motion.img>
<motion.img className="colorSplash"  src={splash8}  alt="colorSplash" ></motion.img>
</motion.div>


<motion.img  id="greyUP" src={greyUP} alt="logo" animate={ greyCloudControl } ></motion.img>
<motion.img  id="greyDown" src={greyDown} alt="logo" animate={greyCloudDownControl} ></motion.img>
<motion.img  id="greyDown2" src={greyDown} alt="logo" animate={greyCloudDownControl} ></motion.img>

{!scrollToGreyActive? (
<div className="divGreyContent">
<div className="GridItemGreyTitle">
<h1 id="greyy">THE GREY EPIDEMIC</h1>
</div>

<div  ref={greyContent} className="GridItemGreyText">

<Highlighted
      text={text}
      highlight="Imagine unique colors"
      />
<p>

 </p>

</div>
</div>

):

(
<div>
<div className="secondGreyHeaderContainer">
<motion.h1 initial={{opacity:0}}  animate={dontAnim} className="secondGreyHeader">Don't </motion.h1>
<motion.h1 initial={{opacity:0}}  animate={letAnim}   className="secondGreyHeader">let</motion.h1>
<motion.h1 initial={{opacity:0}}  animate={greyAnim}    className="secondGreyHeader">grey</motion.h1>
<motion.h1 initial={{opacity:0}}  animate={takeAnim}  className="secondGreyHeader">take</motion.h1>
<motion.h1 initial={{opacity:0}}  animate={overAnim} id="over"  className="secondGreyHeader">over...</motion.h1>

</div>





{/**
<svg  className="greySvgArrow" width="450" height="2357" viewBox="0 0 450 2357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector 8" d="M235 932H233V934H235V932ZM447 932L448.846 932.769L450 930H447V932ZM235 1441L233.082 1441.57L234.678 1446.98L236.846 1441.77L235 1441ZM3 654.5V652.5H0.324847L1.08172 655.066L3 654.5ZM365.5 654.5H367.5V652.5H365.5V654.5ZM365.5 1991V1993H367.5V1991H365.5ZM235 1991V1989H233V1991H235ZM235 2353.5L233.675 2355L234.895 2356.08L236.198 2355.1L235 2353.5ZM316.5 2292.5L317.698 2294.1L322.51 2290.5H316.5V2292.5ZM166 2292.5V2290.5H160.718L164.675 2294L166 2292.5ZM224.333 11C224.333 16.891 229.109 21.6667 235 21.6667C240.891 21.6667 245.667 16.891 245.667 11C245.667 5.10896 240.891 0.333333 235 0.333333C229.109 0.333333 224.333 5.10896 224.333 11ZM233 329V932H237V329H233ZM235 934H447V930H235V934ZM445.154 931.231L233.154 1440.23L236.846 1441.77L448.846 932.769L445.154 931.231ZM236.918 1440.43L4.91828 653.934L1.08172 655.066L233.082 1441.57L236.918 1440.43ZM3 656.5H365.5V652.5H3V656.5ZM363.5 654.5V1991H367.5V654.5H363.5ZM365.5 1989H235V1993H365.5V1989ZM233 1991V2353.5H237V1991H233ZM236.198 2355.1L317.698 2294.1L315.302 2290.9L233.802 2351.9L236.198 2355.1ZM316.5 2290.5H166V2294.5H316.5V2290.5ZM164.675 2294L233.675 2355L236.325 2352L167.325 2291L164.675 2294ZM237 329V222.5H233V329H237ZM237 222.5V11H233V222.5H237Z" fill="url(#paint0_linear_17_13)"/>
<defs>
<linearGradient id="paint0_linear_17_13" x1="225" y1="329" x2="225" y2="2353.5" gradientUnits="userSpaceOnUse">
<stop offset="0.229167" stop-color="#F8A813"/>
<stop offset="0.350694" stop-color="#00EEB9"/>
<stop offset="0.532986" stop-color="#F8A813"/>
<stop offset="0.668402" stop-color="#D146BF"/>
</linearGradient>
</defs>
</svg>


 */}

</div>


)}
</motion.div>
<div  className="div2Bubblecontainer">
{scrollToGreyActive? (
<div className="logoSvgLineContainer"  ref={finalWordsDiv}>

<svg className="greyDivSvg" width="22" height="415" preserveAspectRatio="xMinYMin meet" viewBox="0 0 22 415" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector 9" d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333333 11 0.333333C5.10896 0.333333 0.333333 5.10896 0.333333 11ZM0.333333 403.5C0.333333 409.391 5.10896 414.167 11 414.167C16.891 414.167 21.6667 409.391 21.6667 403.5C21.6667 397.609 16.891 392.833 11 392.833C5.10896 392.833 0.333333 397.609 0.333333 403.5ZM9 11V403.5H13V11H9Z" fill="url(#paint0_linear_20_2)"/>
<defs>
<linearGradient id="paint0_linear_20_2" x1="860.5" y1="-931" x2="860.5" y2="420" gradientUnits="userSpaceOnUse">
<stop stop-color="#F8A813"/>
<stop offset="0.741319" stop-color="#D146BF"/>
<stop offset="0.840277" stop-color="#00EEB9"/>
<stop offset="0.970486" stop-color="#F8A813"/>
</linearGradient>
</defs>
</svg>

<p >
Instead how about we embrace the true charm of grey? I believe it's about time we guide it back to being the background color; the perfect backdrop where vibrant and unique colors can take the lead as the main storytellers in the painting of our lives!
</p>
<div  className="passtilliosSvgContainer">



<h1 id="onSvgtxt1">but to kick start this journey</h1>

<h1 id="onSvgtxt2">I need your help!</h1>
<svg  className="logoSvgLine"  viewBox="0 0 237 3839" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength:0}} animate={logoLineAnimation} id="logoLine" d="M117.709 1716.07C116.646 1705.96 120.18 480.085 120.18 261.53C98.3879 242.579 23.9554 192.971 60.9991 244.251C84.6933 277.051 87.5753 277.694 120.18 313.925C130.629 325.535 218.33 137.789 120.18 233.661C-120 -174.5 179.494 100.697 217.5 15.4999C217.5 15.4999 120.18 144 29 15.4999M117.709 1716.07C122.493 1706.6 143.329 1683.21 158.636 1682.32C177.771 1681.2 178.303 1690.12 215.509 1672.84C256.6 1653.76 223.908 1691.46 197.969 1696.81C184.15 1691.79 155.341 1684.77 150.664 1696.81C144.817 1711.86 128.871 1730.81 96.4482 1703.5C64.0253 1676.19 74.6558 1697.93 54.4579 1700.71C34.26 1703.5 11.936 1690.68 3.43164 1682.32C-5.07274 1673.96 26.2871 1701.83 45.422 1696.81C64.5568 1691.79 80.5025 1671.73 100.169 1686.22C119.835 1700.71 116.646 1705.96 117.709 1716.07ZM117.709 1716.07C118.772 1726.19 84.7547 1733.04 61.3677 1732.48C55.7438 1732.35 50.3965 1731.64 45.422 1730.54M45.422 1730.54C29.7098 1727.09 17.7157 1719.86 12.4675 1715.21C6.93969 1710.3 20.7947 1720.59 28.4132 1726.35C25.9328 1730.07 21.8223 1738.73 25.2241 1743.63C24.161 1741.22 23.3106 1734.71 28.4132 1728.03C32.3111 1728.4 40.6383 1729.81 42.7644 1732.48C41.8785 1738.24 42.7644 1746.98 45.422 1751.99C43.4731 1745.68 40.7446 1732.56 45.422 1730.54ZM58.3415 1732.36C57.2785 1737.74 58.3415 1749.76 62.9622 1756.45C60.659 1749.21 57.1155 1734.71 61.3677 1734.71C66.3286 1733.97 76.463 1732.48 77.3134 1732.48C78.3764 1732.48 75.7188 1744.75 80.5025 1751.99C78.0221 1746.14 74.5495 1734.04 80.5025 1732.48C87.9438 1730.54 91.6645 1728.03 93.2591 1728.03C94.8537 1728.03 90.0699 1735.83 98.5743 1746.98C95.7395 1741.77 91.3456 1730.7 96.4482 1728.03C102.827 1724.68 120.367 1709.07 120.367 1726.35C120.367 1743.63 134.718 1843.41 155.447 1835.6C167.672 1831.89 195.949 1830.81 211.257 1856.23C215.332 1864.4 217.423 1882.2 193.185 1888C162.889 1895.24 168.735 1893.57 157.042 1906.39C145.348 1919.21 136.844 1919.21 117.709 1910.29C98.5743 1901.37 94.3221 1903.6 78.908 1918.1C63.4938 1932.59 65.6199 1940.95 77.3134 1956.56C89.0069 1972.16 116.646 2014.52 215.509 2011.18C211.08 2004.31 200.414 1987.77 193.185 1976.62C184.15 1962.69 182.024 1948.75 157.042 1954.33C132.06 1959.9 130.997 1957.11 115.052 1943.18C99.1058 1929.24 67.746 1905.83 56.0525 1921.44C54.6991 1924.78 55.2495 1934.93 68.2775 1948.75C75.3645 1966.96 93.6843 2006.58 110.268 2015.5M110.268 2015.5C130.997 2026.65 138.439 2026.23 167.141 2019.54C190.103 2014.19 206.119 2010.25 211.257 2008.95C208.423 2008.39 199.032 2004.6 184.15 1993.9C165.546 1980.52 156.51 1990.56 138.97 1987.21C121.43 1983.87 121.961 1969.93 110.268 1966.59C98.5743 1963.24 71.6977 1956.56 70.9351 1950.98M110.268 2015.5L114 3751M114 3751C271.5 3751 171 3751 120.367 3835.5C61.2614 3766.38 2.72157 3751 58 3751C92.7081 3751 76.7934 3751 114 3751Z" stroke="url(#paint0_linear_12_2)" stroke-width="4" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_12_2" x1="113.747" y1="-251.269" x2="119" y2="3356.5" gradientUnits="userSpaceOnUse">
<stop offset="0.116319" stop-color="#00EEB9"/>
<stop offset="0.282986" stop-color="#D146BF"/>
<stop offset="0.387152" stop-color="#F8D38E"/>
<stop offset="0.553819" stop-color="#00EEB9"/>
<stop offset="0.689236" stop-color="#8980BD"/>
<stop offset="0.829861" stop-color="#EEC77C"/>
<stop offset="1" stop-color="#D146BF"/>
</linearGradient>
</defs>
</svg>
 </div>
{(!scrollToNextStepsActive)?(
  <Button id="btnNextSteps" name="count me in! next steps?" handleClick={handleScrollToDivNext}/>

):
(
  
<video   muted autoPlay="autoplay" loop id="bobNextStep"    >

<source src={bobVid} type="video/mp4"></source>

 </video>

)}
</div>)
: <div></div>}


<motion.div initial={{top: "250%",left:"-50%"}} animate={b9Controls} className="bubbleDiv2"  >
<motion.img className="emptyBubble2"  animate={b9EmptyControls}   src={bubble3} alt="b2"  ></motion.img>
<motion.img className="colorSplash2" animate={splash3Controls}  src={splash9}  alt="colorSplash" ></motion.img>
</motion.div>
<motion.div initial={{top: "600%",
    left:"100%",zIndex:20000}} animate={b10Controls}  className="bubbleDiv2"  >
<motion.img className="emptyBubble2"  animate={b10EmptyControls}   src={bubble4} alt="b4"  ></motion.img>
<motion.img className="colorSplash2" animate={splash4Controls} src={splash10}  alt="colorSplash" ></motion.img>
</motion.div>
<motion.div initial={{top: "1300%",
    left:"7%"}} animate={b11Controls} className="bubbleDiv2"  >
<motion.img className="emptyBubble2"  animate={b11EmptyControls}   src={bubble1} alt="b3"  ></motion.img>
<motion.img className="colorSplash2" animate={splash5Controls} src={splash11}  alt="colorSplash" ></motion.img>
</motion.div>
</div>


<ProjectSection  setLogoAnimationTodiv4Compelete={setLogoAnimationTodiv4Compelete}/>




<div ref={divNextSteps} className="NextStepsContainer">
{(!scrollToGreyActive)? (
  <div className="showMeActivationDiv">
<motion.img  id="showMeImgLine"   
  src={showMeImgLine} alt="showMeImgLine" ></motion.img>
<motion.h1 id="showMeHeader" >LET THE BUBBLES TALK THE FINAL TALK!
 </motion.h1>
 <Button id="btnLastWords" name="READY?" handleClick={handleScrollToDivgrey}/>
</div>
):
<div ref={nextStepBodyContainerRef}>
<motion.img  id="personNotTalking3"   animate={controlsthirdPerson}  
  src={notTalking} alt="person not talking" ></motion.img>
<motion.img  id="logoWithHair"   animate={controlslogoWithHair}  
  src={logoWithHair} alt="logo" ></motion.img>
<motion.div className="nextStepBodyContainer" animate={nextStepsBodyAnimationControls}>
<motion.img src={nextSteps} className="nextSteps"  alt="next steps" ></motion.img>
<Button id="btn1" name="FIRST PROJECT"/>
<Button id="btn2" name="JOIN!" />
<Button id="btn3" name="THE TEAM" />
</motion.div>
</div>
}

</div>
{/*<p id="showMeText" >heeeell yeah!</p>*/} 



</div>

 )};
 export default IntroParallax;