import React, { useEffect, useState } from "react";
import "./screenSizeHint.css";
import heyThere from "../public/errorImgVid/heythere2.png";

const ScreenSizeHint = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [smallScreenMsg, setSmallScreenMsg] = useState(true);
  const [showHint, setShowHint] = useState(true); // State to control the visibility of the hint

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth < 1100) {
        setSmallScreenMsg(true);
      } else {
        setSmallScreenMsg(false);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once during component mount

  const closeHint = () => {
    setShowHint(false);
  };

  // Conditionally render the hint
  const renderHint = showHint ? (
    <div className="screen-size-hint">
      <div className="hintContainer">
       
        {smallScreenMsg ? (
          <div>
           {/* <h1 className="hintH">yooo look! A gorgeous visitor stopped by! </h1>
            <p className="hintP">
            How's life treating ya? Listen, I'm genuinely happy you're here. This visit won't be your average internet stop. on this website you're not just a visitor; you are one of the main charactors. But hey dont believe me just yet! Go on this short journey I've created for you where you'll learn all about it yourself. have fun, Cheers!
            </p>
            <button className="close-button" onClick={closeHint}>
             cool let's go!
            </button>*/}
          </div>
        ) : (
          <div>
          <img className="hintImg" src="/images/i.png" alt="Hey there" />
            <h1 className="hintH">HAAAAh! A gorgeous big screen user detected!</h1>
            <p className="hintP">
              How are you doing? So for now, this website is optimized for smaller screens. But hey! While I'm perfecting the desktop version, you may want to switch to a smaller screen for a more enjoyable journey!
            </p>
            <button className="close-button" onClick={closeHint}>
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;

  return renderHint;
};

export default ScreenSizeHint;
