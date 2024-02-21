import React from "react";
import AwesomeSlider from 'react-awesome-slider';
//import  hoc from 'react-awesome-slider/src/hoc/captioned-images/hoc';
import Hoc from "./Hoc";
import 'react-awesome-slider/src/hoc/captioned-images/styles.scss'; // Import the styles separately
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
//import withCaption from 'react-awesome-slider/dist/captioned';
//import 'react-awesome-slider/dist/captioned.css';

// Import Captioned from the correct path

import { motion,useInView,useSpring, useAnimationControls} from "framer-motion";
//import 'react-awesome-slider/src/components/react-awesome-frame/styles.scss';
import splash1 from  "../public/images/colorSplash/9.png";
import splash2 from  "../public/images/colorSplash/5.png";
import splash3 from  "../public/images/colorSplash/11.png";
import sliderCss from "./Slider.css";
//import Bullets from "react-awesome-slider/src/core/bullets";
//const controls =useAnimationControls()

const Captioned = Hoc(AwesomeSlider);
 
//  imagesForCrew

function Slider(props) {
/**
    
 * imagesForCrew
 * 
 */
console.log("in slider!!!!!!!!!!!",props.images[0].url);
  return (
    <div className="awesomeSlider">
 
 
  <Captioned
  className="AwesomeSlider"
  animation="fallAnimation"
  cssModul={sliderCss}
  screens={props.images.map((image, index) => ({
    backgroundColor: '#4a9c8c', // Set your desired background color
    media: image.url,
    caption: image.caption, // Assuming crew.caption is the caption for the image
  }))}
/>

  
   {

/**
      <AwesomeSlider className="AwesomeSlider" animation="fallAnimation">
        <div className="slide" data-src={splash1}>
        <div className="caption--1hwV"><p>The answer is -- Don't think about it.</p></div>
        </div>
        <div data-src={splash2}>
          <p>2. I want to see what you got.</p>
        </div>
      </AwesomeSlider>


<CaptionedComponent
 
 
    screens={[
      {
        backgroundColor: '#4a9c8c',
        media:{splash2},
        caption: 'I want to see what you got.',
      },
      {
        backgroundColor: '#4a9c8c',
        media:{splash1},
        caption: 'The answer is -- ',
      },
      // ...
    ]}
  />



 */

   }
   
    </div>
  );
}

export default Slider;
