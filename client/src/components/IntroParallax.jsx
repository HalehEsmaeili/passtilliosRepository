import React, { useEffect, useState, useRef, useHover } from "react";
import axios from "axios";
import axiosInstance from "../Api/axiosInstance.js";
import "../public/intro.css";
import CampaignStatement from "./campaign/CampaignStatement.jsx";
import ProjectSection from "./ProjectSection.jsx";
import NextSteps from "./NextSteps.jsx";
import ScreenSizeHint from "./ScreenSizeHint.jsx";
//1901 change the h1s positioning css.
//the local deployment works with serve,but with heroku not yet
//heroku logs --tail -a passtilliostest1
// "start": "node app/index.js"
//https://github.com/HalehEsmaeili/passtilliosRepository
//heroku git:remote -a passtilliosfrontendtest
//vids
//import teamHeaderVid from "../public/video/teamGif.gif";

import bobVid from "../public/images/nextSteps/28.mp4";
import showMeImgLine from "../public/images/nextSteps/showMeSec.png";
import Button from "./Button.js";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useAnimate,
  useAnimationControls,
} from "framer-motion";
import Highlighted from "../components/Highlighted.js";
import useWindowDimensions from "./useWindowDimensions.js";
import logo from "../public/images/logo.png";

/////your life as a painting

/////bubbles for lets go
import l from "../public/images/bubbles/7.png";
import e from "../public/images/bubbles/8.png";
import t from "../public/images/bubbles/9.png";
import ss from "../public/images/bubbles/10.png";
import g from "../public/images/bubbles/11.png";
import o from "../public/images/bubbles/12.png";
import zeichen from "../public/images/bubbles/13.png";
/////bubbles for color splashes

import bubble1 from "../public/images/EmptyBubbles/1.png";
import bubble2 from "../public/images/EmptyBubbles/2.png";
import bubble3 from "../public/images/EmptyBubbles/3.png";
import bubble4 from "../public/images/EmptyBubbles/4.png";
import bubble5 from "../public/images/EmptyBubbles/5.png";
import bubble6 from "../public/images/EmptyBubbles/6.png";
import bubble7 from "../public/images/EmptyBubbles/7.png";
import bubble8 from "../public/images/EmptyBubbles/8.png";
////////color splashes for the bubbles
import splash1 from "../public/images/colorSplash/9.png";
import splash2 from "../public/images/colorSplash/5.png";
import splash3 from "../public/images/colorSplash/11.png";
import splash4 from "../public/images/colorSplash/12.png";
import splash5 from "../public/images/colorSplash/13.png";

import splash9 from "../public/images/colorSplash/7.png";
import splash10 from "../public/images/colorSplash/2.png";
import splash11 from "../public/images/colorSplash/3.png";

////////intro images
import introSpice from "../public/images/Intro/spiceIntro.png";
import magicLeft from "../public/images/Intro/43.png";
import magicRight from "../public/images/Intro/44.png";
//////////greydiv imports
import greyDown from "../public/images/greyDivGrey/1.png";
import greyUP from "../public/images/greyDivGrey/2.png";


