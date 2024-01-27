import { React,useState, useEffect } from 'react';
import { motion,useMotionValue, useAnimation, useControls,useScroll, useMotionValueEvent, animate, easeIn, spring } from 'framer-motion';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
 const windowWidthMotion=useMotionValue(getWindowDimensions().width);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      windowWidthMotion.set(getWindowDimensions().width);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {dim:windowDimensions,motionT:windowWidthMotion};
}