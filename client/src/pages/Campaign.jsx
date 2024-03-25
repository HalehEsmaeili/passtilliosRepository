import React, { useEffect, useState,useRef } from "react";
import {
  motion,
  useScroll,
useInView,

  useAnimation,

  useMotionValueEvent,
} from "framer-motion";
import NextSteps from "../components/NextSteps.jsx";
import callMe from "../public/images/contactPage/call.png";

import "./pages.css";
import "./ContactPage.css";
import "./campaign.css";

import axiosInstance from "../Api/axiosInstance.js";
import PageHeader from "./PageHeader.jsx";
import PageIntro from "../components/PageIntro.jsx";
import Slider from "../components/Slider.jsx";
const Campaign = () => {
 
  
  const roadmapcontainer = useRef(null);
  const isInViewRoadmapcontainer = useInView(roadmapcontainer, { amount: 0.1 });

  const { scrollYProgress } = useScroll();
  const svgLengthControls = useAnimation();
  useEffect(() => {
    svgLengthControls.set({ pathLength: 0 });
 
  }, [svgLengthControls]);
  useEffect(() => {

  window.scrollTo(0, 0);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log("sc",latest);
   if(isInViewRoadmapcontainer){
    if(latest<0.2){
      svgLengthControls.start({ pathLength: latest*0});
    }else if (.5>latest>0.2){
      svgLengthControls.start({ pathLength: latest*1});
    }else{
      svgLengthControls.start({ pathLength: latest*1.34});
    }
 
   }
   
 
   

  });
 
  //const { scrollYProgress } = useScroll();
  /*
  useEffect(() => {
  console.log("scrolled",scrollYProgress);
  svgLengthControls.start({pathLength:scrollYProgress});
}, [scrollYProgress]);
 const svglength = useSpring(scrollYProgress, {
  pathLength:scrollYProgress,
   stiffness: 100,
   damping: 30,
   restDelta: 0.001
 });*/
  return (
    <div className="ContactPage">
      <PageHeader pageId={5} sectionId={1} image={callMe} page="campaign" />
      <div style={{ position: "relative", overflow: "visible" }}>
        <PageIntro title="" paragraph="" />
        <Slider
          images={[
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/1.png",
              caption: "",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/2.png",
              caption:
                "I wish something can break through to you and play the reminder in that very moment! that even the greyness surrounding you, resisting your bold, vibrant colors, will one day realize it needed them all along",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/3.png",
              caption:
                "cause remember, even the color grey looks its best when paired with bright colors!",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/4.png",
              caption:
                "so dont give in to the greyness of your surroundings instead help inspire your grey surrounding with your unique colors!",
            },

            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/5.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/6.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/7.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/8.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/9.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
          ]}
        />
        <h1 className="h1-subthemes">
          Now, I can't ask you to share your boldest dreams without doing it
          myself, right? So, let me take you into my world first.
        </h1>

        <h1 className="h1-leftAligned">
          it was Tuesday 21 March 2017,persian new year, thisis what I watched..
        </h1>
        <div
        ref={roadmapcontainer}
          style={{
            zIndex: 10,
            position: "relative",
            width: "100%",
            top: "30%",
            left: "12%",
            overflow: "visible",
          }}
        >
  

<motion.svg
            className="roadmapSvgLine"
            viewBox="0 0 4766 29696"
            fill="none"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
          > 
         
        

<motion.path
             stroke="white"
             animate={svgLengthControls}
             id="pathroadmap"
             d="M2241.37 0C2241.37 1012.33 2381.39 3525.22 2241.37 4222.5C2100.59 4923.5 421.589 4037 421.589 4777.5C421.589 5215.5 265.088 5559.5 661.588 5632.5C1989.95 5877.07 2705.09 5486.5 4561.59 5559.5V7760.5L202.589 7822C-89.4108 7822 15.0892 9490.5 108.589 10116.5C108.589 10116.5 35.5884 10314.5 2434.09 10314.5C3026.59 10314.5 3132.59 12160 2715.59 12806.5C2563.41 13042.4 1964.59 13078 890.589 13078C592.285 13078 -298.802 14609.4 744.589 14913C1641.59 15174 3973.77 14772.1 3247.59 15466C1829.09 16821.5 -1111.41 17968.5 484.088 18448C1132.92 18643 2903.32 17772 3247.59 18959C3550.09 20002 367.162 19880.1 692.81 20867.5C1036.81 21910.5 1120.09 21545 2204.59 21879L1162.09 23745.5L1996.09 25278.5L1714.59 26237.5L2215.09 27176V29533"
              stroke-width="22"/>
 

  
 

 
</motion.svg>
 

         
         
         
         
         
         
         
          <div class="iframe-container roadmap-iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5f5TQZi5_08?si=sOdm_GZ03iEaUL6s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* <h1 id="roadmap-h1-persian" className="h1-roadmap" >the Persian New Year and I watched this video on TV... </h1>*/}

          <h1 id="roadmap-h1-buzzing" className="roadmap-h1-subthemes">
            {" "}
            here's what's buzzing around my brain as I am watching this video
          </h1>

          <p id="roadmapTxt1" className="roadmapTxt">
            Wouldn't it be cool to pull off something like this with my future
            uni pals? And hey, why not spread the fun? What if we got other
            colleges, even from around the globe, to join in and make their own
            versions?
          </p>
          <p id="roadmapTxt2" className="roadmapTxt">
            Then, we could let people vote on the best one, and ta-da! The
            winning gang bags an awesome week-long trip, bonding and making
            memories along the way. But, how on earth would we pay for it? Maybe
            we could snag some sponsorships from a company or an investor. But
            hey, let's not get too carried away. It's a bit childish.
          </p>
          <h1 id="h1-dismissed" className="h1-leftAligned">
            so just like that I dismissed that dream.
          </h1>
          <h1 id="roadmap-h1-4years" className="h1-leftAligned">
            4 years after that I came across this video...
          </h1>

          <div id="roadmap-iframe-container2" class="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/H2rG4Dg6xyI?si=dp8dOseok1MS53_V"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <h1 id="roadmap-h1-realization" className="h1-roadmap">
            Through this video, I realized two things. 1.the power of just
            asking!
          </h1>
          <h1 id="roadmap-h1-realization1" className="h1-roadmap"></h1>
          <h1 id="roadmap-h1-realization2" className="h1-roadmap">
            1.how making dreams come true together with others is the key to
            creating communities capable of the miraculous!
          </h1>
          <h1 id="roadmap-h1-resurface" className="h1-roadmap">
            Then, I dared to resurface my "childish weird" dream again!
          </h1>

          <h1 id="roadmap-h1-building" className="h1-roadmap">
            But this time, I started seriously building on that childish dream
          </h1>
          <h1 id="roadmap-h1-project" className="h1-roadmap">
            and the result is the project you see in front of you!
          </h1>

          <h1 id="roadmap-h1-slideshow" className="h1-roadmap">
            Now, here's a slideshow on why you should help make this childish
            dream come true...
          </h1>
        </div>

        <Slider
          images={[
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/1.png",
              caption: "",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/2.png",
              caption:
                "I wish something can break through to you and play the reminder in that very moment! that even the greyness surrounding you, resisting your bold, vibrant colors, will one day realize it needed them all along",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/3.png",
              caption:
                "cause remember, even the color grey looks its best when paired with bright colors!",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/4.png",
              caption:
                "so dont give in to the greyness of your surroundings instead help inspire your grey surrounding with your unique colors!",
            },

            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/5.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/6.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/7.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/8.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
            {
              url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/9.png",
              caption:
                "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
            },
          ]}
        />

        <div
          style={{
            zIndex: 0,
            position: "relative",
            marginTop: "-80%",
            marginBottom: "0%",
          }}
        >
          <NextSteps
            dontshow="btn3"
            currentStation="contact"
            conditionForAnimStart={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
