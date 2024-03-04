import React, { useEffect, useState } from "react";
import NextSteps from "../components/NextSteps.jsx";
import callMe from "../public/images/contactPage/call.png";

//import "./TeamPage.css";
import "./ContactPage.css";

import axiosInstance from "../Api/axiosInstance.js";
import PageHeader from "./PageHeader.jsx";
import PageIntro from "../components/PageIntro.jsx";
const Campaign = () => {
 useEffect(()=>{
    window.scrollTo(0, 0);
 },[]);
   

  return (
    <div className="ContactPage">
      <PageHeader pageId={3} sectionId={1} image={callMe} page="contact" />
      <div style={{ position: "relative", overflow: "visible" }}>
      <PageIntro title="" paragraph=""/>
      <h1>take out your bucketlists!</h1>
<h1>that what you feel uncomfortable dreaming about? but you can not stop wondering what if??</h1>
<h1>this is that dream for me!</h1>
      </div>
      <div style={{ zIndex: 0, position: "relative", marginTop: "-80%", marginBottom: "0%" }}>
        <NextSteps dontshow="btn3"  currentStation="contact" conditionForAnimStart={true} />
      </div>
    </div>
  );
};

export default Campaign;
