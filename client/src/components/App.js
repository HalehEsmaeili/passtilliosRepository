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
import Campaign from '../pages/Campaign';

 

function App() {
 return (
    <div style={{marginBottom:0}} >
   <Router>
        <Switch>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/success" element={<ContactPage savedsuccessful={true} />} />
        </Switch>

        <Header />
        <Routes>
          <Route path="/art" element={<ArtPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<IntroParallax />} />
          <Route path="/Impressum" element={<IntroParallax />} />
          <Route index element={<IntroParallax />} />
        </Routes>
        <Footer />
      </Router>    
  
    <Footer />

    
    

      

    
    </div>
  );
}

export default App;


