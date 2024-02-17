import React, { useEffect, useState, useRef } from "react";
import "../../public/intro.css";
import "./CampaignStatement.css";
import axios from "axios";
import axiosInstance from "../../Api/axiosInstance.js";
import parazzit from "../../public/images/campaign/parazit.mp4"
//1901 change the h1s positioning css.
//the local deployment works with serve,but with heroku not yet
//heroku logs --tail -a passtilliostest1
// "start": "node app/index.js"
//https://github.com/HalehEsmaeili/passtilliosRepository
//heroku git:remote -a passtilliosfrontendtest
//vids
//import teamHeaderVid from "../public/video/teamGif.gif";
import wtf from "../../public/images/campaign/wtf.png";
import teamHeaderVid from "../../public/video/yourcolors.gif";
import colorRevelation from "../../public/images/campaign/colorRevelation.png";
import yourcolors from "../../public/images/campaign/yourcolorwords.png";
//import Button from "./Button.js";
import { motion, useInView, useAnimationControls } from "framer-motion";

/////your life as a painting
import paintBrush from "../../public/images/yourLifeAsAPainting/1.png";
import magnet from "../../public/images/yourLifeAsAPainting/2.png";
import lampNotOn from "../../public/images/yourLifeAsAPainting/3.png";
import lampOn from "../../public/images/yourLifeAsAPainting/4.png";
import painting from "../../public/images/yourLifeAsAPainting/frames/7.png";
import handOfCanvas from "../../public/images/yourLifeAsAPainting/hand.png";
import cloudOutCanvas from "../../public/images/yourLifeAsAPainting/cloud.png";
//campaign
import arrow from "../../public/images/campaign/arrow.png";

