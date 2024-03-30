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
 

function App() {
 return (
    <div style={{overflow:"hidden",marginBottom:0}} >
 


<Router>
<Header />
  <Routes> 
    <Route path="/art" element={<ArtPage />} />
    <Route path="/team" element={<TeamPage />} />
    <Route path="/campaign" element={<Campaign />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/contact/success" element={<ContactPage savedsuccessful={true}/>} />
    <Route path="/home" element={<IntroParallax/>} />
    <Route path="/impressum" element={ <Impressum/>} />
    <Route path="/datenschutz" element={ <DatenSchutz/>} />
    <Route index element={ <IntroParallax/>} />
  
    {/* Add more routes for other components */}
    </Routes> 
    <Footer />
</Router>
    
    

      

    
    </div>
  );
}

export default App;


