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

    <div className="headerContainer">
    <img className="headerGif" src={lines}></img>
    <img className="headerImage" src={props.image}></img>
    </div>

)};

export default PageHeader;
