import React from "react";
import Slider from "../components/Slider.jsx";
import { Container, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import callMe from "../public/images/contactPage/callme.gif";
import "./PageHeader.css";
//import callMeImg from "../public/images/contactPage/contactimg.png";
import lines from "../public/images/contactPage/lines.png";
const PageHeader = (props) => {
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  return (
<div>
<div className="headerContainer">
    <img className="headerGif" src={lines}></img>
    <img className="headerImage" src={props.image}></img>
    </div>
<div className="headerTextContainer">
        <h1 className="h1PageHeader">Contact</h1>

        <p className="txtPageHeader" id="pageTxtP">
          it is about time to embrace the true charm of grey! lets step by step
          guide it back to being the background color; the perfect backdrop
          where vibrant and unique colors can take the lead as the main
          storytellers in the painting of our lives!
        </p>
      </div>
     
     {/* <div className="dottedLine" />*/}
</div>
   

)};

export default PageHeader;
