import React, { useEffect, useState } from 'react';
import "./screenSizeHint.css";
import heyThere from "../public/errorImgVid/heythere.png";

const ScreenSizeHint = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHint, setShowHint] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      // Show/hide hint based on window width
      setShowHint(newWindowWidth > 1150);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once during component mount

  const closeHint = () => {
    setShowHint(false);
  };

  // Conditionally render the hint
  const renderHint = showHint ? (
    <div className="screen-size-hint">
    
      <div className="hintContainer">
      <img className="hintImg" src={heyThere}></img>
      <h1 className="hintH" >HAAAAh! a gorgeous big screen user detected!</h1>
      <p className="hintP">
   how are youuu doin? so for now, this website is optimized for smaller screens..but hey! While I'm perfecting the desktop version, you may want to switch to a smaller screen for a more enjoyable journey!
      </p> 
      <button className="close-button" onClick={closeHint}>
    got it!
      </button>
      </div>
     
     
  
    </div>
  ) : null;

  return renderHint;
};

export default ScreenSizeHint;
