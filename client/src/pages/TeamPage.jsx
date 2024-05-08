import React, { useEffect, useState } from "react";
import Slider from "../components/Slider.jsx";
import { Row, Col } from "react-bootstrap";
//import axiosInstance from "../Api/axiosInstance.js";
import "./TeamPage.css";
import teamImg from "../public/images/teampage/teamIconWhite.png";
import PageHeader from "./PageHeader.jsx";
import NextSteps from "../components/NextSteps.jsx";
//import { formatCrewData } from "../Utils/crewUtils.js";

import PageIntro from "../components/PageIntro.jsx";
import { useLanguageContext } from "../context/LanguageContext";
const TeamPage = () => {
  //const [mappingJson, setMappingJson] = useState([]);
  const { t } = useLanguageContext();
  const [imagesForCrew, setImagesForCrew] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define a function to handle images for each crew member
  /*
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
            <h3 className="mappedContentH">🩵💛🤍💜💚🧡</h3>
            <h3 className="mappedContentH">
              partners in crime this project needs:
            </h3>
          </div>
          <div className="mappedContentContainer">
            <h3 className="mappedContentH">core team</h3>
            <p
              style={{ marginLeft: "5%", marginRight: "5%" }}
              className="mappedContentTxt"
            >
              We're going to form a tight-knit team of 5 to 7 folks, and
              together as a unit, we need to cover some crucial skills. But
              here's the deal: I'm not too fussed about how we will end up
              dividing these roles up among ourselves. Whether you're a web
              wizard with an eye for photos or a coordination champ with killer
              video skills, as long as we've got these skills covered, we're
              golden. So, the first step is finding the right people and then
              crafting roles that match their strengths. Now, let's run through
              the must-have skills:
            </p>
            <p className="mappedContentTxt">
              Social Media Savvy ⭐: If you possess this skill, you're
              creative and not afraid of bold crazy ideas🤪; you're deeply passionate about crafting
              unique, high-quality and eye-catching content for various social media platforms and ready to brainstorm wild ideas and bring them to life
              together with me. Think photography, videography, editing skills,
              and content creation and management. Reach out to me at:
              <a href="mailto:social-media-savvy@passtillios.com">social-media-savvy@passtillios.com</a>💛
            </p>
            <p className="mappedContentTxt">
              Legal, Financial, Operational, and Management Know-How 👨‍💼👩‍💼: This
              skill set is all about conquering those if-you-don't-you're-doomed
              aspects of a project like a pro. As for me, that's where you'll
              find me least comfortable! 😁 Be kind and reach out to me at:
              <a href="mailto:lfom-wiz@passtillios.com">lfom-wiz@passtillios.com</a>💚
            </p>
            <p className="mappedContentTxt">
              Coordination Maestro 🚀: If you've got this skill, you're the
              go-to person for keeping everything running smoothly. You excel in
              coordination, communication, and organizational tasks. Reach out
              to me at: <a href="mailto:coordination-maestro@passtillios.com">coordination-maestro@passtillios.com</a>🧡
            </p>
            <p className="mappedContentTxt">
              Tech Guru 👨‍💻: This skill set belongs to the tech whiz who can take
              the lead in developing the website and applications. Reach out to
              me at: <a href="mailto:tech-guru@passtillios.com">tech-guru@passtillios.com</a>🩵
            </p>
           
          </div>
          <div className="mappedContentContainer">
            <h3 className="mappedContentH">mentors and backers</h3>
            <p
              style={{ marginLeft: "5%", marginRight: "5%" }}
              className="mappedContentTxt"
            >
              I've come to understand the value of having a savvy guide, like a
              mentor, to navigate those early pitfalls that could otherwise trip
              us up. If this project has caught your interest and you're
              thinking about taking on that guiding role, whether through
              sharing your experience, knowledge, expertise, or financial
              support, I warmly encourage you to reach out. Your input could be
              invaluable, and I'd be thrilled to hear from you! please send me
              an email at <a href="mailto:backers@passtillios.com">backers@passtillios.com</a> or  <a href="mailto:mentors@passtillios.com">mentors@passtillios.com</a>💜
            </p>
            <h3 className="mappedContentH">none of the above? </h3>
            <p 
             style={{ marginLeft: "5%", marginRight: "5%" }}
            className="mappedContentTxt">
             you believe you have something
              important to add to the project that I am missing? uuuuh curious!
              then reach out to me at: <a href="mailto:collab@passtillios.com">collab@passtillios.com</a>🤍
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
              "Here is what sums me up in just two words: Mindfully Crazy. In a world that's all about being rational, sometimes you gotta embrace a little naivety to jump into the unknown and discover some real magic.",
          },
          {
            url: "images/slideShow/team/haleh/7.png",
            caption:
              "It's all about striking that balance. Too free-spirited? well that leads to pure chaos, leaving us spinning our wheels with no direction...Too much rationality? ",
          },
          {
            url: "images/slideShow/team/haleh/8.png",
            caption:
              "It creates this rigid culture where nobody wants to step out of line and unleash their creativity, which just leads to stagnation. Let me tell you, My logical side is freaking out, screaming ''You're insane!'' But you know what? Why not shake things up while I still have the chance? Sure, it's terrifying, but that's where all the magic happens.",
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
              "Or else, I might just throw this shoe at ya... Nah, just kidding. But seriously, think it through and let's have a chat.",
          },
          {
            url: "images/slideShow/team/haleh/14.png",
            caption: "I will be waiting IM-patiently for you.. ok? bye!",
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
              "And this could be us. Look what you made me do! 😵 Shoot me an email at one of the email addresses I have mentioned above. I mean, how could you resist after seeing this masterpiece of a photo, showcasing my exceptional editing skills?",
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
