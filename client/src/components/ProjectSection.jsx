import React, { useEffect, useState, useRef, useHover } from "react";
import axiosInstance from "../Api/axiosInstance";
import "../public/intro.css";

//1901 change the h1s positioning css.
//the local deployment works with serve,but with heroku not yet
//heroku logs --tail -a passtilliostest1
// "start": "node app/index.js"
//https://github.com/HalehEsmaeili/passtilliosRepository
//heroku git:remote -a passtilliosfrontendtest
//vids
//import teamHeaderVid from "../public/video/teamGif.gif";


import bobpng from "../public/images/nextSteps/person2.png";
import bob from "../public/images/nextSteps/person.png";
//import Button from "./Button.js";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useAnimate,
  useAnimationControls,
} from "framer-motion";

import throatCleaning from "../public/images/broDIV2/1.png";
import poking from "../public/images/broDIV2/needle.png";
import talking from "../public/images/broDIV2/3.png";
import notTalking from "../public/images/broDIV2/2.png";
import schirm from "../public/images/broDIV2/schirm.png";
import logo from "../public/images/logo.png";

/////your life as a painting

import bubble1 from "../public/images/EmptyBubbles/1.png";
import bubble2 from "../public/images/EmptyBubbles/2.png";
import bubble3 from "../public/images/EmptyBubbles/3.png";

////////intro images

///////////greyDiv imports end
import logoBeforPush from "../public/images/logoHandLeg/4.png";
import logoAfterPush from "../public/images/logoHandLeg/5.png";
//////////////imports div0 rainbow

import colorSplash from "../public/images/layoutPart1/paintsplashReal.png";
////div4 and div5 imports

