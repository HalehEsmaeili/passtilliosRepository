import React, { useEffect,useRef } from "react";
import {
  motion,
  useScroll,
useInView,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import NextSteps from "../components/NextSteps.jsx";
import callMe from "../public/images/contactPage/call.png";
import music from "../public/images/campaignPage/music.png";
import "./pages.css";
import "./ContactPage.css";
import "./campaign.css";
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
    if(latest<0.3){
      svgLengthControls.start({ pathLength: latest*0});
    }else if (.55>latest>0.3){
      svgLengthControls.start({ pathLength: latest*1.1,transition:{stiffness:1}});
    }else{
      svgLengthControls.start({ pathLength: latest*1.29,transition:{stiffness:1}});
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
      <PageHeader pageId={5} sectionId={1} image={callMe}  />
      <div style={{ position: "relative",overflow:"hidden" }}>
        <PageIntro page="campaign" title="" paragraph="" />
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
       <h1 className="h1-shareMyDream">Now, let me now "Walk it like I Talk it" !</h1>
<img style={{top:"17.8%",left:"72%", position:"absolute", width:"10%"}} src={music}></img>

<p className="p-shareMyDream">
I mean practice what you preach right? so to kick things into high gear and set the stage for you to share your own versions of "daringly naive dreams," let me whisk you away into my world first!
</p>

        <h1 id="roadmapstartTxt" >
        Tuesday 21 March 2017, persian new year, this was on TV..
        </h1>
        <div
        ref={roadmapcontainer}
          style={{
            zIndex: 10,
            position: "relative",
            width: "100%",
            top: "30%",
            overflow: "hidden"
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
d="M2106.37 0C2106.37 1012.33 2209.62 3188.72 2069.59 3886C1928.81 4587 286.589 4037 286.589 4777.5C286.589 5215.5 123.425 5632.5 526.589 5632.5C1950 5632.5 2580.59 5559.5 4426.59 5559.5V7760.5L67.5894 7822C67.5894 7822 67.5892 9452 67.5894 10314.5C67.5894 10314.5 349.088 10314.5 2299.09 10314.5C2891.59 10314.5 2831 11782.5 2502.5 12576C2352.9 12937.4 1783.01 12765.1 755.589 13078C67.5894 13287.5 -433.801 14609.4 609.589 14913C1506.59 15174 3838.77 14772.1 3112.59 15466C1694.09 16821.5 -315.5 17637.5 349.088 18448C778.668 18971.9 2768.32 17772 3112.59 18959C3415.09 20002 454.499 19833 557.81 20867.5C609.589 21386 985.088 21545 2069.59 21879L1027.09 23745.5L2530 25353L1572.5 26474.5L2080.09 27240.5V29533" stroke="#00EEB9" 
stroke-width="22"

/>

 
  
 

 
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

          <div id="roadmap-iframe-container2" className="iframe-container">
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
            overflow:"hidden"
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
