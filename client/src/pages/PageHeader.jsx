import React, { useState, useEffect } from "react";
import Slider from "../components/Slider.jsx";
import { Container, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import callMe from "../public/images/contactPage/callme.gif";
import "./PageHeader.css";
import axiosInstance from "../Api/axiosInstance.js";
import splash6 from "../public/images/colorSplash/14.png";
import splash7 from "../public/images/colorSplash/15.png";
import splash8 from "../public/images/colorSplash/16.png";
//import callMeImg from "../public/images/contactPage/contactimg.png";
import lines from "../public/images/contactPage/lines.png";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useAnimate,
  useAnimationControls,
} from "framer-motion";


const PageHeader = (props) => {
const b1Controls = useAnimationControls();
const b2Controls = useAnimationControls();
const b3Controls = useAnimationControls();
const b4Controls = useAnimationControls();
const b5Controls = useAnimationControls();


const [imageUrls, setImageUrls] = useState([]);
const [shapeImageUrls, setShapeImageUrls] = useState([]);
const [wordImageUrls, setWordImageUrls] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    try {
      const folderPath = `headerPage/${props.page}/shapes`;
      // Replace 'your-server-url' with the actual URL of your Express server
      const response = await axiosInstance.post(`api/image/getImages`, { folderPath });
    //setImageUrls([props.image,props.image,props.image]);

      // Assuming the response data is an object with a 'urls' property
      setShapeImageUrls(response.data.urls);
      //setImageUrls(response.data.urls);
      //console.log("image url",response.data.urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
////fetch words
    try {
      const folderPath = `headerPage/${props.page}/words`;
      // Replace 'your-server-url' with the actual URL of your Express server
      const response = await axiosInstance.post(`api/image/getImages`, { folderPath });
    //setImageUrls([props.image,props.image,props.image]);
      // Assuming the response data is an object with a 'urls' property
      setWordImageUrls(response.data.urls);
      //console.log("image url",response.data.urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }

  };

  fetchImages();


}, [props.page]);

useEffect(()=>{

  const bubbleAnim = async () => {
    try {
      
    await  b1Controls.start({
        top: "11%",
        left: "7%",
        transition: { type: "spring", stiffness: 14, duration: 0.1 },
      });

   await   b2Controls.start({
        top: "0%",
        left: "70%",
        transition: { type: "spring", stiffness: 22, duration: 0.2 },
      });
  
    await  b3Controls.start({
        opacity: 1,
        top: "40%",
        left: "45%",
        transition: { type: "spring", stiffness: 17, duration: 0.2 },
      });
  
     await b4Controls.start({
        opacity: 1,
        top: "60%",
        left: "40%",
        transition: { type: "spring", stiffness: 15, duration: 0.2 },
      });
  
      b5Controls.start({
        opacity: 1,
        top: "10%",
        left: "70%",
        transition: { type: "spring", stiffness: 20, duration: 0.2 },
      });
     
  }catch{
    
    };

 

  return () => {
    b1Controls.stop();
    b2Controls.stop();
    b3Controls.stop();
    b4Controls.stop();
  
  };


}},[imageUrls, b1Controls, b2Controls, b3Controls, b4Controls,b5Controls]);



const wordAnimationControlsArray = [{
  top: "-120%",
  left: "90%",
  transition: { type: "spring", stiffness: 2, duration: 0.2 },
}, {
  top: "-140%",
  left: "40%",
  transition: { type: "spring", stiffness: 3.1, duration: 0.2 },
}, {
  opacity: 1,
  top: "-140%",
  left: "60%",
  transition: { type: "spring", stiffness: 1.5, duration: 0.2 },
}, {
  opacity: 1,
  top: "-100%",
  left: "70%",
  transition: { type: "spring", stiffness: 4, duration: 0.2 },
}, {
  opacity: 1,
  top: "-100%",
  left: "50%",
  transition: { type: "spring", stiffness: 2.9, duration: 0.2 },
}];


const shapeAnimationControlsArray = [{
  top: "-120%",
  left: "90%",
  transition: { type: "spring", stiffness: 2, duration: 0.2 },
}, {
  top: "-140%",
  left: "40%",
  transition: { type: "spring", stiffness: 3.1, duration: 0.2 },
}, {
  opacity: 1,
  top: "-140%",
  left: "60%",
  transition: { type: "spring", stiffness: 1.5, duration: 0.2 },
}, {
  opacity: 1,
  top: "-100%",
  left: "70%",
  transition: { type: "spring", stiffness: 4, duration: 0.2 },
}, {
  opacity: 1,
  top: "-100%",
  left: "50%",
  transition: { type: "spring", stiffness: 2.9, duration: 0.2 },
}];
//<img className="bubbles"  src="https://passtillios-bucket-web.s3.amazonaws.com/contact/too-many-trys.mp4"></img>
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  return (
<div style={{overflow:"visible"}}>
<div className="headerContainer">
   


    {/* Render your images using the 'imageUrls' state */}
    {(shapeImageUrls && shapeImageUrls.length>0)? shapeImageUrls.map((imageUrl, index) => (
        <motion.img className="headersBubble" key={index} src={imageUrl} alt={`b ${index}`} animate={shapeAnimationControlsArray[index]} />
      ))
      :<div></div>
      }

      {(wordImageUrls && wordImageUrls.length>0)? wordImageUrls.map((imageUrl, index) => (
        <motion.img className="headersBubble" key={index} src={imageUrl} alt={`b ${index}`} animate={wordAnimationControlsArray[index]} />
      ))
      :<div></div>
      }

   
    <img className="lineup" src={lines}></img>
    <img className="headerImage" src={props.image}></img>
    </div>
<div className="headerTextContainer">
<h1 style={{fontSize:"12vw",color:"#00eeb9" ,marginLeft:"20%",marginBottom:"-5%"}}>“</h1>
        <h1 className="h1PageHeader">No One Can Whistle A Symphony, It Takes An Orchestra to Play It!
             ― Halford Luccock
        </h1>
        <h1 style={{fontSize:"12vw",color:"#f90ee7" ,marginLeft:"76%",marginTop:"2%"}}>”</h1>
       { /*<p className="txtPageHeader" id="pageTxtP">
          it is about time to embrace the true charm of grey! lets step by step
          guide it back to being the background color; the perfect backdrop
          where vibrant and unique colors can take the lead as the main
          storytellers in the painting of our lives!
        </p>*/}
        <img className="linedown" src={lines}></img>
      </div>
      
     {/* <div className="dottedLine" />*/}
</div>
   

)};

export default PageHeader;
