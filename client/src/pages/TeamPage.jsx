import React from "react";
import Slider from "../components/Slider.jsx";
import { Container, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./TeamPage.css";
import teamImg from "../public/images/teampage/team.png";
import PageHeader from "./PageHeader.jsx";
const TeamPage = () => {
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  //<img className="headerGif" src={callMe}></img>
 return (
   <div className="TeamPage">
<PageHeader image={teamImg}/>
<div className="contactTextContainer">
<h1 className="pagetxt" id="pageHeaderH">Team</h1>
<p className="pagetxt" id="pageTxtP">
Instead how about we embrace the true charm of grey? I believe it's about time we guide it back to being the background color; the perfect backdrop where vibrant and unique colors can take the lead as the main storytellers in the painting of our lives!
</p>
</div>

<h1 className="pagetxtLeft" >members:</h1>
<Row fluid >
        {/* First div */}
        <Col lg={6} md={12}>
          {/* Your content goes here */}
         <Slider/>
        </Col>

        {/* Second div */}
        <Col lg={6} md={12} >
          {/* Your content goes here */}
          <Slider/>
        </Col>
      </Row>
   </div>
   
  

  );
};

export default TeamPage;