function CampaignStatement(props) {
  const text =
    "Imagine a world painted only in shades of gray, where only black and white call the shots. It's a place without the cozy warmth of lively colors.In this imaginary place, our eyes reveal emptiness, echoing the loneliness inside. The once-fiery passion in hearts, eager to use their unique colors to make a beautiful difference on our collective canvas of life, now flickers, struggling to survive in a world that only wants us to be either black or white.Creativity and inspiration take a backseat. Life in this gray and expected canvas feels like a broken record, missing the beat of unpredictability that makes it exciting and dance-worthy!";

  ///////////refs  und is in view

  const magicContainerRef = useRef(null);
  const isInViewMagicContainerRef = useInView(magicContainerRef, {
    once: true,
    amount: 0.3,
  });

  const yourLifePaintingDiv = useRef(null);
  const isInViewYourLifePaintingDiv = useInView(yourLifePaintingDiv, {
    once: true,
    amount: 0.8,
  });

  const campaignImgRef = useRef(null);
  const isInViewCampaignImg = useInView(campaignImgRef, {
    once: true,
    amount: 0.7,
  });

  const wtfRef = useRef(null);
  const isInViewWtfRef = useInView(wtfRef, { amount: 0.1 });

  ////////////////////////animation controls



  ///life as painting

  //////your life as a painting
  const handOfCanvasControls = useAnimationControls();
  const greyCloudOutCanvasControls = useAnimationControls();
  const magnetControls = useAnimationControls();
  const lampControls = useAnimationControls();
  const asAControls = useAnimationControls();
  const paintingImgControls = useAnimationControls();
  //const yourControls=useAnimationControls();
  const paintBrushControls = useAnimationControls();

  const animateMagicContainer = useAnimationControls();
  const animateMagic = useAnimationControls();

  const wtfAnimation = useAnimationControls();
  const campaignImgAnimation = useAnimationControls();

  /////usestate
  const [sectionData, setSectionData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [texts, setTexts] = useState(null);

  ////wtf useeffect
  const wtfAnim = async () => {
    await wtfAnimation.start({
      scale: [1, 1.1],
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    });
  };
  useEffect(() => {
    if (isInViewWtfRef) {
      wtfAnim();
    }
  }, [isInViewWtfRef]);

  ///campaign statement
  const campaignImgAnim = async () => {
    await campaignImgAnimation.start({
      scale: [1, 1.3, 1.2],
      transition: { delay: 0.3, duration: 0.5 },
    });
  };
  useEffect(() => {
    if (isInViewCampaignImg) {
      campaignImgAnim();
    }
  }, [isInViewCampaignImg]);

  useEffect(() => {
    if (isInViewMagicContainerRef) {
      const spiceAnim = async () => {
        animateMagicContainer.start({
          scale: [1, 1.2, 1],
          rotate: [0, 30, 0, -30, 0, 20, 0, -20, 0],
          transition: { delay: 0.2, type: "yoyo" },
        });
        animateMagic.start({
          opacity: 1,
          transition: { delay: 0.7, type: "yoyo" },
        });
      };
      spiceAnim();
    }
  }, [isInViewMagicContainerRef]);

  useEffect(() => {
    if (isInViewYourLifePaintingDiv) {
      const yourLifePaintigAnim = async () => {
        paintBrushControls.start({
          left: ["-200%", "4%"],
          top: ["3%", "0%"],
          rotate: 90,
          transition: { type: "yoyo", stiffness: 70, duration: 0.4 },
        });
        magnetControls.start({
          opacity: 0.4,
          scale: 1,
          transition: { duration: 0.3 },
        });
        magnetControls.start({
          opacity: 0,
          transition: { delay: 0.3, duration: 0.1 },
        });
        asAControls.start({
          opacity: 1,
          right: ["-20vw", "-5vw"],
          top: ["-8vw", "-.7vw"],
          rotate: 60,
          color: "#00EEB9",
          transition: { delay: 0.5, duration: 0.2 },
        });
        paintingImgControls.start({
          opacity: 1,
          transition: { delay: 0.7, duration: 0.1 },
        });
        await lampControls.start({
          opacity: 1,
          transition: { delay: 0.6, duration: 0.3 },
        });

        await greyCloudOutCanvasControls.start({
          right: ["-80vw", "-18vw"],
          scale: 3,
          transition: { stiffness: 1, duration: 5 },
        });
        await handOfCanvasControls.start({ opacity: 0.5 });
        handOfCanvasControls.start({
          rotate: [-50, 50, -40, 40],
          scale: [1.2, 1],
          transition: { type: "yoyo", stiffness: 50, duration: 0.3 },
        });
        await greyCloudOutCanvasControls.start({
          right: ["-18vw", "-80vw"],
          transition: { delay: 0.4, stiffness: 1, duration: 0.7 },
        });
        handOfCanvasControls.start({
          opacity: 0,
          transition: { stiffness: 50, duration: 0.01 },
        });
      };
      yourLifePaintigAnim();
    }
  }, [isInViewYourLifePaintingDiv]);

  useEffect(() => {
    axiosInstance.get(`/sections/${props.pageId}/${props.sectionId}`)
      .then((response) => {
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
  }, []);

  return (
    <div>

     <div className="meetPasstilliosContainer">
     <div className="videoContanier">
  
    {/*<video  id="parazitVid" autoplay="autoplay" muted loop> <source src={parazzit} type="video/mp4"></source>
  </video>*/}
    <h1 className="centerH" >
        I'm a sucker for certain kind of stories!
          </h1>
          </div>
    { /*
      <h1 className="centerH" >
           meet passtillios!
          </h1>
     <p  className="meetPasstilliosTxt">
    a passion project born from the heart of an ordinary person taking a leap of faith to champion a vision that feels like home.
          </p>
*/}
         
          
     <p  className="meetPasstilliosTxt">
     Stories where seemingly regular, ordinary folks come together and manage to create something extraordinary, especially against all odds? Oh boy, that just tugs at my heartstrings! Whether it's a true story from a TED Talk or a fictional plot from a movie, these narratives simply fill my heart with joy. At some point, I decided to take that joy and make it the heartbeat of this project, Passtillios! Through this venture, I aim to create a space where more of these incredible stories can unfold. a place for unique and vibrant experiences to bloom in our sometimes too black-and-white world. Picture it: regular folks like us making extraordinary memories that stick with us forever...what am I after? let me put it this way...
          </p>
          </div>
      <div className="yourColorsDiv">
    
      
        {headers ? (
          <h1 id="campaignH" className="campaignText">
            {headers[0]}...
          </h1>
        ) : (
          <h1 id="campaignH" className="campaignText">
            a world with a touch of...
          </h1>
        )}
        {/**<img id="yourcolorsIMG" src={yourColors}></img>
<video id="yourcolorsVid"  autoplay="autoplay" muted loop> <source src={yourColorsVid} type="video/mp4"></source>
  </video>
 
 */}
        <img id="yourcolorsWords" src={yourcolors}></img>
        <img id="yourcolorsIMG1" src={teamHeaderVid} />
        {texts ? (
          <p id="campaignP" className="campaignText">
            {texts[1]}
          </p>
        ) : (
          ""
        )}
        <h1 id="useWhatYouCan" className="tooFastH">
          start where you are, use what you have, do what you can principle!
            </h1>
        
         
        <div style={{ position: "relative" }}>
      
           
          {headers ? (
            <h1 id="whatIHave" className="tooFastH">
              {headers[1]}
            </h1>
          ) : (
            ""
          )}

          <motion.img
            ref={campaignImgRef}
            animate={campaignImgAnimation}
            id="yourcolorsIMG"
            src={colorRevelation}
          ></motion.img>

          <svg
            className="svgTeam"
            viewBox="0 0 80 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M45.5744 135.443C45.7117 135.553 45.8596 135.682 46.0181 135.83C46.1767 135.977 46.3308 136.137 46.4806 136.308C46.6366 136.484 46.767 136.66 46.8718 136.837L46.356 137.269C46.165 137.085 45.9565 136.898 45.7306 136.706C45.5159 136.514 45.3274 136.352 45.1651 136.222C44.803 135.932 44.4758 135.752 44.1836 135.682C43.8913 135.611 43.5982 135.664 43.3045 135.838C43.0107 136.013 42.6862 136.322 42.3309 136.765C41.9757 137.208 41.7423 137.595 41.6308 137.926C41.5243 138.251 41.5371 138.548 41.6693 138.818C41.8015 139.088 42.0486 139.368 42.4106 139.659C42.5043 139.734 42.6285 139.828 42.7833 139.942C42.9381 140.056 43.1048 140.174 43.2833 140.297C43.4681 140.424 43.6486 140.538 43.8246 140.638L43.4811 141.24C43.1851 141.136 42.8848 140.992 42.5801 140.809C42.2816 140.632 41.9982 140.435 41.7298 140.22C41.2055 139.8 40.8467 139.384 40.6534 138.973C40.4601 138.562 40.4318 138.124 40.5684 137.659C40.7113 137.199 41.0179 136.676 41.4882 136.089C41.9586 135.503 42.4056 135.092 42.8294 134.858C43.2531 134.623 43.6842 134.559 44.1227 134.664C44.5661 134.763 45.05 135.023 45.5744 135.443Z"
                fill="white"
              />
              <path
                d="M54.019 143.188C54.4849 143.672 54.7843 144.128 54.9174 144.555C55.0561 144.988 55.0221 145.425 54.8154 145.868C54.6145 146.306 54.2459 146.782 53.7097 147.298C53.1734 147.814 52.68 148.166 52.2293 148.356C51.7844 148.539 51.3485 148.553 50.9215 148.398C50.5001 148.248 50.0565 147.931 49.5906 147.447C49.1304 146.968 48.8309 146.513 48.6922 146.08C48.5591 145.653 48.5902 145.218 48.7856 144.775C48.9923 144.332 49.3637 143.852 49.9 143.337C50.4362 142.821 50.9268 142.471 51.3717 142.288C51.8279 142.104 52.2668 142.087 52.6882 142.237C53.1151 142.392 53.5588 142.709 54.019 143.188ZM53.3963 143.787C53.1024 143.481 52.8205 143.286 52.5505 143.202C52.2919 143.117 52.0112 143.149 51.7085 143.296C51.4058 143.442 51.0497 143.713 50.6403 144.107C50.2309 144.5 49.9469 144.845 49.7884 145.142C49.6298 145.439 49.5847 145.721 49.6531 145.988C49.7327 146.256 49.9195 146.542 50.2134 146.848C50.5073 147.154 50.7863 147.351 51.0505 147.441C51.3204 147.526 51.6068 147.495 51.9095 147.348C52.2122 147.201 52.5683 146.931 52.9777 146.537C53.3871 146.143 53.6711 145.798 53.8296 145.501C53.9882 145.204 54.0276 144.922 53.948 144.655C53.8741 144.382 53.6902 144.092 53.3963 143.787Z"
                fill="white"
              />
              <path
                d="M60.9238 151.458L60.1093 152.232L60.0226 152.417L56.381 155.141L55.7699 154.324L60.4494 150.824L60.9238 151.458ZM62.7571 153.668L61.9166 154.147L61.7153 153.878C61.5092 153.603 61.2455 153.37 60.9241 153.181C60.6092 152.987 60.2006 152.768 59.6985 152.524L60.1575 152.076C60.6981 152.211 61.1779 152.392 61.5968 152.618C62.0205 152.85 62.3546 153.13 62.599 153.457L62.7571 153.668Z"
                fill="white"
              />
              <path
                d="M67.7058 161.431C68.1421 162.195 68.3184 162.827 68.2349 163.326C68.1553 163.832 67.841 164.242 67.2921 164.555C66.8445 164.82 66.4366 164.928 66.0685 164.88C65.7074 164.828 65.4058 164.591 65.1639 164.167L63.4744 161.207L64.1622 160.815L65.7208 163.545C65.8517 163.774 66.0134 163.88 66.2059 163.862C66.4054 163.84 66.5989 163.776 66.7865 163.669C67.1091 163.476 67.2863 163.246 67.3182 162.979C67.35 162.712 67.2371 162.352 66.9793 161.901C66.7691 161.533 66.5469 161.273 66.3128 161.121C66.0896 160.972 65.8168 160.929 65.4942 160.994C65.1826 161.061 64.7871 161.232 64.3077 161.505C63.7658 161.815 63.3822 162.103 63.1568 162.369C62.9354 162.643 62.84 162.928 62.8707 163.224C62.9013 163.519 63.0276 163.862 63.2497 164.251C63.4044 164.522 63.5834 164.811 63.7867 165.119C64.0009 165.43 64.1987 165.703 64.3802 165.941L63.8397 166.374C63.6859 166.25 63.5208 166.081 63.3443 165.869C63.1717 165.663 63.0036 165.441 62.84 165.203C62.6803 164.972 62.545 164.759 62.4339 164.565C62.1008 163.981 61.9199 163.462 61.8914 163.009C61.8698 162.551 62.0059 162.128 62.2998 161.739C62.6046 161.354 63.08 160.976 63.7262 160.607C64.3932 160.227 64.9633 160.007 65.4367 159.949C65.9209 159.893 66.3401 159.99 66.6943 160.24C67.0593 160.492 67.3965 160.889 67.7058 161.431Z"
                fill="white"
              />
              <path
                d="M77.1843 179.119L71.496 180.911C71.2289 180.995 71.0562 181.113 70.9778 181.263C70.8994 181.414 70.9035 181.626 70.99 181.901L71.2569 182.748L70.549 183.097C70.48 182.984 70.4088 182.851 70.3354 182.698C70.2621 182.545 70.1975 182.394 70.1418 182.244C70.0785 182.096 70.0324 181.976 70.0035 181.885C69.8569 181.419 69.8748 181.023 70.0573 180.697C70.2398 180.372 70.5752 180.132 71.0636 179.978L76.8778 178.146L77.1843 179.119ZM76.0951 181.412L75.3283 181.654L74.1455 177.9L74.8551 177.676L75.2585 178.757L76.0951 181.412Z"
                fill="white"
              />
              <path
                d="M78.4362 190.652C78.5952 191.518 78.5527 192.172 78.3088 192.615C78.0663 193.067 77.6342 193.349 77.0126 193.463C76.5026 193.565 76.0818 193.533 75.7502 193.366C75.4265 193.198 75.2206 192.873 75.1324 192.393L74.5169 189.041L75.2958 188.898L75.8637 191.991C75.9114 192.25 76.029 192.404 76.2166 192.451C76.412 192.496 76.6159 192.499 76.8284 192.46C77.1968 192.384 77.4401 192.226 77.5585 191.984C77.6768 191.743 77.689 191.367 77.5951 190.855C77.5185 190.438 77.3949 190.119 77.2242 189.899C77.0628 189.684 76.8193 189.554 76.4937 189.508C76.1773 189.469 75.7477 189.499 75.2048 189.598C74.591 189.711 74.1337 189.856 73.8328 190.033C73.5333 190.218 73.3491 190.456 73.2802 190.745C73.2113 191.034 73.2173 191.399 73.2982 191.84C73.3546 192.146 73.4278 192.479 73.5179 192.836C73.6173 193.2 73.7134 193.524 73.8062 193.808L73.1529 194.038C73.0489 193.87 72.9487 193.657 72.8523 193.398C72.7574 193.147 72.6722 192.882 72.5966 192.603C72.5224 192.332 72.4651 192.086 72.4246 191.866C72.3032 191.205 72.304 190.656 72.4271 190.218C72.5579 189.779 72.8264 189.425 73.2323 189.155C73.6476 188.892 74.2211 188.693 74.9529 188.559C75.7082 188.42 76.3189 188.401 76.7849 188.503C77.2602 188.611 77.6238 188.841 77.8755 189.193C78.1366 189.552 78.3235 190.038 78.4362 190.652Z"
                fill="white"
              />
              <path
                d="M79.8997 203.429C79.9199 203.86 79.877 204.227 79.771 204.528C79.6733 204.837 79.4922 205.074 79.2276 205.238C78.963 205.403 78.595 205.496 78.1235 205.518L74.012 205.711L73.9744 204.908L75.2377 204.692L75.3662 204.614L78.0752 204.487C78.4348 204.471 78.6866 204.375 78.8306 204.2C78.9829 204.032 79.0482 203.717 79.0265 203.254C79.0123 202.95 78.9784 202.567 78.9247 202.105C78.8714 201.651 78.8143 201.201 78.7534 200.756L79.5041 200.624C79.5648 200.894 79.6226 201.187 79.6775 201.505C79.7328 201.831 79.7803 202.161 79.82 202.496C79.8597 202.83 79.8862 203.141 79.8997 203.429ZM77.5856 205.063L76.8179 205.087L76.6751 202.294C76.654 202.015 76.5689 201.823 76.4199 201.718C76.2788 201.612 76.0844 201.565 75.8366 201.577L75.465 201.594C75.1614 201.609 74.941 201.691 74.8039 201.842C74.6748 201.992 74.6177 202.227 74.6327 202.546C74.6431 202.77 74.6949 203.02 74.7879 203.296C74.8893 203.579 75.0346 203.861 75.2239 204.14C75.4131 204.42 75.6492 204.673 75.9322 204.9L75.177 204.935C75.061 204.853 74.9232 204.731 74.7635 204.57C74.6121 204.417 74.4591 204.228 74.3044 204.003C74.1581 203.786 74.0305 203.54 73.9215 203.264C73.8208 202.997 73.763 202.703 73.7481 202.383C73.732 202.04 73.7777 201.733 73.8852 201.464C74.0007 201.194 74.1748 200.978 74.4074 200.815C74.6484 200.659 74.9447 200.574 75.2963 200.557L75.9316 200.527C76.3871 200.506 76.7453 200.629 77.0061 200.897C77.2753 201.173 77.4219 201.567 77.4458 202.078L77.5856 205.063Z"
                fill="white"
              />
              <path
                d="M79.1446 220.343C79.089 220.844 78.9115 221.211 78.612 221.443C78.3117 221.683 77.8991 221.774 77.3744 221.716L73.0211 221.233L73.1323 220.231L77.1993 220.683C77.558 220.714 77.8243 220.671 77.9984 220.554C78.1803 220.437 78.2894 220.216 78.3256 219.89C78.3485 219.683 78.3348 219.48 78.2844 219.282C78.2411 219.092 78.1602 218.878 78.0418 218.639C77.9234 218.4 77.7665 218.109 77.5713 217.766L78.2935 217.786C78.6204 218.248 78.8533 218.689 78.992 219.107C79.1387 219.525 79.1896 219.938 79.1446 220.343ZM79.6937 214.089L78.5765 214.038L78.3857 214.125L73.8655 213.624L73.978 212.61L79.7863 213.255L79.6937 214.089ZM79.5668 216.538C79.5121 217.031 79.335 217.394 79.0356 217.626C78.7441 217.86 78.3315 217.951 77.7979 217.9L73.4446 217.417L73.5531 216.439L77.6202 216.89C77.9939 216.931 78.2646 216.885 78.4325 216.751C78.6083 216.617 78.7129 216.399 78.7465 216.097C78.7685 215.898 78.7583 215.7 78.7159 215.502C78.6726 215.312 78.5922 215.094 78.4746 214.848C78.3562 214.609 78.1958 214.314 77.9935 213.961L78.717 213.969C79.0439 214.432 79.2768 214.872 79.4156 215.29C79.5623 215.709 79.6127 216.125 79.5668 216.538Z"
                fill="white"
              />
              <path
                d="M74.1511 239.974C73.9158 240.604 73.6345 241.071 73.3071 241.375C72.9769 241.688 72.5674 241.846 72.0786 241.852C71.5974 241.86 71.0083 241.733 70.3114 241.473C69.6145 241.212 69.0833 240.92 68.7178 240.595C68.3597 240.274 68.1585 239.887 68.114 239.434C68.0667 238.99 68.1607 238.453 68.396 237.823C68.6285 237.201 68.9098 236.734 69.24 236.422C69.5674 236.117 69.9731 235.957 70.4572 235.942C70.946 235.937 71.5388 236.064 72.2357 236.325C72.9326 236.585 73.4601 236.876 73.8181 237.198C74.1808 237.53 74.3858 237.918 74.4331 238.363C74.4776 238.815 74.3836 239.352 74.1511 239.974ZM73.3418 239.672C73.4902 239.275 73.5442 238.936 73.5036 238.656C73.4677 238.387 73.3182 238.147 73.0548 237.938C72.7915 237.728 72.3938 237.524 71.8618 237.325C71.3297 237.126 70.8956 237.019 70.5594 237.005C70.2233 236.99 69.9495 237.071 69.7381 237.249C69.5313 237.436 69.3538 237.728 69.2053 238.126C69.0568 238.523 68.9992 238.86 69.0322 239.137C69.0728 239.417 69.2247 239.662 69.4881 239.871C69.7514 240.081 70.1491 240.285 70.6811 240.484C71.2132 240.682 71.6473 240.789 71.9834 240.804C72.3196 240.818 72.591 240.732 72.7978 240.545C73.012 240.36 73.1933 240.069 73.3418 239.672Z"
                fill="white"
              />
              <path
                d="M71.4938 252.267C71.4346 252.38 71.3551 252.524 71.2554 252.697C71.1629 252.875 71.0613 253.052 70.9509 253.229C70.8475 253.409 70.75 253.562 70.6583 253.685L70.0271 253.261L70.5826 252.197C70.7604 251.857 70.8189 251.58 70.7583 251.368C70.6939 251.163 70.5057 250.979 70.1937 250.816L64.184 247.677L64.6562 246.773L70.7616 249.962C71.0878 250.132 71.3349 250.325 71.5029 250.539C71.678 250.757 71.7684 251.007 71.7741 251.29C71.7798 251.572 71.6864 251.898 71.4938 252.267ZM68.4974 252.042L67.7848 251.67L69.6124 248.171L70.2719 248.515L69.8085 249.532L68.4974 252.042Z"
                fill="white"
              />
              <path
                d="M58.9507 269.997L58.2901 269.384L60.518 266.71L58.8618 265.174L58.238 265.81C57.859 266.202 57.5092 266.51 57.1886 266.732C56.8628 266.96 56.5463 267.103 56.239 267.159C55.9317 267.215 55.625 267.183 55.3187 267.064C55.0135 266.955 54.6888 266.757 54.3446 266.47C54.0865 266.255 53.8607 266.02 53.6671 265.765C53.4684 265.516 53.3352 265.239 53.2677 264.932C53.1949 264.632 53.2129 264.298 53.3215 263.931C53.4362 263.568 53.6754 263.169 54.0391 262.732C54.249 262.48 54.5108 262.204 54.8242 261.903C55.1377 261.602 55.4777 261.312 55.8445 261.035L56.4221 261.672C56.1322 261.92 55.8516 262.176 55.5801 262.439C55.3087 262.702 55.0859 262.938 54.9117 263.147C54.5737 263.553 54.3693 263.898 54.2986 264.183C54.2341 264.473 54.2663 264.734 54.3954 264.966C54.5306 265.204 54.7339 265.441 55.0053 265.678C55.2952 265.93 55.5564 266.085 55.7889 266.143C56.0224 266.213 56.2509 266.195 56.4742 266.09C56.6985 265.995 56.9438 265.82 57.2101 265.563C57.4775 265.317 57.7925 265.001 58.1551 264.616L58.5361 264.215C58.6253 264.133 58.7262 264.087 58.8388 264.077C58.9525 264.078 59.056 264.122 59.1492 264.211L61.7549 266.632L58.9507 269.997Z"
                fill="white"
              />
              <path
                d="M47.3715 274.818L46.8417 274.245L49.5276 271.759L50.0575 272.331L47.3715 274.818Z"
                fill="white"
              />
              <path
                d="M40.9184 286.044C40.7814 286.141 40.6553 286.192 40.5399 286.195C40.4292 286.205 40.3317 286.171 40.2473 286.094C40.161 286.028 40.0934 285.919 40.0445 285.767L37.7771 278.119L38.638 277.508L40.6592 284.373C40.6914 284.488 40.719 284.596 40.742 284.697C40.7696 284.805 40.7917 284.912 40.8081 285.018L44.1736 282.628L44.7339 283.334L40.9184 286.044Z"
                fill="white"
              />
              <path
                d="M33.8387 6.5492C33.501 6.8186 33.179 6.9987 32.8728 7.08948C32.5653 7.1915 32.2673 7.1836 31.9789 7.06576C31.6904 6.94792 31.399 6.70451 31.1047 6.33553L28.5379 3.11793L29.1664 2.61654L30.0816 3.51362L30.2202 3.5719L31.9114 5.69196C32.1359 5.97338 32.3613 6.12112 32.5874 6.13517C32.8122 6.16047 33.106 6.02844 33.4687 5.73909C33.7064 5.54951 33.9966 5.29753 34.3394 4.98316C34.6759 4.67377 35.0068 4.36375 35.332 4.05311L35.8785 4.58423C35.6958 4.79137 35.4919 5.01036 35.2667 5.24119C35.0352 5.477 34.7956 5.70906 34.5479 5.93735C34.3003 6.16565 34.0638 6.3696 33.8387 6.5492ZM31.1581 5.63282L30.6886 5.02497L32.8668 3.27196C33.0807 3.09109 33.1865 2.90945 33.1843 2.72703C33.187 2.55087 33.1111 2.36586 32.9564 2.17199L32.7244 1.88119C32.5349 1.64354 32.3389 1.51333 32.1365 1.49056C31.9391 1.47405 31.7154 1.56557 31.4652 1.76513C31.2901 1.90482 31.1181 2.09324 30.9491 2.33039C30.7788 2.57878 30.636 2.86157 30.5206 3.17876C30.4052 3.49595 30.3385 3.83569 30.3205 4.19799L29.8491 3.607C29.848 3.46457 29.8658 3.28156 29.9023 3.05797C29.9376 2.84562 30.001 2.61082 30.0926 2.35357C30.1829 2.10757 30.3075 1.85973 30.4665 1.61008C30.6243 1.37166 30.8282 1.15267 31.0784 0.953115C31.3473 0.738591 31.6224 0.595916 31.9036 0.525089C32.1898 0.460515 32.4671 0.474641 32.7356 0.567467C33.0028 0.671535 33.2462 0.861154 33.4657 1.13632L33.8624 1.6335C34.1467 1.98997 34.2568 2.35245 34.1926 2.72093C34.1271 3.10065 33.8942 3.45016 33.494 3.76945L31.1581 5.63282Z"
                fill="white"
              />
              <path
                d="M24.9793 14.9314C24.2645 15.7086 23.5125 15.7344 22.7235 15.0088L19.4996 12.0438L20.1901 11.293L23.202 14.063C23.4905 14.3284 23.7311 14.4627 23.9237 14.466C24.1223 14.4747 24.3244 14.3671 24.5302 14.1434C24.7739 13.8784 24.9528 13.5538 25.067 13.1697C25.1811 12.7856 25.2942 12.3081 25.4062 11.7372L25.9775 12.1974C25.9279 12.7713 25.8221 13.2882 25.6602 13.7479C25.5041 14.213 25.2772 14.6075 24.9793 14.9314ZM26.6929 12.8554L25.8146 12.1618L25.6334 12.0929L22.2859 9.01423L22.9764 8.26346L27.2778 12.2195L26.6929 12.8554Z"
                fill="white"
              />
              <path
                d="M18.94 22.6526C18.7264 22.9717 18.4719 23.2586 18.1764 23.5133C17.8875 23.7724 17.5609 23.987 17.1967 24.1572L16.7015 23.7537C17.0037 23.5035 17.2615 23.2765 17.4749 23.0727C17.6882 22.869 17.8861 22.6308 18.0685 22.3582C18.2554 22.079 18.3568 21.8195 18.3728 21.5799C18.3909 21.3514 18.297 21.1105 18.0911 20.8572C17.8852 20.6039 17.5429 20.3171 17.0642 19.9968C16.5855 19.6764 16.1887 19.4638 15.8738 19.359C15.5545 19.2608 15.286 19.2592 15.0684 19.3543C14.8508 19.4493 14.6552 19.6265 14.4817 19.8858C14.3527 20.0786 14.2603 20.267 14.2045 20.4511C14.1509 20.6462 14.1228 20.8681 14.1201 21.1166C14.113 21.3717 14.1158 21.6768 14.1285 22.0318L13.4767 21.7112C13.4087 21.2806 13.4017 20.838 13.4557 20.3832C13.5098 19.9284 13.6681 19.5049 13.9306 19.1127C14.3399 18.501 14.8496 18.2068 15.4598 18.23C16.0654 18.2599 16.7905 18.5574 17.6348 19.1224C18.2665 19.5451 18.7206 19.9453 18.9973 20.323C19.2807 20.7051 19.4109 21.0858 19.3881 21.4652C19.3652 21.8446 19.2159 22.2404 18.94 22.6526ZM19.2494 26.5272L12.2683 21.8555L12.7088 21.1973L13.6233 21.6649L13.7531 21.6218L17.0841 23.8509L17.1937 24.0108C17.3976 24.1088 17.5883 24.2123 17.7656 24.3213C17.9429 24.4304 18.128 24.5494 18.3208 24.6784L19.8167 25.6795L19.2494 26.5272Z"
                fill="white"
              />
              <path
                d="M11.9853 39.7054L6.37508 37.6819C6.11168 37.5869 5.90319 37.5755 5.74959 37.6476C5.596 37.7198 5.47034 37.8913 5.37263 38.1623L5.07135 38.9976L4.2969 38.8458C4.31023 38.7146 4.3341 38.5658 4.36852 38.3997C4.40295 38.2335 4.44354 38.0738 4.4903 37.9206C4.52953 37.7646 4.56543 37.6415 4.598 37.5512C4.76357 37.0921 5.01772 36.7884 5.36044 36.6398C5.70317 36.4913 6.11534 36.5039 6.59697 36.6776L12.3314 38.7459L11.9853 39.7054ZM9.72875 40.8688L8.97244 40.596L10.3079 36.8934L11.0077 37.1459L10.6733 38.2499L9.72875 40.8688Z"
                fill="white"
              />
              <path
                d="M7.41433 50.2916C7.19923 51.3255 6.56692 51.7332 5.51739 51.5149L1.22922 50.6227L1.43943 49.6123L5.44564 50.4458C5.82942 50.5257 6.10484 50.5176 6.27189 50.4216C6.44515 50.3351 6.56274 50.143 6.62466 49.8454C6.69799 49.493 6.68908 49.1234 6.59793 48.7367C6.50678 48.35 6.35508 47.8813 6.14282 47.3305L6.86925 47.4326C7.11316 47.9492 7.28738 48.4471 7.39194 48.9264C7.49649 49.4058 7.50395 49.8608 7.41433 50.2916ZM10.2915 48.304L8.02162 47.844C7.76316 47.7902 7.5228 47.728 7.30055 47.6572C7.07668 47.5943 6.88266 47.5253 6.71849 47.4503L6.52027 47.5194L2.06762 46.593L2.27538 45.5944L10.4993 47.3054L10.2915 48.304Z"
                fill="white"
              />
              <path
                d="M6.16534 60.4729C6.12023 61.3517 5.92784 61.9787 5.58817 62.3538C5.24808 62.7369 4.76246 62.9122 4.13129 62.8798C3.61156 62.8611 3.20963 62.7324 2.9255 62.4935C2.64936 62.255 2.5238 61.8921 2.54882 61.4047L2.72351 58.0012L3.51447 58.0418L3.35331 61.1817C3.33978 61.4453 3.41884 61.6216 3.59051 61.7105C3.77017 61.7999 3.96786 61.8501 4.18357 61.8611C4.55949 61.8724 4.83288 61.7743 5.00374 61.5668C5.1746 61.3593 5.27336 60.9959 5.30001 60.4765C5.32175 60.0531 5.27505 59.7143 5.15993 59.46C5.0524 59.2142 4.8455 59.0313 4.53924 58.9115C4.24056 58.8 3.81558 58.7301 3.26431 58.7019C2.64113 58.6699 2.16268 58.7054 1.82896 58.8084C1.49483 58.9194 1.26087 59.1077 1.12708 59.3732C0.9933 59.6387 0.914925 59.9951 0.891961 60.4425C0.875968 60.7541 0.870524 61.0943 0.875628 61.463C0.888313 61.8402 0.907042 62.1776 0.931817 62.4753L0.24318 62.548C0.180706 62.3606 0.132472 62.1298 0.0984782 61.8557C0.0640738 61.5896 0.0422688 61.3121 0.0330631 61.0233C0.0234473 60.7424 0.0243805 60.4901 0.0358627 60.2664C0.0703091 59.5953 0.197858 59.0611 0.418509 58.6639C0.647149 58.2671 0.990096 57.9843 1.44735 57.8156C1.91218 57.6552 2.51611 57.594 3.25913 57.6322C4.02612 57.6716 4.62461 57.7944 5.0546 58.0007C5.49217 58.2154 5.79279 58.5232 5.95645 58.9241C6.12769 59.3335 6.19732 59.8497 6.16534 60.4729Z"
                fill="white"
              />
              <path
                d="M10.1095 78.7096C10.134 78.8352 10.1614 78.997 10.1918 79.1948C10.23 79.3911 10.2611 79.5929 10.2852 79.8001C10.3171 80.0058 10.3358 80.1855 10.3413 80.3393L9.58314 80.4014L9.35379 79.2235C9.2804 78.8466 9.15382 78.5941 8.97404 78.4661C8.79579 78.346 8.53391 78.3195 8.1884 78.3868L1.53338 79.6826L1.33843 78.6814L8.09946 77.365C8.46067 77.2946 8.7737 77.2907 9.03854 77.3533C9.31122 77.4143 9.53801 77.5535 9.7189 77.7709C9.8998 77.9884 10.03 78.3012 10.1095 78.7096ZM7.62744 80.4032L6.83826 80.5569L6.0837 76.6816L6.81398 76.5394L7.08617 77.6234L7.62744 80.4032Z"
                fill="white"
              />
              <path
                d="M9.49134 87.2766L5.61323 88.6194C5.26287 88.7323 5.03943 88.8816 4.94292 89.0674C4.8464 89.2532 4.85311 89.5049 4.96305 89.8224C5.07037 90.1323 5.24819 90.4136 5.49653 90.6663C5.75504 90.9239 6.09875 91.2197 6.52766 91.5538L5.90182 91.9101C5.41244 91.597 5.01013 91.2665 4.69491 90.9185C4.38231 90.578 4.15403 90.1999 4.01006 89.7841C3.66193 88.7787 3.99435 88.1006 5.00735 87.7498L9.1576 86.3128L9.49134 87.2766ZM10.7949 91.0413L5.27255 92.9535L5.00556 92.1824L6.01738 91.7304L6.15214 91.5695L10.4611 90.0775L10.7949 91.0413Z"
                fill="white"
              />
              <path
                d="M15.6172 97.526L10.3117 100.25C10.0626 100.378 9.91214 100.523 9.8602 100.684C9.80826 100.846 9.84807 101.055 9.97962 101.311L10.3852 102.101L9.74616 102.564C9.65923 102.465 9.56672 102.346 9.46863 102.207C9.37055 102.069 9.2814 101.93 9.2012 101.792C9.11389 101.657 9.0483 101.546 9.00445 101.461C8.78155 101.027 8.73262 100.634 8.85765 100.282C8.98269 99.9298 9.27294 99.6369 9.7284 99.4031L15.1513 96.6186L15.6172 97.526ZM14.9296 99.9699L14.2144 100.337L12.4165 96.8357L13.0784 96.4959L13.658 97.4933L14.9296 99.9699Z"
                fill="white"
              />
              <path
                d="M18.6438 106.074L15.2927 108.443C14.9876 108.649 14.8145 108.855 14.7735 109.06C14.7325 109.266 14.809 109.505 15.003 109.78C15.1923 110.048 15.4414 110.268 15.7503 110.442C16.0703 110.617 16.4827 110.806 16.9877 111.007L16.4857 111.524C15.9285 111.359 15.4501 111.154 15.0505 110.907C14.6555 110.667 14.331 110.368 14.077 110.008C13.4628 109.139 13.5933 108.396 14.4687 107.777L18.055 105.241L18.6438 106.074ZM20.9436 109.327L16.1717 112.701L15.7007 112.035L16.5467 111.319L16.6313 111.127L20.3548 108.495L20.9436 109.327Z"
                fill="white"
              />
              <path
                d="M25.6624 114.911L24.9413 115.773L24.8763 115.966L21.5685 119.088L20.8685 118.346L25.1188 114.335L25.6624 114.911ZM27.7355 116.898L26.9549 117.47L26.7243 117.225C26.4882 116.975 26.1997 116.774 25.8589 116.623C25.5239 116.466 25.0931 116.295 24.5665 116.11L24.9714 115.612C25.5239 115.685 26.0211 115.81 26.4631 115.987C26.9105 116.17 27.2743 116.409 27.5543 116.706L27.7355 116.898Z"
                fill="white"
              />
              <path
                d="M33.8637 122.352C34.5516 122.901 34.949 123.423 35.0559 123.917C35.169 124.417 35.0285 124.914 34.6344 125.408C34.3163 125.819 33.9775 126.071 33.6178 126.163C33.2631 126.248 32.895 126.139 32.5135 125.834L29.8494 123.709L30.3433 123.09L32.801 125.051C33.0074 125.215 33.1967 125.254 33.369 125.166C33.5463 125.072 33.7023 124.941 33.837 124.772C34.0652 124.473 34.1448 124.193 34.0757 123.934C34.0067 123.674 33.7689 123.382 33.3624 123.058C33.0309 122.793 32.7284 122.634 32.4547 122.579C32.1922 122.523 31.923 122.585 31.6472 122.764C31.3826 122.942 31.0781 123.246 30.7339 123.678C30.3448 124.166 30.0948 124.575 29.9841 124.906C29.8796 125.243 29.8962 125.542 30.034 125.806C30.1718 126.069 30.4158 126.341 30.7661 126.62C31.01 126.815 31.2832 127.017 31.5859 127.228C31.8998 127.438 32.1849 127.619 32.4412 127.772L32.0991 128.374C31.9103 128.316 31.6947 128.221 31.4521 128.088C31.2158 127.961 30.9776 127.817 30.7375 127.657C30.5037 127.501 30.2992 127.353 30.1241 127.213C29.5987 126.794 29.239 126.379 29.0448 125.968C28.8555 125.551 28.8255 125.108 28.9548 124.638C29.0954 124.167 29.3976 123.64 29.8616 123.059C30.3405 122.458 30.7891 122.044 31.2073 121.814C31.6368 121.584 32.0621 121.519 32.4833 121.62C32.9157 121.719 33.3759 121.963 33.8637 122.352Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="arrowContainer">
            <img className="arrowImage" src={arrow}></img>
          </div>
          {headers ? (
            <p id="journeyTxt" className="campaignText">
              {texts[2]}
            </p>
          ) : (
            <p id="journeyTxt" className="campaignText">
              , I want to kickstart a journey where together, we bring back some
              magic and spice to our lives!{" "}
            </p>
          )}
        </div>
        <div className="wtfContainer">
          <motion.img
            animate={wtfAnimation}
            id="wtf"
            ref={wtfRef}
            src={wtf}
          ></motion.img>
          <h1 id="tooFast" className="tooFastH">
            talking too fast?{" "}
          </h1>

          <h1 id="shit" className="tooFastH">
            sh*t!
          </h1>

          <h1 className="tooFastH">
            my bad! then let's start from the begining... shall we?
          </h1>
        </div>
      </div>

      <div ref={yourLifePaintingDiv} className="gridContainer">
        <motion.img
          className="lifePaintGraphics"
          id="handOfCanvas"
          animate={handOfCanvasControls}
          src={handOfCanvas}
          alt="hand"
        ></motion.img>
        <motion.img
          className="lifePaintGraphics"
          id="greyCloudOutCanvas"
          animate={greyCloudOutCanvasControls}
          src={cloudOutCanvas}
          alt="grey cloud"
        ></motion.img>
        <motion.img
          className="lifePaintGraphics"
          id="magnet"
          animate={magnetControls}
          src={magnet}
          alt="magnet"
        ></motion.img>

        <motion.img
          className="lifePaintGraphics"
          id="paintingImg"
          animate={paintingImgControls}
          src={painting}
          alt="painting"
        ></motion.img>
        <motion.div className="brushContainer" animate={paintBrushControls}>
          <motion.img
            className="lifePaintGraphics"
            id="paintBrush"
            src={paintBrush}
            alt="paint brush"
          ></motion.img>
          <motion.h1 id="your" className="leftSideHeader">
            your
          </motion.h1>
        </motion.div>
        <motion.div className="lifeContainer">
          <motion.img
            className="lifePaintGraphics lamp"
            id="lampNotOn"
            src={lampNotOn}
            alt="lampNotOn"
          ></motion.img>
          <motion.img
            className="lifePaintGraphics lamp"
            id="lampOn"
            initial={{ opacity: 0 }}
            src={lampOn}
            animate={lampControls}
            alt="lampOn"
          ></motion.img>
          <motion.h1 id="life" className="leftSideHeader">
            life
          </motion.h1>
          <motion.h1 id="asA" className="leftSideHeader" animate={asAControls}>
            as a
          </motion.h1>
        </motion.div>

        <motion.h1 id="painting" className="leftSideHeader">
          painting
        </motion.h1>
        <motion.p class="rightSideText">
          In 60 years, if a painting were to represent the life you lived up to
          that point, how would it look? Will it be a grey landscape telling a
          tale of vibrant hues slowly overshadowed by black and white? Aim high;
          transform life into an epic adventure! Let the painting of your life
          burst with inspiring colors, vibes, and deep moments.
        </motion.p>
      </div>
    </div>
  );
}
export default CampaignStatement;