function IntroParallax() {
  const text =
    "Imagine a world painted only in shades of gray, where only black and white call the shots. It's a place without the cozy warmth of lively colors.In this imaginary place, our eyes reveal emptiness, echoing the loneliness inside. The once-fiery passion in hearts, eager to use their unique colors to make a beautiful difference on our collective canvas of life, now flickers, struggling to survive in a world that only wants us to be either black or white.Creativity and inspiration take a backseat. Life in this gray and expected canvas feels like a broken record, missing the beat of unpredictability that makes it exciting and dance-worthy!";

  const [scrollToGreyActive, setScrollToGreyActive] = useState(false);
  const [scrollToNextStepsActive, setScrollToNextStepsActive] = useState(false);
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const [logoAnimationTodiv4Compelete, setLogoAnimationTodiv4Compelete] =
    useState(false);
  const [broMovingToNextSteps, setBroMovingToNextSteps] = useState(false);

  const [greyScrolled, setGreyScrolled] = useState(false);

  const [isGreyContentVisible, setGreyContentVisible] = useState(false);

  const [startNextStepAnimation, setStartNextStepAnimation] =
    useState(false);

  const [h1moved, setH1Moved] = useState(false);
  const [greyDustPositionX, setGreyDustPositionX] = useState(500);
  const [scope, animate] = useAnimate();
  const [img1, animateimg1] = useAnimate();
  const [img2, animateimg2] = useAnimate();
  const [img3, animateimg3] = useAnimate();

  const [visibletime, setvisible] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isnextArrowClickable, setIsNextArrowClickable] = useState(true);

  ///////////refs and useinview aniamtion set up

  const div0 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const finalWordsDiv = useRef(null);
  const divNextSteps = useRef(null);
  const nextStepBodyContainerRef = useRef(null);
  const isInViewdivNextStep = useInView(divNextSteps, { amount: 0.7 });

  const greydiv = useRef(null);

  const magicContainerRef = useRef(null);
 
  const campaignImgRef = useRef(null);
  
  const isInViewCampaignImg = useInView(campaignImgRef, {
    once: true,
    amount: 0.7,
  });
  const isInViewMagicContainerRef = useInView(magicContainerRef, {
    once: true,
    amount: 0.3,
  });

  const isInViewGreyTxt = useInView(greydiv, { once: true, amount: 0.1 });

  //const isInViewdiv0=useInView(div0, {once:true});
  //const isInViewDivGrey=useInView(greydiv, {once:true});
  const isInViewdiv2 = useInView(div2, { once: true, amount: 1 });
  const isInViewdiv3 = useInView(div3, { once: true, amount: 0.8 });
  const isInViewdiv0= useInView(div0, { once: true, amount: 0.2 });
  //const [isHovered,handleHover]=useHover();
  ///////dont let grey take over
  const dontAnim = useAnimationControls();
  const letAnim = useAnimationControls();
  const greyAnim = useAnimationControls();
  const takeAnim = useAnimationControls();
  const overAnim = useAnimationControls();
  ////////////////////////animation controls

  const greyCloudControl = useAnimationControls();
  const greyCloudDownControl = useAnimationControls();
  const introLogoControl = useAnimationControls();
  const greyToAnimate = useAnimationControls();
 
  ////bubble attack

  const splash1Controls = useAnimationControls();
  const splash2Controls = useAnimationControls();
  const splash3Controls = useAnimationControls();
  const splash4Controls = useAnimationControls();
  const splash5Controls = useAnimationControls();
  
  //////

  const nextButtonControls = useAnimationControls();

  /////////////////controls for bubbles
  ///lets go bubbles
  const lControls = useAnimationControls();
  const eControls = useAnimationControls();
  const tControls = useAnimationControls();
  const sControls = useAnimationControls();
  const gControls = useAnimationControls();
  const oControls = useAnimationControls();
  const zeichenControls = useAnimationControls();
  ////color bubbles
  const b1Controls = useAnimationControls();
  const b2Controls = useAnimationControls();
  const b3Controls = useAnimationControls();
  const b4Controls = useAnimationControls();
  const b5Controls = useAnimationControls();
  const b6Controls = useAnimationControls();
  const b7Controls = useAnimationControls();
  const b8Controls = useAnimationControls();
  const b9Controls = useAnimationControls();
  const b10Controls = useAnimationControls();
  const b11Controls = useAnimationControls();
  const b12Controls = useAnimationControls();
  const b1EmptyControls = useAnimationControls();
  const b2EmptyControls = useAnimationControls();
  const b5EmptyControls = useAnimationControls();
  const b9EmptyControls = useAnimationControls();
  const b10EmptyControls = useAnimationControls();
  const b11EmptyControls = useAnimationControls();

  const animateMagicContainer = useAnimationControls();
  const animateMagic = useAnimationControls();
  const logoLineAnimation = useAnimationControls();

  const campaignImgAnimation = useAnimationControls();
  /*
  const[animateimg1,setimg1animate]=useState(false);
  const[animateimg2,setimg2animate]=useState(true);
  const[animateimg3,setimg3animate]=useState(false);
  */

  const [headers, setHeaders] = useState(null);
  const [texts, setTexts] = useState(null);

  const [headers2, setHeaders2] = useState(null);
  const [texts2, setTexts2] = useState(null);

  //////////////////////animation functions

  useEffect(() => {
    axiosInstance.get(`/api/content/sections/${1}/${2}`)
      .then((response) => {
        console.log("responsoe for grey");
        console.log(response.data.sections);
        //response.data.sections.section_title;
        setHeaders(response.data.sections.header_contents);
        setTexts(response.data.sections.text_contents);

        //console.log(response.data.sections);
        //setSectionData(response.data.sections);
      })
      .catch((error) => {
        console.error("Error retrieving section data:", error);
        // Handle error
      });

    ///fetch texts for the grey 2
    axiosInstance
      .get(`/api/content/sections/${1}/${3}`)
      .then((response) => {
        console.log("responsoe for grey");
        console.log(response.data.sections);
        //response.data.sections.section_title;
        setHeaders2(response.data.sections.header_contents);
        setTexts2(response.data.sections.text_contents);
      })
      .catch((error) => {
        console.error("Error retrieving section data:", error);
        // Handle error
      });
  }, []);

  
  useEffect(() => {
    const svgLineAnim = async () => {
      // animateMagicContainer.start({scale:[1,1.2,1],rotate:[0,30,0,-30,0,20,0,-20,0], transition:{delay:.2,type:"yoyo"}});
     try{
      await logoLineAnimation.start({
        pathLength: 1,
        transition: { delay: 3, duration: 3, transition: { stiffness: 2 } },
      });
    }catch{

    }
    };
    if (scrollToGreyActive) {
      svgLineAnim();
    }
  }, [isInViewGreyTxt, scrollToGreyActive]);

  useEffect(() => {
    if (isInViewMagicContainerRef) {
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
      }catch{


      }
      
      };
      spiceAnim();
    }
  }, [isInViewMagicContainerRef]);

  useEffect(() => {
    if (isInViewdiv3) {
      
      nextButtonControls.start({
        opactity: 1,
        left: ["-10%", "92%", "82%"],
        transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
      });
    }
  }, [isInViewdiv3]);

  useEffect(() => {
    if (scrollToGreyActive) {
      const bubbleBurstAnim = async () => {
        try{
        b2Controls.start({
          left: "85%",
          top: "120%",
          transition: { stiffness: 0.1, duration: 5 },
        });
        b5Controls.start({
          left: "-17%",
          top: "10%",
          x: ["-5vw", "16vw"],
          y: ["10vw", "28vw"],
          transition: { delay: 1, stiffness: 0.1, duration: 5 },
        });
        b10Controls.start({
          left: "-10%",
          top: "-34%",
          transition: { zIndex: 100000, delay: 4, stiffness: 0.1, duration: 5 },
        });
        b9Controls.start({
          left: "78%",
          top: "-18%",
          transition: { delay: 1.3, stiffness: 0.1, duration: 9 },
        });

        await b11Controls.start({
          left: "15%",
          top: "-42%",
          transition: { stiffness: 1, duration: 5 },
        });

        b11EmptyControls.start({
          scale: 6,
          opacity: 0,
          transition: { duration: 0.1 },
        });

        await splash5Controls.start({ scale: 6, transition: {} });
        dontAnim.start({ opacity: 1 });

        b2EmptyControls.start({
          scale: 6,
          opacity: 0,
          transition: { delay: 1, duration: 0.1 },
        });
        await splash2Controls.start({
          opacity: 1,
          scale: 5.5,
          transition: { delay: 1 },
        });
        letAnim.start({ opacity: 1 });

        b5EmptyControls.start({
          scale: 6,
          opacity: 0,
          transition: { delay: 0.5, duration: 0.1 },
        });
        await splash1Controls.start({ scale: 4.5, transition: { delay: 0.5 } });
        greyAnim.start({ opacity: 1 });

        b10EmptyControls.start({
          scale: 10,
          opacity: 0,
          transition: { delay: 2, duration: 0.1 },
        });
        await splash4Controls.start({ scale: 6.5, transition: { delay: 2 } });
        takeAnim.start({ opacity: 1 });

        b9EmptyControls.start({
          scale: 6,
          opacity: 0,
          transition: { delay: 0.5, duration: 0.1 },
        });
        await splash3Controls.start({ scale: 6, transition: { delay: 0.5 } });
        overAnim.start({ opacity: 1 });

      }catch{
        console.log("haaaaaaaaaaaaaaaaaaaaah");
      }

      };
      bubbleBurstAnim();
    }
  }, [scrollToGreyActive]);

  
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

  const handleClickOfNext = (e) => {};
  const handleScrollToDivgrey = (e) => {
    setBroMovingToNextSteps(true);
    setScrollToGreyActive(true);
    // Access the current property of the ref to get the DOM element

    const element = greydiv.current;

    // Check if the element exists before scrolling
    if (element) {
      // Use the scrollIntoView method to scroll to the element
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
          duration: 6000,
        });
      }, 0);
    }
  };

  const { scrollYProgress: s } = useScroll();
  const { scrollYProgress: divFinalWordsScroll } = useScroll({
    target: finalWordsDiv,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(s, "change", (latest) => {
    if (isInViewGreyTxt) {
      setGreyScrolled(true);
    }
  });
  useMotionValueEvent(divFinalWordsScroll, "change", (latest) => {
    // && scope.current.offsetTop==h1refPainting.current.offsetTop
    // && controlslogo.get("y")===3
  });

  //if the div 2 is hovered over start the bro animation
  /*
  const handleDiv2HoverStart = () => {
    // console.log("introAnimmmmmmmm"+introAnimationComplete);
    if (introAnimationComplete) {
      div2.current.removeEventListener("mouseover", handleDiv2HoverStart);
      //  console.log("we areeeeeee innnn"+introAnimationComplete);
      broAnim().then(() => setAnimationComplete(true));
    }
  };
*/
 /*
  const logoAnimationToNextSteps = async () => {
    controlsSecondPerson.start({ opacity: 0, transition: { duration: 0.3 } });
    await controlslogo.start({ opacity: 0, transition: { duration: 0.3 } });

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

    return;
  };
  */

  /////////useEffectSection
  useEffect(() => {
    const greyAnim = async () => {
      try{
      greyCloudDownControl.start({
        x: "-15vw",
        y: "-10%",
        rotate: 20,
        scale: 1.3,
        transition: { duration: 2 },
      });
      greyCloudControl.start({
        x: "28vw",
        y: "-30%",
        rotate: -40,
        opacity: 0.5,
        scale: 1.7,
        transition: { duration: 2.5 },
      });
      b1EmptyControls.start({
        scale: 2,
        opacity: 0,
        transition: { duration: 0.01 },
      });
      b1Controls.stop();
      b1Controls.start({
        opacity: 0,
        transition: { duration: 2.3 },
      });
      await greyToAnimate.start({ opacity: 1 });
    }catch{
    
    }
    };

    if (isInViewGreyTxt && introAnimationComplete && greyScrolled) {
      setGreyContentVisible(true);
      greyAnim();
    }
  }, [isInViewGreyTxt, introAnimationComplete, greyScrolled]);

  
  useEffect(() => {
    /*
  if(isInViewdivNextStep){
    b11Controls.start({top:"1280%",left:"10%",transition:{stiffness:1,duration:2}});   
  }
   logoAnimationTodiv4Compelete &&
  */
///the conditiong right now is trivializing the scrollToNextStepsActive->dependebility on the button being pressed!
 /**
  *  (isInViewdivNextStep &&
      scrollToNextStepsActive &&
      !startNextStepAnimation)|| (isInViewdivNextStep &&
        !startNextStepAnimation)
  */

if (
      isInViewdivNextStep &&
      scrollToNextStepsActive &&
      !startNextStepAnimation
    ) {
      console.log("im in setting it to true!!!!!!!!!!!!!!!");
      setStartNextStepAnimation(true);
   
    }
  }, [
    isInViewdivNextStep,
    logoAnimationTodiv4Compelete,
    scrollToGreyActive,
    scrollToNextStepsActive,
    startNextStepAnimation,
  ]);
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
   /*
  useEffect(() => {
 
    const introAnim = async () => {
      //console.log("introAnim started");
      //await introLogoControl.start({x:"-30vw",transition:{delay:1,stiffness:700}});
  
      await introLogoControl.start({
        y: ["0%", "-20%"],
        transition: { delay: 2, type: "spring", stiffness: 100, duration: 0.06 },
      });
      //setletsgoBubbleShow(()=>{true});
      //console.log("set bubbbble"+letsGoBubbleShow);
      lControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      eControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      tControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      sControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      gControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      oControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      await zeichenControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      });
      ///colorful bubblessss animation
  
      b1Controls.start({
        x: ["-.3vw", "0vw", "-.3vw"],
        y: [".3vh", "0vh", ".3vh"],
        transition: { type: "yoyo", repeat: Infinity, duration: 3 },
      });
      b2Controls.start({
        top: "-100%",
        left: "70%",
        transition: { type: "spring", stiffness: 22, duration: 0.2 },
      });
  
      b3Controls.start({
        opacity: 1,
        top: "40%",
        left: "45%",
        transition: { type: "spring", stiffness: 17, duration: 0.2 },
      });
  
      b4Controls.start({
        opacity: 1,
        top: "60%",
        left: "-70%",
        transition: { type: "spring", stiffness: 15, duration: 0.2 },
      });
  
      b5Controls.start({
        opacity: 1,
        top: "10%",
        left: "70%",
        transition: { type: "spring", stiffness: 20, duration: 0.2 },
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
      /*
      b1Controls.start({
        top: "11%",
        left: "7%",
        transition: { type: "spring", stiffness: 14, duration: 0.1 },
      });
      lControls.start({
        opacity: 1,
        top: "-200%",
        left: "-5%",
        scale: 1.5,
        transition: { type: "spring", stiffness: 10, duration: 0.9 },
      });
      eControls.start({
        top: "-200%",
        left: "0%",
        opacity: 1,
  
        scale: 1.4,
        transition: { type: "spring", stiffness: 9.5, duration: 0.9 },
      });
      tControls.start({
        opacity: 1,
        top: "-200%",
        left: "5%",
        scale: 1.3,
        transition: { type: "spring", stiffness: 9, duration: 0.9 },
      });
      sControls.start({
        opacity: 1,
        top: "-200%",
        left: "10%",
        scale: 1.2,
        transition: { type: "spring", stiffness: 8.5, duration: 0.9 },
      });
      gControls.start({
        opacity: 1,
        top: "-130%",
        left: "15%",
        transition: { type: "spring", stiffness: 7.8, duration: 0.5 },
      });
      oControls.start({
        opacity: 1,
        top: "-130%",
        left: "20%",
        transition: { type: "spring", stiffness: 7.2, duration: 0.5 },
      });
      zeichenControls.start({
        opacity: 1,
        top: "-100%",
        left: "25%",
        transition: { type: "spring", stiffness: 6.8, duration: 0.2 },
      });
  
      await introLogoControl.start({
        y: "10000%",
        transition: { type: "spring", stiffness: 100, duration: 0.02 },
      });
      introLogoControl.start({
        opacity: 0,
        transition: { duration: 0.02 },
      });
  
      setIntroAnimationComplete(true);
    
    };

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

  
    // Cleanup function to clear the timeout in case the component unmounts before the timeout
    return () => {
      //clearTimeout(timeoutId);
    
    };
  }, []);

    */


  useEffect(() => {
  
    const introAnim = async () => {
      try {
        
     await  introLogoControl.start({
        y: ["10%","-26%"],
        transition: { delay: 1, type: "spring", stiffness: 100, duration: .05 },
      });
      await introLogoControl.start({
        y: "10000%",
        transition: {  delay: -.9,type: "spring", stiffness: 100, duration: 0.02 },
      });
      await introLogoControl.start({
        opacity: 0,
        transition: { duration: 0.02 },
      });
      setIntroAnimationComplete(true);
      //setletsgoBubbleShow(()=>{true});
      //console.log("set bubbbble"+letsGoBubbleShow);
      await Promise.all([
      
      lControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
      eControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
      tControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
      sControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
      gControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
      oControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
    zeichenControls.start({
        opacity: 1,
  
        transition: { duration: 0.001 },
      }),
      ///colorful bubblessss animation
  
    
      b2Controls.start({
        top: "-100%",
        left: "70%",
        transition: { type: "spring", stiffness: 22, duration: 0.2 },
      }),
  
      b3Controls.start({
        opacity: 1,
        top: "40%",
        left: "45%",
        transition: { type: "spring", stiffness: 17, duration: 0.2 },
      }),
  
      b4Controls.start({
        opacity: 1,
        top: "60%",
        left: "-70%",
        transition: { type: "spring", stiffness: 15, duration: 0.2 },
      }),
  
      b5Controls.start({
        opacity: 1,
        top: "10%",
        left: "70%",
        transition: { type: "spring", stiffness: 20, duration: 0.2 },
      }),
      b1Controls.start({
        top: "11%",
        left: "7%",
        transition: { type: "spring", stiffness: 14, duration: 0.1 },
      }),
  
      /*
    b8Controls.start({
      opacity:1,
      top:"260%",
      left:"60%",
      transition:  {type:"spring",stiffness:8,duration:.2}
    });
  */
      /////
     
      lControls.start({
        opacity: 1,
        top: "-200%",
        left: "-5%",
        scale: 1.5,
        transition: { type: "spring", stiffness: 10, duration: 0.9 },
      }),
      eControls.start({
        top: "-200%",
        left: "0%",
        opacity: 1,
  
        scale: 1.4,
        transition: { type: "spring", stiffness: 9.5, duration: 0.9 },
      }),
      tControls.start({
        opacity: 1,
        top: "-200%",
        left: "5%",
        scale: 1.3,
        transition: { type: "spring", stiffness: 9, duration: 0.9 },
      }),
      sControls.start({
        opacity: 1,
        top: "-200%",
        left: "10%",
        scale: 1.2,
        transition: { type: "spring", stiffness: 8.5, duration: 0.9 },
      }),
      gControls.start({
        opacity: 1,
        top: "-130%",
        left: "15%",
        transition: { type: "spring", stiffness: 7.8, duration: 0.5 },
      }),
      oControls.start({
        opacity: 1,
        top: "-130%",
        left: "20%",
        transition: { type: "spring", stiffness: 7.2, duration: 0.5 },
      }),
    zeichenControls.start({
        opacity: 1,
        top: "-100%",
        left: "25%",
        transition: { type: "spring", stiffness: 6.8, duration: 0.2 },
      })
  
  
    ]);


    /*
      b1Controls.start({
        x: ["-.3vw", "0vw", "-.3vw"],
        y: [".3vh", "0vh", ".3vh"],
        transition: { type: "yoyo", repeat: Infinity, duration: 3 },
      }),
    */
      //setIntroAnimationComplete(true);
      }catch{
      
      }
    };
   

   introAnim();

    // Cleanup function to clear the timeout in case the component unmounts before the timeout
    return () => {
      //clearTimeout(timeoutId);
      introLogoControl.stop();
      lControls.stop();
      eControls.stop();
      tControls.stop();
      sControls.stop();
      gControls.stop();
      oControls.stop();
      zeichenControls.stop();
      b1Controls.stop();
      b2Controls.stop();
      b3Controls.stop();
      b4Controls.stop();
      b5Controls.stop();
   
    };
  }, []);
  //border:"2px solid yellow"
  return (
    <div
      style={{ overflowY: "hidden", maxHeight: "fit-content", marginBottom: 0 }}
    >
      <motion.div ref={div0} className="div0">
        <motion.div className="bubbleContainerIntro" animate={b3Controls}>
          <motion.img
            className="emptyBubble"
            src={bubble3}
            alt="b3"
          ></motion.img>
          <motion.img
            className="colorSplash"
            src={splash3}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

        <motion.div className="bubbleContainerIntro" animate={b4Controls}>
          <motion.img
            className="emptyBubble"
            src={bubble4}
            alt="b4"
          ></motion.img>
          <motion.img
            className="colorSplash"
            src={splash4}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

        <div
          className={
            scrollToGreyActive
              ? "bufferForItIsDamnTime-afterClick"
              : "bufferForItIsDamnTime-beforClick"
          }
        >
          <motion.img
            src={logo}
            initial={{ y:"0%" }}
            style={{ scale: 1.3, marginBottom: "5%" }}
            animate={introLogoControl}
            alt="logo"
          ></motion.img>
          <motion.h1
            id="h1Intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "yoyo" }}
          >
            ITS ABOUT DAMN TIME WE INFUSE SOME MAGIC AND SPICE INTO OUR LIVES!
          </motion.h1>

          <motion.img
            className="bubbles"
            src={l}
            animate={lControls}
            alt="l"
          ></motion.img>
          <motion.img
            className="bubbles"
            src={e}
            animate={eControls}
            alt="e"
          ></motion.img>
          <motion.img
            className="bubbles"
            src={t}
            animate={tControls}
            alt="t"
          ></motion.img>
          <motion.img
            className="bubbles"
            src={ss}
            animate={sControls}
            alt="s"
          ></motion.img>
          <motion.img
            className="bubbles"
            src={g}
            animate={gControls}
            alt="g"
          ></motion.img>
          <motion.img
            className="bubbles"
            src={o}
            animate={oControls}
            alt="o"
          ></motion.img>
          <motion.img
            className="bubbles"
            src={zeichen}
            animate={zeichenControls}
            alt="zeichen"
          ></motion.img>

          <div ref={magicContainerRef} className="magicContainer">
            <motion.img
              className="grid-item-spice"
              src={introSpice}
              initial={{ opacity: 1 }}
              animate={animateMagicContainer}
              alt="spice"
            ></motion.img>
            <motion.img
              className="grid-item-magicLeft"
              initial={{ opacity: 0 }}
              animate={animateMagic}
              src={magicLeft}
              alt="magicLeft"
            ></motion.img>
            <motion.img
              className="grid-item-magicRight"
              initial={{ opacity: 0 }}
              animate={animateMagic}
              src={magicRight}
              alt="magicRight"
            ></motion.img>
          </div>
        </div>
      </motion.div>

      {/**
<video id="yourcolorsVid"  autoplay="autoplay" muted loop> <source src={teamHeaderVid} type="image/gif"></source>  </video> 
*/}

      <CampaignStatement pageId={1} sectionId={1} />

      <motion.div className="divGrey" ref={greydiv}>
        <motion.div className="bubbleContainerGrey" animate={b1Controls}>
          <motion.img
            className="emptyBubble"
            animate={b1EmptyControls}
            src={bubble1}
            alt="b1"
          ></motion.img>
          <motion.img
            className="colorSplash"
            src={splash1}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

        <motion.div className="bubbleContainerGrey" animate={b2Controls}>
          <motion.img
            className="emptyBubble"
            animate={b2EmptyControls}
            src={bubble2}
            alt="b2"
          ></motion.img>
          <motion.img
            className="colorSplash"
            initial={{ zIndex: 0, scale: 0.7, opacity: 0.8 }}
            animate={splash2Controls}
            src={splash2}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

        <motion.div
          className="bubbleContainerGrey"
          initial={{ zIndex: 4000000 }}
          animate={b5Controls}
        >
          <motion.img
            className="emptyBubble"
            animate={b5EmptyControls}
            src={bubble5}
            alt="b5"
          ></motion.img>
          <motion.img
            className="colorSplash"
            animate={splash1Controls}
            src={splash5}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

        {/**
<motion.div className="bubbleContainerGrey" animate={b7Controls}>
          <motion.img
            className="emptyBubble"
            src={bubble7}
            alt="b4"
          ></motion.img>
          <motion.img
            className="colorSplash"
            src={splash7}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

 <motion.div className="bubbleContainerGrey" animate={b6Controls}>
          <motion.img
            className="emptyBubble"
            src={bubble6}
            alt="b6"
          ></motion.img>
          <motion.img
            className="colorSplash"
            src={splash6}
            alt="colorSplash"
          ></motion.img>
        </motion.div>


<motion.div className="bubbleContainerGrey" animate={b8Controls}>
          <motion.img
            className="emptyBubble"
            src={bubble8}
            alt="b4"
          ></motion.img>
          <motion.img
            className="colorSplash"
            src={splash8}
            alt="colorSplash"
          ></motion.img>
        </motion.div>

 */}

        <motion.img
          id="greyUP"
          src={greyUP}
          alt="grey cloud"
          animate={greyCloudControl}
        ></motion.img>
        <motion.img
          id="greyDown"
          src={greyDown}
          alt="grey cloud"
          animate={greyCloudDownControl}
        ></motion.img>
        <motion.img
          id="greyDown2"
          src={greyDown}
          alt="grey cloud"
          animate={greyCloudDownControl}
        ></motion.img>

        {!scrollToGreyActive ? (
          <div className="divGreyContent">
            <div className="GridItemGreyTitle">
              {headers ? (
                <h1 id="greyy">{headers[0]}</h1>
              ) : (
                <h1 id="greyy">THE GREY EPIDEMIC</h1>
              )}
            </div>
            {/**<Highlighted
                  text={texts[0]}
                  highlight="Imagine unique colors"
                /> */}
            <div className="GridItemGreyText">
              {texts ? (
                <p className="greyTxt">
                 {texts[0]}
                </p>
              ) : (
                ""
              )}
              {/** <Highlighted text={text} highlight="Imagine unique colors" /> */}
            </div>
          </div>
        ) : (
          <div>
            <div className="secondGreyHeaderContainer">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={dontAnim}
                className="secondGreyHeader"
              >
                Don't
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={letAnim}
                className="secondGreyHeader"
              >
                let
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={greyAnim}
                className="secondGreyHeader"
              >
                grey
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={takeAnim}
                className="secondGreyHeader"
              >
                take
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={overAnim}
                id="over"
                className="secondGreyHeader"
              >
                over...
              </motion.h1>
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
      <div className="div2Bubblecontainer">
        {scrollToGreyActive ? (
          <div className="logoSvgLineContainer" ref={finalWordsDiv}>
            <svg
              className="greyDivSvg"
              preserveAspectRatio="xMinYMin meet"
              viewBox="0 0 22 415"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 9"
                d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333333 11 0.333333C5.10896 0.333333 0.333333 5.10896 0.333333 11ZM0.333333 403.5C0.333333 409.391 5.10896 414.167 11 414.167C16.891 414.167 21.6667 409.391 21.6667 403.5C21.6667 397.609 16.891 392.833 11 392.833C5.10896 392.833 0.333333 397.609 0.333333 403.5ZM9 11V403.5H13V11H9Z"
                fill="url(#paint0_linear_20_2)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_20_2"
                  x1="860.5"
                  y1="-931"
                  x2="860.5"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F8A813" />
                  <stop offset="0.741319" stop-color="#D146BF" />
                  <stop offset="0.840277" stop-color="#00EEB9" />
                  <stop offset="0.970486" stop-color="#F8A813" />
                </linearGradient>
              </defs>
            </svg>
            {texts2 ? (
              <p>{texts2[0]}</p>
            ) : (
              <p className="secondGreyTxtp">
                Instead how about we embrace the true charm of grey? I believe
                it's about time we guide it back to being the background color;
                the perfect backdrop where vibrant and unique colors can take
                the lead as the main storytellers in the painting of our lives!
              </p>
            )}

            <div className="passtilliosSvgContainer">
              {headers2 ? (
                <h1 id="onSvgtxt1">{headers2[0]}</h1>
              ) : (
                <h1 id="onSvgtxt1">but for this to work</h1>
              )}
              {headers2 ? (
                <h1 id="onSvgtxt2">{headers2[1]}</h1>
              ) : (
                <h1 id="onSvgtxt2">we need to work together</h1>
              )}

              <svg
                className="logoSvgLine"
                viewBox="0 0 237 3839"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={logoLineAnimation}
                  id="logoLine"
                  d="M117.709 1716.07C116.646 1705.96 120.18 480.085 120.18 261.53C98.3879 242.579 23.9554 192.971 60.9991 244.251C84.6933 277.051 87.5753 277.694 120.18 313.925C130.629 325.535 218.33 137.789 120.18 233.661C-120 -174.5 179.494 100.697 217.5 15.4999C217.5 15.4999 120.18 144 29 15.4999M117.709 1716.07C122.493 1706.6 143.329 1683.21 158.636 1682.32C177.771 1681.2 178.303 1690.12 215.509 1672.84C256.6 1653.76 223.908 1691.46 197.969 1696.81C184.15 1691.79 155.341 1684.77 150.664 1696.81C144.817 1711.86 128.871 1730.81 96.4482 1703.5C64.0253 1676.19 74.6558 1697.93 54.4579 1700.71C34.26 1703.5 11.936 1690.68 3.43164 1682.32C-5.07274 1673.96 26.2871 1701.83 45.422 1696.81C64.5568 1691.79 80.5025 1671.73 100.169 1686.22C119.835 1700.71 116.646 1705.96 117.709 1716.07ZM117.709 1716.07C118.772 1726.19 84.7547 1733.04 61.3677 1732.48C55.7438 1732.35 50.3965 1731.64 45.422 1730.54M45.422 1730.54C29.7098 1727.09 17.7157 1719.86 12.4675 1715.21C6.93969 1710.3 20.7947 1720.59 28.4132 1726.35C25.9328 1730.07 21.8223 1738.73 25.2241 1743.63C24.161 1741.22 23.3106 1734.71 28.4132 1728.03C32.3111 1728.4 40.6383 1729.81 42.7644 1732.48C41.8785 1738.24 42.7644 1746.98 45.422 1751.99C43.4731 1745.68 40.7446 1732.56 45.422 1730.54ZM58.3415 1732.36C57.2785 1737.74 58.3415 1749.76 62.9622 1756.45C60.659 1749.21 57.1155 1734.71 61.3677 1734.71C66.3286 1733.97 76.463 1732.48 77.3134 1732.48C78.3764 1732.48 75.7188 1744.75 80.5025 1751.99C78.0221 1746.14 74.5495 1734.04 80.5025 1732.48C87.9438 1730.54 91.6645 1728.03 93.2591 1728.03C94.8537 1728.03 90.0699 1735.83 98.5743 1746.98C95.7395 1741.77 91.3456 1730.7 96.4482 1728.03C102.827 1724.68 120.367 1709.07 120.367 1726.35C120.367 1743.63 134.718 1843.41 155.447 1835.6C167.672 1831.89 195.949 1830.81 211.257 1856.23C215.332 1864.4 217.423 1882.2 193.185 1888C162.889 1895.24 168.735 1893.57 157.042 1906.39C145.348 1919.21 136.844 1919.21 117.709 1910.29C98.5743 1901.37 94.3221 1903.6 78.908 1918.1C63.4938 1932.59 65.6199 1940.95 77.3134 1956.56C89.0069 1972.16 116.646 2014.52 215.509 2011.18C211.08 2004.31 200.414 1987.77 193.185 1976.62C184.15 1962.69 182.024 1948.75 157.042 1954.33C132.06 1959.9 130.997 1957.11 115.052 1943.18C99.1058 1929.24 67.746 1905.83 56.0525 1921.44C54.6991 1924.78 55.2495 1934.93 68.2775 1948.75C75.3645 1966.96 93.6843 2006.58 110.268 2015.5M110.268 2015.5C130.997 2026.65 138.439 2026.23 167.141 2019.54C190.103 2014.19 206.119 2010.25 211.257 2008.95C208.423 2008.39 199.032 2004.6 184.15 1993.9C165.546 1980.52 156.51 1990.56 138.97 1987.21C121.43 1983.87 121.961 1969.93 110.268 1966.59C98.5743 1963.24 71.6977 1956.56 70.9351 1950.98M110.268 2015.5L114 3751M114 3751C271.5 3751 171 3751 120.367 3835.5C61.2614 3766.38 2.72157 3751 58 3751C92.7081 3751 76.7934 3751 114 3751Z"
                  stroke="url(#paint0_linear_12_2)"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_12_2"
                    x1="113.747"
                    y1="-251.269"
                    x2="119"
                    y2="3356.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.116319" stop-color="#00EEB9" />
                    <stop offset="0.282986" stop-color="#D146BF" />
                    <stop offset="0.387152" stop-color="#F8D38E" />
                    <stop offset="0.553819" stop-color="#00EEB9" />
                    <stop offset="0.689236" stop-color="#8980BD" />
                    <stop offset="0.829861" stop-color="#EEC77C" />
                    <stop offset="1" stop-color="#D146BF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {!scrollToNextStepsActive ? (
              <Button
                id="btnNextSteps"
                name="count me in! next steps?"
                handleClick={handleScrollToDivNext}
              />
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}

        <motion.div
          initial={{ position: "absolute", top: "250%", left: "-50%" }}
          animate={b9Controls}
          className="bubbleDiv2"
        >
          <motion.img
            className="emptyBubble2"
            animate={b9EmptyControls}
            src={bubble3}
            alt="b2"
          ></motion.img>
          <motion.img
            className="colorSplash2"
            animate={splash3Controls}
            src={splash9}
            alt="colorSplash"
          ></motion.img>
        </motion.div>
        <motion.div
          initial={{
            position: "absolute",
            top: "600%",
            left: "100%",
            zIndex: 20000,
          }}
          animate={b10Controls}
          className="bubbleDiv2"
        >
          <motion.img
            className="emptyBubble2"
            animate={b10EmptyControls}
            src={bubble4}
            alt="b4"
          ></motion.img>
          <motion.img
            className="colorSplash2"
            animate={splash4Controls}
            src={splash10}
            alt="colorSplash"
          ></motion.img>
        </motion.div>
        <motion.div
          initial={{ position: "absolute", top: "1300%", left: "7%" }}
          animate={b11Controls}
          className="bubbleDiv2"
        >
          <motion.img
            className="emptyBubble2"
            animate={b11EmptyControls}
            src={bubble1}
            alt="b3"
          ></motion.img>
          <motion.img
            className="colorSplash2"
            animate={splash5Controls}
            src={splash11}
            alt="colorSplash"
          ></motion.img>
        </motion.div>
      </div>
      {!scrollToNextStepsActive ? (
        <div></div>
      ) : (
        <video muted autoPlay="autoplay" loop id="bobNextStep">
          <source src={bobVid} type="video/mp4"></source>
        </video>
      )}
      <ProjectSection
        setLogoAnimationTodiv4Compelete={setLogoAnimationTodiv4Compelete}
        broMovingToNextSteps={broMovingToNextSteps}
      />

      {/*<p id="showMeText" >heeeell yeah!</p>*/}
      <ScreenSizeHint />

      <div ref={divNextSteps} className="NextStepsContainer">
    {!scrollToGreyActive ? (
      <div className="showMeActivationDiv">
        <motion.img
          id="showMeImgLine"
          src={showMeImgLine}
          alt="showMeImgLine"
        ></motion.img>
        <motion.h1 id="showMeHeader">
          LET THE BUBBLES TALK THE FINAL TALK!
        </motion.h1>
        {/*<div style={{ border: "20px solid rgba(0, 0, 0, 0)", overflow: "visible", position: "relative" }}>
           </div>
        */}

        <Button
          id="btnLastWords"
          name="READY?"
          handleClick={handleScrollToDivgrey}
        />
      </div>
    ) : (
      <NextSteps currentStation="intro" conditionForAnimStart={startNextStepAnimation}/>
    )}
  </div>



    </div>
  );
}
export default IntroParallax;
