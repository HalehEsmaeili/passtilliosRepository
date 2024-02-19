import React from "react";

//import 'bootstrap/dist/css/bootstrap.min.css';
import "./ArtPage.css";
import teamImg from "../public/images/teampage/team.png";
import PageHeader from "./PageHeader.jsx";
import NextSteps from "../components/NextSteps.jsx";
const ArtPage = () => {
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  //<img className="headerGif" src={callMe}></img>
 return (
   <div >
<PageHeader image={teamImg}/>

{/** 
<div className="contactTextContainer">
<h1 className="pagetxt" id="pageHeaderH">Team</h1>
<p className="pagetxt" id="pageTxtP">
Instead how about we embrace the true charm of grey? I believe it's about time we guide it back to being the background color; the perfect backdrop where vibrant and unique colors can take the lead as the main storytellers in the painting of our lives!
</p>
</div>
*/}


<div style={{position:"relative",marginTop:"-100%",marginBottom:"0%"}}>
<NextSteps currentStation="art" conditionForAnimStart={true} />

</div>

   </div>
   


  );
};

export default ArtPage;
