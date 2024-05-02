import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useInView,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import NextSteps from "../components/NextSteps.jsx";
import campaign from "../public/images/campaignPage/campaignIconWhite.png";
import music from "../public/images/campaignPage/music.png";
import "./pages.css";
import "./ContactPage.css";
import "./campaign.css";
import PageHeader from "./PageHeader.jsx";
import PageIntro from "../components/PageIntro.jsx";
import Slider from "../components/Slider.jsx";
import { useLanguageContext } from "../context/LanguageContext";
const Campaign = () => {
  const { t } = useLanguageContext();
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
    if (isInViewRoadmapcontainer) {
      if (latest < 0.3) {
        svgLengthControls.start({ pathLength: latest * 0 });
      } else if (0.5 > latest > 0.3) {
        svgLengthControls.start({
          pathLength: latest * 1,
          transition: { stiffness: 100 },
        });
      } else {
        svgLengthControls.start({
          pathLength: latest * 1.6,
          transition: { stiffness: 100 },
        });
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
      <PageHeader page="campaign" quote="camapign-me" image={campaign} />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <PageIntro page="campaign" txt={t("pageIntro.campaign.text")} />
        <Slider
          images={[
            {
              url: `/images/slideShow/campaign/slide1/1.png`,
              caption: t("campaignpage.slideshow1.1"),
            },

            {
              url: `/images/slideShow/campaign/slide1/3.png`,
              caption: t("campaignpage.slideshow1.2"),
            },
            {
              url: `/images/slideShow/campaign/slide1/4.png`,
              caption: t("campaignpage.slideshow1.3"),
            },
            {
              url: `/images/slideShow/campaign/slide1/5.png`,
              caption: t("campaignpage.slideshow1.4"),
            },

            {
              url: `/images/slideShow/campaign/slide1/6.png`,
              caption: t("campaignpage.slideshow1.5"),
            },
            {
              url: `/images/slideShow/campaign/slide1/7.png`,
              caption: t("campaignpage.slideshow1.6"),
            },
            {
              url: `/images/slideShow/campaign/slide1/8.png`,
              caption: t("campaignpage.slideshow1.7"),
            },
            {
              url: `/images/slideShow/campaign/slide1/9.png`,
              caption: t("campaignpage.slideshow1.8"),
            },
            {
              url: `/images/slideShow/campaign/slide1/2.png`,
              caption: t("campaignpage.slideshow1.9"),
            },
          ]}
        />
        <div style={{marginTop:"25%", position: "relative" }}>
          <h1  className="h1-shareMyDream">
            {t("campaignpage.h1.timeToWalkIt")}
          </h1>
          <img
            style={{
              top: "12%",
              left: "70%",
              position: "absolute",
              width: "7%",
            }}
            src={music}
          ></img>

          <p style={{marginLeft:"10%",marginRight:"10%"}} className="p-shareMyDream">{t("campaignpage.p.timeToWalkIt")}</p>
        </div>
        <h1 id="roadmapstartTxt">{t("campaignpage.roadmap.h.1")}</h1>
        <div
          ref={roadmapcontainer}
          style={{
            zIndex: 10,
            position: "relative",
            width: "100%",
            top: "30%",
            overflow: "hidden",
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
              id="pathroadmap"
              animate={svgLengthControls}
              d="M2050.37 0C2050.37 1012.33 2153.62 3188.72 2013.59 3886C1872.81 4587 230.589 4037 230.589 4777.5C230.589 5215.5 67.4248 5632.5 470.589 5632.5C1894 5632.5 2524.59 5559.5 4370.59 5559.5V7760.5L11.5894 7822C11.5894 7822 11.5893 9452 11.5894 10314.5H2598C2598 10314.5 2598 10628.5 2598 12792C2598 13380.5 1712.71 13033.5 651 13195.5C135.5 13274.2 -229.5 14731 553.589 14913C1463.54 15124.5 3782.77 15120.6 3056.59 15814.5C1638.09 17170 -371.5 17637.5 293.088 18448C722.668 18971.9 2712.32 17772 3056.59 18959C3359.09 20002 398.499 19833 501.81 20867.5C553.589 21386 929.088 21545 2013.59 21879L971.088 23745.5L2474 25353L1516.5 26474.5L2013.59 27793V30227"
            />
          </motion.svg>

          <div className="iframe-container  roadmap-iframe-container ">
            <iframe
              className="cmplazyload"
              data-cmp-preview="300x200"
              data-cmp-src="https://www.youtube.com/embed/5f5TQZi5_08?si=mYcZfNPclVekAVCt"
              src="about:blank"
              data-cmp-vendor="s30"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/* <h1 id="roadmap-h1-persian" className="h1-roadmap" >the Persian New Year and I watched this video on TV... </h1>*/}

          <p id="roadmap-h1-buzzing" className="roadmap-h1-subthemes">
            {t("campaignpage.roadmap.h.2")}
          </p>

          {/*<p id="roadmapTxt1" className="roadmapTxt">
            Wouldn't it be cool to pull off something like this with my future
            uni pals? And hey, why not spread the fun? What if we got other
            colleges, even from around the globe, to join in and make their own
            versions?
          </p>*/}
          <p id="roadmapTxt2" className="roadmapTxt">
            {t("campaignpage.roadmap.p.1")}
          </p>
          <p id="h1-dismissed" className="h1-leftAligned">
            {t("campaignpage.roadmap.p.dismissed")}
          </p>
          <p id="roadmap-h1-4years" className="h1-leftAligned">
            {t("campaignpage.roadmap.h.4yearsago")}
          </p>

          <div
            id="roadmap-iframe-container2"
            className="iframe-container roadmap-iframe-container "
          >
            <iframe
              width="100%"
              height="100%"
              data-cmp-preview="300x200"
              className="cmplazyload"
              data-cmp-src="https://www.youtube.com/embed/H2rG4Dg6xyI?si=dp8dOseok1MS53_V"
              src="about:blank"
              data-cmp-vendor="s30"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <p id="roadmap-h1-realization" className="h1-roadmap">
            {t("campaignpage.roadmap.p.2")}
          </p>
          <p id="roadmap-h1-realization1" className="h1-roadmap"></p>
          <p id="roadmap-h1-realization2" className="h1-roadmap">
            {t("campaignpage.roadmap.p.3")}
          </p>
          <p id="roadmap-h1-resurface" className="h1-roadmap">
            {t("campaignpage.roadmap.p.4")}
          </p>

          <p id="roadmap-h1-building" className="h1-roadmap">
            {t("campaignpage.roadmap.p.5")}
          </p>
          <p id="roadmap-h1-project" className="h1-roadmap">
            {t("campaignpage.roadmap.p.6")}
          </p>

          <p id="roadmap-h1-slideshow" className="h1-roadmap">
            {t("campaignpage.roadmap.p.7")}
          </p>
        </div>

        <Slider
          images={[
            {
              url: `/images/slideShow/campaign/slide2/student.png`,
              caption: t("campaignpage.slideshow2.1"),
            },

            {
              url: `/images/slideShow/campaign/slide2/3.png`,
              caption: t("campaignpage.slideshow2.2"),
            },
            {
              url: `/images/slideShow/campaign/slide2/sponsor.png`,
              caption: t("campaignpage.slideshow2.3"),
            },
            {
              url: `/images/slideShow/campaign/slide2/4.png`,
              caption: t("campaignpage.slideshow2.4"),
            },
          ]}
        />
        <div className="mappedContentContainer">
          <h3 className="mappedContentH">
            {t("campaignpage.roadmap.h.convinced")}
          </h3>

          <p className="mappedContentTxt">{t("campaignpage.roadmap.p.join")}</p>
        </div>

        <div className="mappedContentContainer">
          <h3 className="mappedContentH">
            {t("campaignpage.roadmap.h.lastminute")}
          </h3>

          <p
            style={{ marginLeft: "5%", marginRight: "5%" }}
            className="mappedContentTxt"
          >
            {t("campaignpage.roadmap.p.lastminute")}
          </p>
        </div>

        <div
          style={{
            zIndex: 0,
            position: "relative",
            marginTop: "-80%",
            marginBottom: "0%",
            overflow: "hidden",
          }}
        >
          <NextSteps
            dontshow="btn1"
            currentStation="campaign"
            conditionForAnimStart={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
