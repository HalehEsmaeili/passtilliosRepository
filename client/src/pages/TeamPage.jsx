import React, { useEffect, useState } from "react";
import Slider from "../components/Slider.jsx";
import { Container, Row, Col } from 'react-bootstrap';
import axiosInstance from "../Api/axiosInstance.js";
import axios from 'axios';
import "./TeamPage.css";
import teamImg from "../public/images/teampage/team.png";
import PageHeader from "./PageHeader.jsx";
import NextSteps from "../components/NextSteps.jsx";

const TeamPage = () => {
  const [mappingJson, setMappingJson] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/contentForMapping/${3}`)
      .then((response) => {
        console.log("response for team", response.data);
        setMappingJson(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving section data:", error);
      });
  }, []);

  return (
    <div className="TeamPage">
      <PageHeader image={teamImg} />
      <div className="contactTextContainer">
        {/**
         <h1 className="pagetxt" id="pageHeaderH">
          Team
        </h1> */}
       <div>
        {mappingJson.length > 0 ? (
  mappingJson.map((item, index) => (
    <div className="mappedContentContainer" key={index}>
      <h1 className="mappedContentH" id={`title-${index}`}>
        {item.title}
      </h1>
      <p className="mappedContentTxt" id={`text-${index}`}>
        {item.text}sjbgv oäbj foä Instead how about we embrace the true charm race the true chrace the true ch
      </p>
    </div>
   
  ))
) : (
  <p className="pagetxt" id="pageTxtP">
    Instead how about we embrace the true charm of grey? I believe
    it's about time we guide it back to being the background color; the
    perfect backdrop where vibrant and unique colors can take the lead
    as the main storytellers in the painting of our lives!
  </p>
)}
</div>
      </div>

      <h1 className="pagetxtLeft">Members:</h1>
      <Row fluid>
        {/* First div */}
        <Col lg={6} md={12}>
          {/* Your content goes here */}
          <Slider />
        </Col>

        {/* Second div */}
        <Col lg={6} md={12}>
          {/* Your content goes here */}
          <Slider />
        </Col>
      </Row>

      <div style={{ position: "relative", marginTop: "-100%", marginBottom: "0%" }}>
        <NextSteps currentStation="team" conditionForAnimStart={true} />
      </div>
    </div>
  );
};

export default TeamPage;
