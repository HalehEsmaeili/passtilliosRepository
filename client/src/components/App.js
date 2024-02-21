import '../../src/public/App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import IntroParallax from "../components/IntroParallax";
import {useSpring,useScroll} from "framer-motion";
import React, { useEffect } from 'react';
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import ArtPage from '../pages/ArtPage';

 

function App() {
 

/*

    <svg width="100%" height="100%" viewBox="0 0 800 1280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1.07193,-1,-78.7123)">
        <motion.path  d="M73,-4L77,186C77,186 98.987,131.978 111,164C123.013,196.022 78.666,203.405 79,237C79.334,270.595 84,419 84,419C84,419 78.998,371.454 52,394C25.002,416.546 132.265,514.69 52,480C52,480 112.103,512.066 84,549L81,746C81,746 103.53,718.737 117,761L94,763L99,796C99,796 77.993,745.943 76,830L79,1275" style="fill:none;stroke:rgb(226,16,225);stroke-width:4.16px;"/>
    </g>
    <g transform="matrix(-1.02879,-8.73061e-18,-8.86714e-18,-1.11728,137.89,1332.53)">
        <motion.path style={{scaleX}} d="M73,-4L77,186C77,186 98.987,131.978 111,164C123.013,196.022 78.666,203.405 79,237C79.334,270.595 84,419 84,419C84,419 78.998,371.454 52,394C25.002,416.546 132.265,514.69 52,480C52,480 112.103,512.066 84,549L81,746C81,746 103.53,718.737 117,761L94,763L99,796C99,796 77.993,745.943 76,830L79,1275" style="fill:none;stroke:rgb(59,244,193);stroke-width:4.01px;"/>
    </g>
</svg>   <MyButton name="show me!"/> <IntroParallax/>
*////https://www.npmjs.com/package/react-floating-button-menu
 //https://github.com/na6im/react-floating-button  <TeamPage/>
// style={{border:"2px solid red",overflow:"hidden"}}
 return (
    <div >

<Router>
  <Header />
  <Routes> 
  <Route path="/art" element={<ArtPage />} />
   <Route path="/team" element={<TeamPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/home" element={<IntroParallax/>} />
    <Route index element={ <IntroParallax/>} />
    {/* Add more routes for other components */}
    </Routes> 
</Router>
    <Footer />
    

      

    
    </div>
  );
}

export default App;