function ProjectSection(props) {

 const [headers,setHeaders]=useState();
 const [texts,setTexts]=useState();

  const text =
    "Imagine a world painted only in shades of gray, where only black and white call the shots. It's a place without the cozy warmth of lively colors.In this imaginary place, our eyes reveal emptiness, echoing the loneliness inside. The once-fiery passion in hearts, eager to use their unique colors to make a beautiful difference on our collective canvas of life, now flickers, struggling to survive in a world that only wants us to be either black or white.Creativity and inspiration take a backseat. Life in this gray and expected canvas feels like a broken record, missing the beat of unpredictability that makes it exciting and dance-worthy!";
  const whatPaintingRef = useRef(null);
  const [scrollToGreyActive, setScrollToGreyActive] = useState(false);
  const [scrollToNextStepsActive, setScrollToNextStepsActive] = useState(false);

  const [broAnimHasStarted, setBroAnimHasStarted] = useState(false);
  const [div3AnimHasStarted, setDiv3HasStarted] = useState(false);
  const [logoAnimationTodiv4HasStarted, setLogoAnimationTodiv4HasStarted] =
    useState(false);
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const [logoAnimationTodiv4Compelete, setLogoAnimationTodiv4Compelete] =
    useState(false);
  const [mouseOnDiv2, setMouseOnDiv2] = useState(false);
  const [letsGoBubbleShow, setletsgoBubbleShow] = useState(false);
  const [greyScrolled, setGreyScrolled] = useState(false);

  //const { scrollYProgress } = useScroll();
  //<motion.img variants={brovariant} animate="visible"  src={require ("../public/images/logo.png")} alt="logo" ></motion.img>
  const [isGreyContentVisible, setGreyContentVisible] = useState(false);

  const [animationComplete, setAnimationComplete] = useState(false);
  const [broAnimationComplete, setBroAnimationComplete] = useState(false);
  const [nextStepAnimationStarted, setNextStepAnimationStarted] =
    useState(false);

  const [scope, animate] = useAnimate();
  const [img1, animateimg1] = useAnimate();
  const [img2, animateimg2] = useAnimate();
  const [img3, animateimg3] = useAnimate();


  const [scrolled, setScrolled] = useState(false);
  const [isnextArrowClickable, setIsNextArrowClickable] = useState(true);

  ///////////refs and useinview aniamtion set up
  const h1refPainting = useRef(null);
  const div0 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);

  const handPoking = useRef(null);

  //const isInViewdivNextStep=useInView(divNextSteps,{ amount:.7});
  // const isInViewdivNextStepBody=useInView(nextStepBodyContainerRef,{once:true, amount:.4});
  //const isInViewdiv0=useInView(div0, {once:true});
  //const isInViewDivGrey=useInView(greydiv, {once:true});
  const isInViewdiv2 = useInView(div2, { once: true, amount: 1 });
  const isInViewdiv3 = useInView(div3, { once: true, amount: 0.4 });
  const isInViewdiv4 = useInView(div4, { once: true, amount: 0.2 });

  //const [isHovered,handleHover]=useHover();
  ///////dont let grey take over

  ////////////////////////animation controls
  const controls = useAnimationControls();
  const controlsimg2 = useAnimationControls();
  const controlsimg3 = useAnimationControls();
  const controlsHand = useAnimationControls();
  const controlslogo = useAnimationControls();
  const controlsBroDialog = useAnimationControls();

  const firstrainbowControl = useAnimationControls();
  const secondrainbowControl = useAnimationControls();
  const paintingH1Control = useAnimationControls();
  const rainbowSvgControl = useAnimationControls();
  const rainbowSvgControl2 = useAnimationControls();
  const controlsschirm = useAnimationControls();
  const colorSplashControl = useAnimationControls();

  const controlslogoImage = useAnimationControls();
  const controlsSecondPerson = useAnimationControls();

  const controlsSecondPersonTalking = useAnimationControls();
  ////bubble attack
  const bubbleForLogoControls = useAnimationControls();

  const controlsLogoAfterPush = useAnimationControls();
  const controlsLogoBeforPush = useAnimationControls();
  //////
  const oneCrazyProject = useAnimationControls();
  const controlsMemories = useAnimationControls();
  const controlsAtATime = useAnimationControls();
  const nextButtonControls = useAnimationControls();
  const atATimeSlideControls = useAnimationControls();

  /////////////////controls for bubbles

  const b6Controls = useAnimationControls();
  const b7Controls = useAnimationControls();

  const b9Controls = useAnimationControls();
  const b10Controls = useAnimationControls();

  const controlsHandSVG = useAnimationControls();
  const storyTimeControls = useAnimationControls();
  const oneInOnePaintingCotrols = useAnimationControls();

  /*
    const[animateimg1,setimg1animate]=useState(false);
    const[animateimg2,setimg2animate]=useState(true);
    const[animateimg3,setimg3animate]=useState(false);
    */
  //////////////////////animation functions
  /*
useEffect(()=>{
 const whatpaintingAnim=async()=>{
  await controlsSecondPersonTalking.start({opacity:1,transition:{type:"yoyo",delay:.2,duration:.2}});  
      
 }
  if(isInViewdiv4){
    whatpaintingAnim();
  }

},[isInViewdiv4]);
*/
////fetch content

