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
import { useLanguageContext } from "../context/LanguageContext";
const TeamPage = () => {
  const [mappingJson, setMappingJson] = useState([]);
  const { t } = useLanguageContext();
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
  }, []);

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
      <PageHeader page="team" quote="arttttt-me" image={teamImg} />
      <PageIntro page="team" txt={t("pageIntro.team.text")} />

      <div className="contactTextContainer">
        {/**
         <h1 className="pagetxt" id="pageHeaderH">
          Team
        </h1> */}

        <div>
          <div className="mappedContentContainer">
            <h3 className="mappedContentH">
              partners in crime this project needs:
            </h3>
          </div>
          <div className="mappedContentContainer">
            <h3 className="mappedContentH">core team</h3>
            <p className="mappedContentTxt">
              Sales will kick off just before the campaign launch, and all the
              money made from those sales will be poured back into the project,
              keeping our journey fueled as we strive to turn even more
              extraordinary dreams into reality. This will continue until we
              find the perfect investor fit backing the project, After that this
              will go on more independently from the campaign. what campaign?
              Dive deeper on the campaign page!
            </p>
          </div>
          <div className="mappedContentContainer">
            <h3 className="mappedContentH">mentors</h3>
            <p className="mappedContentTxt">
            I once read an article by Rod Ebrahimi from Forbes that really stuck with me. 
            He mentioned how without a savvy guide, in the form of a mentor, you may wind up making crucial early mistakes that would have otherwise been avoidable. If you recognize the potential of this project to make a positve impact and you have the experience and knowledge to guide it, I would truly appreciate you getting in contact with me 🙃.
            </p>
          </div>
          <div className="mappedContentContainer">
            <h3 className="mappedContentH">investors</h3>
            <p className="mappedContentTxt">
            If you're thinking about backing this project, let's grab a coffee and chat to see if we're a good fit to work togetheror not.🤞🎉🤝
            </p>
          </div>
        </div>
      </div>

      <h1 className="pagetxtLeft">Members:</h1>
      <Slider
        images={[
          {
            url: "images/slideShow/team/haleh/1.png",
            caption:
              "First of all, after all that talk about black and white, if you still want me to stick to your black and white dress code, count me in! But just so you know...",
          },
          {
            url: "images/slideShow/team/haleh/2.png",
            caption:
              " I will sneak in a pop of color on the sly to keep my integrity intact!",
          },
          ,
          {
            url: "images/slideShow/team/haleh/3.png",
            caption: "Dont say i didnt warn ya! deal with me;)",
          },
          {
            url: "images/slideShow/team/haleh/4.png",
            caption:
              "I believe, many things come and go in life but there's one thing that's always been a constant for me: chips and yogurt. And it's not just a like, man.. ",
          },
          {
            url: "images/slideShow/team/haleh/5.png",
            caption: "it's full-on love🥔💕",
          },
          {
            url: "images/slideShow/team/haleh/6.png",
            caption:
              "You know what sums me up in just two words? Mindfully Naive. In a world that's all about being rational, sometimes you gotta embrace a little naivety to jump into the unknown and discover some real magic.",
          },
          {
            url: "images/slideShow/team/haleh/7.png",
            caption:
              "It's all about striking that balance. Too much rationality? ",
          },
          {
            url: "images/slideShow/team/haleh/8.png",
            caption:
              "It breeds a rigid culture where no one dares to think outside of the box and use their imagination, leading to stagnation. Let me tell you, my rational side is still shaking in its boots. it keeps saying nooo way it will happen, but hey, I'm all in for taking this risk while I still can. So, why not roll the dice? Yeah, it's scary, but that's where the real beauty lies",
          },
          {
            url: "images/slideShow/team/haleh/9.png",
            caption: "And lastly, to you, reading this right now..",
          },
          {
            url: "images/slideShow/team/haleh/10.png",
            caption:
              "If you resonate with the cause of this project and believe you hold a key to unlocking a door standing in the way, what are you waiting for?",
          },
          {
            url: "images/slideShow/team/haleh/11.png",
            caption:
              "Don't let me stress-eat my beloved chips and yogurt. Contact me!",
          },
          {
            url: "images/slideShow/team/haleh/12.png",
            caption:
              "Or else, I might just throw this shoe at you... Nah, just kidding. But seriously, think it through and let's have a chat.",
          },
        ]}
      />
      <Slider
        images={[
          {
            url: "images/slideShow/team/you/1.png",
            caption: "this could be you",
          },
          {
            url: "images/slideShow/team/you/2.png",
            caption: "or this 😎",
          },
          ,
          {
            url: "images/slideShow/team/you/3.png",
            caption:
              "and this could be us. look what you made me do!😵 email me to collab@passtillios.com",
          },
        ]}
      />
      <Row fluid>
        {/* Map through imagesForCrew if it's defined and render a Slider component for each crew member */}
        {imagesForCrew.length > 0 ? (
          imagesForCrew.map((crew, index) => (
            <Col lg={6} md={12} key={index}>
              {/* Your content goes here */}
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
