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