useEffect(() => {

  //////

  axiosInstance
    .get(`/api/content/sections/${props.pageId}/${props.sectionId}`)
    .then((response) => {
      //response.data.sections.section_title;
      setHeaders(response.data.sections.header_contents);
      setTexts(response.data.sections.text_contents);

      //console.log(response.data.sections);
      //setSectionData(response.data.sections);
    })
    .catch((error) => {
      console.error("Error retrieving section data for project section:", error);
      // Handle error
    });
}, []);


  ///bro moving
  useEffect(() => {
    const blendoutBroLogo = async () => {
      controlslogo.start({
        opacity: 0,
        transition: { type: "spring", stiffness: 1000, duration: 0.01 },
      });

      await controlsSecondPersonTalking.start({
        opacity: 0,
        transition: { duration: 0.01 },
      });
    };
    if (
      broAnimationComplete &&
      logoAnimationTodiv4Compelete &&
      props.broMovingToNextSteps
    ) {
      blendoutBroLogo();
    }
  }, [
    props.broMovingToNextSteps,
    broAnimationComplete,
    logoAnimationTodiv4Compelete,
  ]);


  useEffect(() => {
    if (isInViewdiv3) {
      nextButtonControls.start({
        opactity: 1,
        left: ["-10%", "92%", "82%"],
        transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
      });
    }
  }, [isInViewdiv3]);
  //const[h1Index,setH1Index]=useState(1);

  var h1Index = 1;
  const handleH1Show = async () => {
    if (isnextArrowClickable) {
      switch (h1Index) {
        case 0:
          {
            h1Index = 1;
            console.log("im in caaase here in 0");
            //setIsNextArrowClickable(false);
            await nextButtonControls.start({
              opactity: 1,
              left: ["80%", "78%", "120%"],
              transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
            });
            await nextButtonControls.start({
              opactity: 0,
              left: ["120%", "-10%"],
              transition: { duration: 0.01 },
            });
            await nextButtonControls.start({
              opactity: 1,
              left: ["-10%", "95%", "80%"],
              transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
            });
            await atATimeSlideControls.start({
              left: ["0%", "10%", "-188%"],
              transition: { duration: 0.7, type: "yoyo", ease: "easeIn" },
            });
            // await oneCrazyProject.start({opacity:1,transition:{duration:1.5,delay:.1}});
            //await oneCrazyProject.start({opacity:0,transition:{duration:.5}});
            //setIsNextArrowClickable(true);
          }

          break;
        case 1:
          {
            h1Index = 2;
            // setIsNextArrowClickable(false);
            //oneCrazyProject.start({opacity:0,transition:{duration:.01}});
            controlsMemories.start({
              opacity: 1,
              transition: { duration: 0.1 },
            });
            await nextButtonControls.start({
              opactity: 1,
              left: ["80%", "82%", "80%"],
              transition: { duration: 0.4, type: "yoyo", ease: "easeIn" },
            });
            await atATimeSlideControls.start({
              left: ["-188%", "-73%"],
              transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
            });

            // await oneCrazyProject.start({opacity:0,transition:{duration:.01}});

            //await controlsMemories.start({opacity:0,transition:{duration:.5}});

            // setIsNextArrowClickable(true);
          }
          break;
        case 2:
          {
            // setIsNextArrowClickable(false);
            h1Index = 0;
            await nextButtonControls.start({
              left: ["80%", "82%", "80%"],
              transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
            });
            //  await controlsAtATime.start({opacity:1,transition:{duration:1.2}});
            controlsMemories.start({ opacity: 0, transition: { duration: 1 } });

            await atATimeSlideControls.start({
              left: ["-73%", "0%"],
              transition: { duration: 0.5, type: "yoyo", ease: "easeIn" },
            });

            //await controlsAtATime.start({opacity:1,transition:{duration:1.5,delay:.1}});
            //await controlsAtATime.start({opacity:0,transition:{duration:.5}});
            //setIsNextArrowClickable(true);
          }
          break;
      }
    }
  };
  /*
  //if the div 2 is hovered over start the bro animation
  const handleDiv2HoverStart = () => {
    // console.log("introAnimmmmmmmm"+introAnimationComplete);
    if (introAnimationComplete) {
      div2.current.removeEventListener("mouseover", handleDiv2HoverStart);
      //  console.log("we areeeeeee innnn"+introAnimationComplete);
      broAnim().then(() => setAnimationComplete(true));
    }
  };
*/
  const logoAnimationTodiv4 = async () => {
    try {
      await oneInOnePaintingCotrols.start({
        rotate: -90,
        x: "-1vw",
        paddingRight: "3vw",
        transition: { type: "yoyo", duration: 0.3 },
      });
      await paintingH1Control.start({
        x: "10vw",
        transition: { type: "yoyo", duration: 0.3 },
      });

      await paintingH1Control.start({
        x: "-1vw",
        transition: { type: "yoyo", duration: 0.1 },
      });
      controls.start({ x: "100vw", opacity: 0 });
      await controlslogo.start({
        x: "10vw",
        transition: { type: "yoyo", duration: 0.5 },
      });
      controlslogoImage.start({
        rotate: [0, 360, 720, 0],
        transition: { duration: 1 },
      });
      controlslogo.start({
        x: ["10vw", "19vw", "24vw", "29vw", "45vw"],
        y: ["316%", "346%", "376%", "400%", "765%"],
        transition: { type: "yoyo", duration: 1 },
      });
      await controlsSecondPerson.start({
        opacity: 1,
        right: ["-80vw", "8vw", "2vw"],
        transition: { type: "yoyo", duration: 0.5 },
      });

      controlsSecondPersonTalking.start({
        opacity: 1,
        transition: { type: "yoyo", delay: 0.2, duration: 0.2 },
      });

      await oneInOnePaintingCotrols.start({
        rotate: 0,
        paddingRight: "0vw",
        transition: { type: "yoyo", duration: 0.3 },
      });
      //controlslogo.start({x:["32vw","50vw"],y:["410%","780%"],transition:{type:"yoyo",duration:.5}});
      if (!scrollToGreyActive) {
        b10Controls.start({
          left: "70%",
          top: "450%",
          transition: { stiffness: 1, duration: 5 },
        });
      }

      // await controlslogo.start({x:["34vw","36vw"],y:["500%","811%"],rotate:-20,transition:{type:"yoyo",duration:.5}});

      storyTimeControls.start({ opacity: 1, transition: { delay: 1.5 } });
      props.setLogoAnimationTodiv4Compelete(true);
      return;
    } catch {}
  };

  /////////useEffectSection
  const { scrollYProgress: s } = useScroll();
  useMotionValueEvent(s, "change", (latest) => {
    if (isInViewdiv3 && broAnimationComplete) {
      setScrolled(true);
    }
  });

  useEffect(() => {
    //startbroanimation
    const broAnim = async () => {
      try {
        if (!scrollToGreyActive) {
          b9Controls.start({
            left: "10%",
            top: "-10%",
            transition: { delay: 1, stiffness: 0.1, duration: 5 },
          });
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

        await controls.start({
          rotate: -45,
          transition: { type: "spring", stiffness: 50, duration: 0.001 },
        });
        b6Controls.start({
          opacity: 1,
          top: "500%",
          left: "10%",
          transition: { type: "spring", stiffness: 5.5, duration: 0.2 },
        });
        b7Controls.start({
          opacity: 1,
          top: "920%",
          left: "67%",
          transition: { type: "spring", stiffness: 5.5, duration: 0.2 },
        });

        await controls.start({
          rotate: 0,
          transition: { type: "spring", stiffness: 50, duration: 0.1 },
        });
        controlsschirm.start({ opacity: 1 });

        controlslogo.start({
          opacity: 1,

          transition: { type: "spring", stiffness: 1000, duration: 0.001 },
        });

        controls.start({
          rotate: 16,
          transition: { type: "spring", stiffness: 12, duration: 0.01 },
        });
        await controlslogo.start({
          y: ["1000%", "100%"],
          x: "100%",

          transition: { type: "spring", stiffness: 20, duration: 0.3 },
        });

        controlsLogoBeforPush.start({
          opacity: 1,
          transition: { duration: 1 },
        });
        await controlslogo.start({
          y: ["100%", "30%"],
          transition: { stiffness: 1, duration: 1 },
        });
        controlsLogoBeforPush.start({ opacity: 0 });
        controlsLogoAfterPush.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        await controlslogo.start({
          y: ["100%", "199%"],
          transition: { stiffness: 100, duration: 0.3 },
        });
        await controlsLogoAfterPush.start({
          opacity: 0,
          transition: { duration: 0.01 },
        });
        await controlslogo.start({
          y: ["199%", "100%"],
          transition: { stiffness: 0.01, duration: 1.5 },
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
        await controls
          .start({ opacity: 0, transition: { delay: -0.2, duration: 0.01 } })
          .catch((error) => console.error(error));

        await controlsimg2.start({ opacity: 1, x: "10vw" });
        ////delay-group 1

        await controlsimg2.start({
          opacity: 0,
          transition: { type: "Spring", duration: 0.05, stiffness: 2 },
        });
        await controlsimg3.start({ opacity: 1, transition: { duration: 0.2 } });

        controlsBroDialog.start({
          opacity: 0.3,
          left: "5%",
          top: "-20%",
          scale: 15,
          transition: { duration: 1.3, stiffness: 1 },
        });

        await controlsimg3.start({
          opacity: 0,
          transition: { delay: 0.5, duration: 0.1 },
        });

        await controls.start({ opacity: 1, transition: { delay: 0.05 } });

        controlsBroDialog.start({
          opacity: 0,
          transition: { stiffness: 0.1, delay: -0.5, duration: 1 },
        });
        ////delay-group 2
        await controlsHand.start({
          pathLength: 1,
          transition: { type: "Spring", duration: 1, stiffness: 60 },
        });
        await controlsHandSVG.start({
          left: ["22%", "10%", "23%"],
          rotate: [0, -10, 0],
          transition: { type: "Spring", duration: 0.2, stiffness: 100 },
        });
        // await  controlslogo.start({opacity:1,x:["-30vw","-30.5vw","-30vw","-30.5vw"],rotateZ:[0,10,0,10,0],transition:{type:"yoyo",duration:.5,stiffness:2}})
        await controlsHand.start({ pathLength: 0 });
        //await  controlsHandSVG.start({opacity:0});
        controlsschirm.start({ opacity: 0 });

        //  secondrainbowControl.start({opacity:0});
        /*
       if(!scrollToGreyActive){
       b9Controls.start({ left:"10%",top:"140%",transition:{delay:1,stiffness:.1,duration:5}});
       }
       */
        bubbleForLogoControls.start({
          opacity: 1,
          left: "16%",
          top: "427.5%",
          scale: 1.7,
          transition: { type: "spring", stiffness: 16, duration: 0.02 },
        });
        rainbowSvgControl2.start({ opacity: 0, pathLength: 0 });

        await firstrainbowControl.start({ rotate: -45 });

        controls.start({
          rotate: -25,
          transition: { stiffness: 6, delay: 0.7 },
        });
        await controlslogo.start({
          y: "300%",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 60,
            duration: 0.003,
          },
        });
        /*bubbleForLogoControls.stop();*/

        await controls.start({
          rotate: 0,
          transition: { delay: 1, stiffness: 5 },
        });

        await controlslogo.start({
          y: "150%",
          x: "165%",
          transition: { type: "spirng", stiffness: 600, duration: 0.25 },
        });
        await firstrainbowControl.start({ rotate: 0 });
        rainbowSvgControl2.start({ opacity: 1 });
        await rainbowSvgControl2.start({ pathLength: 1 });
        await colorSplashControl.start({ opacity: 1 });
        await bubbleForLogoControls.start({
          opacity: 0,
          scale: 7,
          transition: { type: "spring", duration: 0.06 },
        });
        controlslogo.start({
          y: "315%",
          x: "27vw",
          transition: { type: "spring", duration: 0.75 },
        });
        await controls.start({
          x: "4vw",
          transition: { type: "spring", stiffness: 150, duration: 0.002 },
        });
        setBroAnimationComplete(true);
        ///props.setBroAnimationComplete(true);
        // console.log("broanimation is compelete" + broAnimationComplete);
        return;
      } catch {
        //console.log("haaah you got caught!");
      }
    };

    if (isInViewdiv2) {
      broAnim();
    }
  }, [isInViewdiv2]);

  useEffect(() => {
    if (isInViewdiv3 && broAnimationComplete && scrolled) {
      logoAnimationTodiv4();
    }
  }, [isInViewdiv3, broAnimationComplete, scrolled]);
  //this is a useeffect for nextstep
  /*
useEffect(()=>{
 /*
 // if(isInViewdivNextStep){
  //  b11Controls.start({top:"1280%",left:"10%",transition:{stiffness:1,duration:2}});   
 // }

  
  if(isInViewdivNextStep&&logoAnimationTodiv4Compelete&&scrollToNextStepsActive&&!nextStepAnimationStarted){
    setNextStepAnimationStarted(true);
    logoAnimationToNextSteps();
  }
  
  },[isInViewdivNextStep,logoAnimationTodiv4Compelete,scrollToGreyActive,scrollToNextStepsActive,nextStepAnimationStarted]);
*/
  useEffect(() => {}, []);

  return (
    <div className="divProjectSection">
      <div className="divForLogoContainer">
        {/**
<motion.video ref={whatPaintingRef}  muted  id="personNotTalking2" initial={{opacity:0}} animate={controlsSecondPerson}    >

 <source src={whatpaintingsVid} type="video/mp4"></source>



</motion.video>
 */}

        <motion.img
          src={bobpng}
          className="personNotMoving2"
          initial={{ opacity: 0 }}
          animate={controlsSecondPersonTalking}
        ></motion.img>

        <motion.img
          src={bob}
          className="personNotTalking2"
          initial={{ opacity: 0 }}
          animate={controlsSecondPerson}
        ></motion.img>
        <motion.img
          className="emptyBubble2"
          id="bubbleForLogo"
          animate={bubbleForLogoControls}
          src={bubble3}
          alt="b2"
        ></motion.img>

        <motion.div className="div1">
          <motion.div
            className="logoContainer"
            initial={{ y: "1000%" }}
            animate={controlslogo}
            ref={scope}
          >
            <motion.img
              className="schirm"
              animate={controlsschirm}
              src={schirm}
              alt="logo"
            ></motion.img>
            <motion.img
              className="logo"
              src={logo}
              animate={controlslogoImage}
              alt="logo"
            ></motion.img>
            <motion.img
              id="logoAfterPush"
              className="logoHandLeg"
              initial={{ opacity: 0 }}
              src={logoAfterPush}
              animate={controlsLogoAfterPush}
              alt=""
            ></motion.img>
            <motion.img
              id="logoBeforPush"
              className="logoHandLeg"
              initial={{ opacity: 0 }}
              src={logoBeforPush}
              animate={controlsLogoBeforPush}
              alt=""
            ></motion.img>
          </motion.div>
        </motion.div>
      </div>

      <motion.div id="targetSection" ref={div2} className="div2">
        {/** <motion.p className="lastWordsTxt" >
How will your life look as a painting 60 years from now? Will it narrate a story of grey monotony overshadowing vibrant hues? Aim high—transform life into an epic adventure! Let the painting of your life burst with inspiring colors, vibes, and deep moments. Don't let grey take over; instead make grey  the background color to your painting ... let it be a backdrop, a stage where your unique colors shine. Ready for a wild, meaningful journey?
</motion.p>*/}

        <image src={bubble2}></image>
        <motion.h2 className="broDialog" animate={controlsBroDialog}>
          Wait...
        </motion.h2>
        {/**<motion.img ref={handPoking} id="hand" animate={controlsHand} src={poking} alt="hand" ></motion.img> */}

        <motion.svg
          animate={controlsHandSVG}
          ref={handPoking}
          id="hand"
          width="2062"
          height="1928"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 1944 1360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            id="Vector 10"
            initial={{ pathLength: 0, left: "24%" }}
            animate={controlsHand}
            d="M1779.5 938.5C1621 983 1730 975.788 1639.5 911.5C1520.5 826.966 1412.5 818 1222 632C1141.79 553.683 960.1 383.6 930.5 350C911.333 339.833 857.6 290.8 796 176C776 172.167 724.6 150 679 92C663 83.1667 619.5 53.2 573.5 4C564.667 18 573.4 65.8 679 145L711 153C674.833 150.167 596.7 143 573.5 137C544.5 129.5 488 176 480 192C497.833 184.167 535.4 168.3 543 167.5C552.5 166.5 616 188 683 179C658 180.667 603.5 183 585.5 179C563 174 544.5 168 506.5 184C468.5 200 458.5 190 453.5 196.5C448.5 203 444 204 447.5 219C458.5 217.333 485.2 212.8 504 208C527.5 202 570 203.5 600 223C624 238.6 658.667 232.5 673 227.5C662.833 235.008 629.4 243.218 577 216C569.723 212.167 548.534 205.2 522 208C497.333 214 444.4 224.6 430 219C421.167 217.667 404.6 219.5 409 237.5C424.333 244.5 464.4 255.4 502 243C539.6 230.6 519 237.833 504 243C536.333 247 608.8 274 640 350L614.5 317C613.333 330 604.2 354.8 577 350C549.8 345.2 521.667 299.333 511 277L497.5 267.5C504.667 269 520.3 270.5 525.5 264.5C526.167 260.667 518.6 252.6 483 251C447.4 249.4 336.167 229 285 219C200.167 203.667 24.6 173 1 173C99.5 193.5 320 237.8 414 251L430 257.5H453.5L489.5 264.5C472 259.167 439.1 252.3 447.5 267.5C458 286.5 502 334.5 502 350C512.167 379 573.6 440.1 738 452.5C770.167 460.5 897.3 527.5 910.5 543.5C923.7 559.5 898.833 515 894 509.5C900.333 544.667 1000.77 650.671 1024.5 682.5C1233.59 963 1470.5 1102.5 1674.5 1206C2003 1372.67 1874.5 1287.5 1942 1358.5"
            stroke="white"
            stroke-width="4"
          />
        </motion.svg>

        <motion.img
          ref={img1}
          id="personNotTalking"
          animate={controls}
          transition={{ duration: 0.05, stiffness: 500 }}
          src={notTalking}
          alt="person not talking"
        ></motion.img>
        {/**<motion.img ref={img2} style={{opacity: img2visible? 1:0}} src={throatCleaning} alt="person" animate={controlsimg2} ></motion.img> */}
        <motion.img
          ref={img2}
          src={throatCleaning}
          alt="person"
          animate={controlsimg2}
        ></motion.img>
        <motion.img
          className="color-bubbles"
          src={bubble1}
          alt="o"
        ></motion.img>

        <motion.img
          ref={img3}
          animate={controlsimg3}
          src={talking}
          alt="person talking"
        ></motion.img>
      </motion.div>

      <motion.div ref={div3} className="container">
        {/*<Button name="click" handleClick={handleH1Show} id="nextButton"/>*/}

        <motion.svg
          className="rainbow"
          initial={{ opacity: 1, left: "-10vw" }}
          animate={nextButtonControls}
          onClick={handleH1Show}
          id="nextButton"
          viewBox="0 0 128 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector 12"
            d="M10 10L114 140.97L10 260"
            stroke="url(#paint0_linear_28_3)"
            stroke-width="20"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_28_3"
              x1="435.545"
              y1="-431.473"
              x2="435.545"
              y2="251.713"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F8A813" />
              <stop offset="0.741319" stop-color="#D146BF" />
              <stop offset="0.840277" stop-color="#00EEB9" />
              <stop offset="0.970486" stop-color="#F8A813" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          className="rainbow"
          animate={firstrainbowControl}
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 1080 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1" clip-path="url(#clip0_1_3)">
            <g id="Group 2">
              <motion.path
                animate={rainbowSvgControl}
                id="VectorGreen"
             
                d="M-156 76L976.537 1203"
                stroke="#00EEB9"
                stroke-width="40"
              />
              <motion.path
                animate={rainbowSvgControl}
                id="VectorYellow"
          
                d="M-33.3589 0L1080 1108"
                stroke="#F8A813"
                stroke-width="40"
              />
              <motion.path
                animate={rainbowSvgControl}
                id="VectorPink"
              
                d="M-89.8849 40L1022.46 1148"
                stroke="#D146BF"
                stroke-width="40"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_3">
              <rect width="1080" height="1080" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        {/**<motion.h1  ref={h1refPainting} id="h1Painting" animate={paintingH1Control}>1 Painting</motion.h1> */}

        <motion.div
          ref={h1refPainting}
          id="h1Painting"
          animate={paintingH1Control}
        >
          1
          <motion.h1
            id="oneInOnePainting"
            className="onePainting"
            animate={oneInOnePaintingCotrols}
          >
            1
          </motion.h1>
          <motion.h1 className="onePainting">Painting,</motion.h1>
        </motion.div>

        <motion.svg
          className="rainbow"
          animate={secondrainbowControl}
          viewBox="0 0 1080 1080"
          preserveAspectRatio="xMinYMin meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 2" clip-path="url(#clip0_2_6)">
            <g id="Group 2">
              <motion.path
                animate={rainbowSvgControl2}
                id="VectorGreen2"
                opacity="1"
                d="M1016.5 -162.164L-126.552 975.612"
                stroke="#00EEB9"
                stroke-width="40"
              />
              <motion.path
                animate={rainbowSvgControl2}
                id="VectorYellow2"
                opacity="1"
                d="M1092.72 -38.0966L-31.0608 1080.41"
                stroke="#F8A813"
                stroke-width="40"
              />
              <motion.path
                animate={rainbowSvgControl2}
                id="VectorPink2"
                opacity="1"
                d="M1052.57 -95.3013L-71.2069 1022.19"
                stroke="#D146BF"
                stroke-width="40"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2_6">
              <rect width="1080" height="1080" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.img
          ref={img3}
          animate={colorSplashControl}
          id="colorSplashImg"
          src={colorSplash}
          alt="person talking"
        ></motion.img>

        <div className="atATime">
          {/**<h1 id="crazyProjectH">1 crazy project,</h1> */}
          <motion.div animate={atATimeSlideControls} className="atATimeSlide">
            <motion.h1
              className="projectStatement"
              id="AtATimeH"
              initial={{ opacity: 1 }}
              animate={controlsAtATime}
            >
              at a time!
            </motion.h1>
            <motion.h1
              className="projectStatement"
              id="countlessSharedMemoriesH"
              initial={{ opacity: 1 }}
              animate={controlsMemories}
            >
              countless shared memories,
            </motion.h1>
            <motion.h1
              className="projectStatement"
              id="oneCrazyProjectH"
              initial={{ opacity: 1 }}
              animate={oneCrazyProject}
            >
              1 crazy project,{" "}
            </motion.h1>
          </motion.div>

          {/**<img src={teamworkWithYou}></img>

<img id="teamworkIMG" src={teamworkWithYou}></img>
<h1 id="countless">countless</h1>
<h1 id="sharedMemo">shared</h1>
<h1 id="memories">memories,</h1>
<h1 id="atATime"> at a time</h1>



<Carousel slides={[
        { image:'../public/images/colorSplash/9.png'},
        { image:'../public/images/colorSplash/10.png'},
        { image:'../public/images/colorSplash/11.png'},
      ]}/>
       <Carousel texts={['1 carzy project','2 carzy project','3 carzy project']}/>


       */}
        </div>
      </motion.div>
      {/**storytimeH */}

      <div ref={div4} className="ArtOrPainting">
        <div className="storytime-title">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={storyTimeControls}
            className="ArtOrPaintingTitle"
          >
            well
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={storyTimeControls}
            className="ArtOrPaintingTitle"
          >
            Story
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={storyTimeControls}
            className="ArtOrPaintingTitle"
          >
            time!
          </motion.h1>

          {/* <p id="fightH" className="projectTxt" >painting has been my way to fight for my colors!</p>*/}
        </div>
        {/**
  
<motion.video  autoplay="autoplay" muted loop id="personNotTalking2"   animate={controlsSecondPerson}  
  src={notTalking} alt="person not talking" >

 <source src={whatpaintingsVid} type="video/mp4"></source>

<div ref={div4} className="div5">

<motion.h1 id="firstSideText" className="sideText">ONE</motion.h1>
<motion.h1 id="secondSideText" className="sideText">SHARED</motion.h1>
<motion.h1 id="thirdSideText" className="sideText">MEMORY</motion.h1>
<motion.h1 id="forthSideText" className="sideText">AT A</motion.h1>
<motion.h1 id="fifthSideText" className="sideText">TIME!</motion.h1>
 
    <p class="grid-container">Imagine a world painted only in shades of gray, where only black and white call the shots. It's a place without the cozy warmth of lively colors.In this imaginary place, our eyes reveal emptiness, echoing the loneliness inside. The once-fiery passion in hearts, eager to use their unique colors to make a beautiful difference on our collective canvas of life, now flickers, struggling to survive in a world that only wants us to be either black or white.Creativity and inspiration take a backseat. Life in this gray and expected canvas feels like a broken record, missing the beat of unpredictability that makes it exciting and dance-worthy!
   
    </p>
</div>

  </motion.video> */}
        <p className="projectTxt">
          Imagine a world painted only in shades of gray, where only black and
          white call the shots. It's a place without the cozy warmth of lively
          colors.In this imaginary place, our eyes reveal emptiness, echoing the
          Imagine a world painted only in shades of gray, where only black and
          white call the shots. It's a place without the cozy warmth of lively
          colors.In this imaginary place, our eyes reveal emptiness, echoing the
          Imagine a world painted only in shades of gray, where only black and
          white call the shots. It's a place without the cozy warmth of lively
          colors.In this imaginary place, our eyes reveal emptiness, echoing the
        </p>
      </div>
    </div>
  );
}
export default ProjectSection;
