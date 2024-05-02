import '../../src/public/App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import IntroParallax from "../components/IntroParallax";
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import ArtPage from '../pages/ArtPage';
import Campaign from '../pages/Campaign';
import Impressum from "../pages/Impressum";
import DatenSchutz from "../pages/DatenSchutz";
import CookieBanner from './CookieBanner';
import Success from "./Success.jsx";
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    document.title = "passtillios";
  }, []);
 return (
    <div style={{overflow:"hidden",marginBottom:0}} >
 


<Router>
<Header />
  <Routes> 
    <Route path="/art" element={<ArtPage />} />
    <Route path="/team" element={<TeamPage />} />
    <Route path="/campaign" element={<Campaign />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/success" element={<Success />} />
    <Route path="/contact/success" element={<ContactPage savedsuccessful={true}/>} />
    <Route path="/home" element={<IntroParallax/>} />
    <Route path="/impressum" element={ <Impressum/>} />
    <Route path="/datenschutz" element={ <DatenSchutz/>} />
    <Route path="/imprint" element={ <Impressum/>} />
    <Route path="/datapolicy" element={ <DatenSchutz/>} />
    <Route index element={ <IntroParallax/>} />
  
    {/* Add more routes for other components */}
    </Routes> 
    <CookieBanner />
    <Footer />
</Router>
    
    

      

    
    </div>
  );
}

export default App;


