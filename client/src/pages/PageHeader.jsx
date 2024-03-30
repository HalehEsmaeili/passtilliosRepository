import React, { useState, useEffect } from "react";

//import 'bootstrap/dist/css/bootstrap.min.css';

import "./PageHeader.css";

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

import { useLanguageContext } from "../context/LanguageContext";
const PageHeader = (props) => {
/*
const b1Controls = useAnimationControls();
const b2Controls = useAnimationControls();
const b3Controls = useAnimationControls();
const b4Controls = useAnimationControls();
const b5Controls = useAnimationControls();

const [shapeImageUrls, setShapeImageUrls] = useState([]);
const [wordImageUrls, setWordImageUrls] = useState([]);
const [quote, setQuote] = useState([]);

*/
const { t } = useLanguageContext();
const [splittedTxt,setSplittedTxt]=useState([]);


useEffect(() => {
  const splitText = () => {
    try {
 
    
       setSplittedTxt(t(`pageheader.quote.${props.page}`).split('-'));
   
     
 
    } catch (error) {

    }
  };

  splitText();
}, [props.page]);




/*
useEffect(() => {
  const originalText = "Networking is not just about connecting people. It's about connecting people with people, people with ideas, and people with opportunities to make a difference. - Michele Jennae";
  // Split the string using '--' as the delimiter
   setSplittedTxt(originalText.split('-'));
console.log(originalText.split('-'));
 

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


// Fetch page images for a given section and page id
const fetchPageImages = async (sectionId, pageId) => {
  try {
    const response = await axiosInstance.get(`/api/content/page-images/${props.sectionId}/${props.pageId}`);
    if (response.data.pageImages && response.data.pageImages.length > 0) {
      const pageImageUrls = response.data.pageImages.map((pageImage) => pageImage.key_name);

      setPageImageUrls(pageImageUrls);
    } else {
      setPageImageUrls([]);
    }
  } catch (error) {
    console.error('Error fetching page images:', error);
  }
};
fetchPageImages();


}, [props.pageId,props.sectionId]);
*/
/////
/*
useEffect(()=>{
  const fetchSectionContent= ()=>{
    axiosInstance
    .get(`/api/content/sections/${props.pageId}/${props.sectionId}`)
    .then((response) => {
      console.log("response for quote", response.data.sections.text_contents[0]);
      const originalText = response.data.sections.text_contents[0];
    Split the string using '--' as the delimiter
       setSplittedTxt(originalText.split('-'));

    })
    .catch((error) => {
      console.error("Error retrieving section data:", error);
    });
  }
  if(props.pageId && props.sectionId){
    fetchSectionContent();
  }

},[props.pageId,props.sectionId]);
*/
/** /* 
useEffect(() => {
  const fetchData = async () => {
    try {
      ///extract and save the quote 
      const response = await axiosInstance.get(`/api/content/header-page/${props.pageId}`);
      const originalText = response.data.text.text_contents[0];
      // Split the string using '--' as the delimiter
       setSplittedTxt(originalText.split('-'));
       setImages(response.data.pageImages);
       ///extract and save the bubble images url in aws
       // const pageImagesResponse = await combinedAxiosInstance.get(`/api/page-images/${props.sectionId}/${props.pageId}`);
     console.log("imagessss",response.data.pageImages);
    } catch (error) {
      // Handle error
      console.error('Error fetching combined section data:', error);
    }
  };

  fetchData();
}, [props.pageId]);

*/
/*
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
*/


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
  left: "20%",
  transition: { type: "spring", stiffness: 2.9, duration: 0.2 },
}];


const bubbleAnimationControlsArray = [{
  top: "-100%",
  left: "75%",
  transition: { type: "spring", stiffness: 2.1, duration: 0.2 },
}, {
  top: "-250%",
  left: "165%",
  transition: { type: "spring", stiffness: 1.1, duration: 0.2 },
}, {
  opacity: 1,
  top: "-400%",
  left: "160%",
  transition: { type: "spring", stiffness: 1.5, duration: 0.2 },
}, {
  opacity: 1,
  top: "-100%",
  left: "45%",
  transition: { type: "spring", stiffness: 1.6, duration: 0.2 },
}, {
  opacity: 1,
  top: "-300%",
  left: "100%",
  transition: { type: "spring", stiffness: 2, duration: 0.2 },
}];
//<img className="bubbles"  src="https://passtillios-bucket-web.s3.amazonaws.com/contact/too-many-trys.mp4"></img>
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  return (
<div style={{overflow:"visible"}}>

{/*<img style={{marginTop:"0%",display:"inline-block",marginLeft:"40%",marginBottom:"-40%",width:"20%"}} src={colorTiles}></img>*/}
<div className="headerContainer">
   
      {/*(wordImageUrls && wordImageUrls.length>0)? wordImageUrls.map((imageUrl, index) => (
        <motion.img className="headersBubble" key={index} src={imageUrl} alt={`b ${index}`} animate={wordAnimationControlsArray[index]} />
      ))
      :<div></div>
      */}

   

    </div>
<div className="headerTextContainer">
<div style={{position:"relative",overflow:"visible"}}>
 {/* Render your images using the 'imageUrls' state */}
{props.page ? (
  bubbleAnimationControlsArray.map((bubble, index) => (
    <motion.img
      className="headersBubble"
      key={index}
      src={`https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/headerPage/${props.page}/${index}.png`}
      alt={`b${index}`}
      animate={bubbleAnimationControlsArray[index]}
    />
  ))
) : (
  <div></div>
)}
<img className="lineup" src={lines}></img>
<img className="headerImage" src={props.image}></img>
</div>

<h1 style={{fontSize:"12vw",color:"#fec125" ,marginLeft:"20%",marginBottom:"-5%"}}>“</h1>
        <h1 className="h1PageHeader">
      {splittedTxt.length>0? splittedTxt[0]:""}
        </h1>
       
        <h1 style={{fontSize:"12vw",color:"#fec125"  ,marginLeft:"74%",marginTop:"2%"}}>”</h1>
        <h1 id="quoteFrom" className="h1PageHeader">
      {splittedTxt.length>0? splittedTxt[1]:""}
        </h1>
       { /*<p className="txtPageHeader" id="pageTxtP">
          it is about time to embrace the true charm of grey! lets step by step
          guide it back to being the background color; the perfect backdrop
          where vibrant and unique colors can take the lead as the main
          storytellers in the painting of our lives!
        </p>*/}
        <img className="linedown" src={lines}></img>
 
{/**      
<img style={{opacity:1,marginTop:"0%",display:"inline-block",marginLeft:"40%",width:"20%"}} src={colorTiles}></img>
*/}
      </div>
      
     {/* <div className="dottedLine" />*/}
</div>
   

)};

export default PageHeader;
