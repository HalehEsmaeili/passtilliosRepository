import React, { useState, useEffect, useRef } from 'react';
import lines from "../public/lines.svg";
import "../public/nav.css";
import "../components/MyButton.css"
import useWindowDimensions from "./useWindowDimensions.js";
function MyButton(props) {
  const textRef = useRef(null);
  const customClass=props.buttonClass;
  const [textWidth, setTextWidth] = useState(0);
  const [lft, setLeft] = useState("10%");
  const {dim:{height,width}} =useWindowDimensions();
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const textBoundingBox = textElement.getBoundingClientRect();
      setTextWidth(textBoundingBox.width);
    }
  }, [props.name]);
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const textBoundingBox = textElement.getBoundingClientRect();
      setTextWidth(textBoundingBox.width);
    }
  }, [width,textWidth]);
  
  return (
    <div style={{ width: "fitContent", position: 'absolute',marginTop:"2%" }} className={customClass}>
      <p style={{  fontSize: "1em", color:"white",marginBottom:0}} ref={textRef} id="name">
        {props.name}
      </p>

      <svg width={textWidth} height="3%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 722 180"  viewBox="0 0 794 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame 1" clip-path="url(#clip0_4_7)">
<g id="Group 2">
<path id="VectorGreen" opacity="0.7" d="M-87 44.8513L902.258 44.2648" stroke="#00EEB9" stroke-width="10"/>
<path id="VectorYellow" opacity="0.7" d="M-51.0001 10.2793L921.545 9.73988" stroke="#F8A813" stroke-width="10"/>
<path id="VectorPink" opacity="0.7" d="M-51.2569 26.8985L920.878 26.7992" stroke="#D146BF" stroke-width="10"/>
</g>
</g>
<defs>
<clipPath id="clip0_4_7">
<rect width="794" height="53" fill="white"/>
</clipPath>
</defs>
</svg>


  </div>
   
  );
}

export default MyButton;
