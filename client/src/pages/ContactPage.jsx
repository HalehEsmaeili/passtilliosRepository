import React, { useEffect, useState } from "react";
import NextSteps from "../components/NextSteps.jsx";
import callMe from "../public/images/contactPage/call.png";

//import "./TeamPage.css";
import "./ContactPage.css";
import axiosInstance from "../Api/axiosInstance.js";
import PageHeader from "./PageHeader.jsx";
import { isEmail, isMobilePhone } from 'validator'; 
import ContactList from "../components/contactListBrevo.jsx";
import PageIntro from "../components/PageIntro.jsx";
import { useLanguageContext } from "../context/LanguageContext";
const ContactPage = () => {
  const { t } = useLanguageContext();
    useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="ContactPage">
      <PageHeader  page="contact" quote="arttttt-me" image={callMe} />
      <div style={{ position: "relative", overflow: "visible" }}>
      <PageIntro page="Networking" title="" paragraph=""/>
       <ContactList/>
      </div>

      <div style={{ zIndex: 0, position: "relative", marginTop: "-80%", marginBottom: "0%" }}>
        <NextSteps dontshow="btn3"  currentStation="contact" conditionForAnimStart={true} />
      </div>
    </div>
  );
};

export default ContactPage;
