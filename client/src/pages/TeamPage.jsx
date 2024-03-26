import React, { useEffect, useState } from "react";
import Slider from "../components/Slider.jsx";
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../Api/axiosInstance.js";
import "./TeamPage.css";
import teamImg from "../public/images/teampage/teamIconWhite.png";
import PageHeader from "./PageHeader.jsx";
import NextSteps from "../components/NextSteps.jsx";
import { formatCrewData } from "../Utils/crewUtils.js";
import MappedContent from "../Utils/contentMapUtil.jsx";
import PageIntro from "../components/PageIntro.jsx";
const TeamPage = () => {
  const [mappingJson, setMappingJson] = useState([]);

  const [imagesForCrew, setImagesForCrew] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axiosInstance
      .post("/api/crew/get-crew", { pageId: 2 })
      .then((response) => {
        console.log(`Response for crew:`, response.data);
        setImagesForCrew(response.data);

        //handleCrewMembers(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving crew members:", error);
      });

    axiosInstance
      .get(`/api/content/contentForMapping/${3}`)
      .then((response) => {
        console.log("response for team", response.data);
        setMappingJson(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving section data:", error);
      });
    },[]);


  // Define a function to handle images for each crew member
  /*
  const handleCrewMembers = (data) => {
    ///returns a json with an array of jsons for images and captions,crew_name and crew_id
    const formattedCrew = formatCrewData(data);
    setImagesForCrew(data);
    console.log("formattedCrew",formattedCrew[0].crew_name);
    };
  */

  return (
    <div className="TeamPage">
      <PageHeader pageId={2} sectionId={10}  image={teamImg} />
     <PageIntro page="team"/>
     
      <div className="contactTextContainer">
        {/**
         <h1 className="pagetxt" id="pageHeaderH">
          Team
        </h1> */}
        <div>
          <MappedContent pageId={3} sectionId={1} />
        </div>
      </div>

      <h1 className="pagetxtLeft">Members:</h1>
      <Row fluid>
        {/* Map through imagesForCrew if it's defined and render a Slider component for each crew member */}
        {imagesForCrew.length > 0 ? (
          imagesForCrew.map((crew, index) => (
            <Col lg={6} md={12} key={index}>
              {/* Your content goes here */}
              <Slider images={crew.images} />
            </Col>
          ))
        ) : (
          <div></div>
        )}
      </Row>

      <div
        style={{ position: "relative", marginTop: "-100%", marginBottom: "0%" }}
      >
        <NextSteps
          dontshow="btn2"
          currentStation="team"
          conditionForAnimStart={true}
        />
      </div>
    </div>
  );
};

export default TeamPage;
