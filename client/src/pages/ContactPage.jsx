import React, { useEffect, useState } from "react";
import NextSteps from "../components/NextSteps.jsx";
import callMe from "../public/images/contactPage/call.png";

//import "./TeamPage.css";
import "./ContactPage.css";

import axiosInstance from "../Api/axiosInstance.js";
import PageHeader from "./PageHeader.jsx";
import { isEmail, isMobilePhone } from 'validator'; 
import ContactList from "../components/ContactList.jsx";
const ContactPage = () => {
 
  return (
    <div className="ContactPage">
      <PageHeader image={callMe} page="contact" />
      <div style={{ position: "relative", overflow: "visible" }}>
  
       <ContactList/>
      </div>

      <div style={{ zIndex: 0, position: "relative", marginTop: "-80%", marginBottom: "0%" }}>
        <NextSteps dontshow="btn3"  currentStation="contact" conditionForAnimStart={true} />
      </div>
    </div>
  );
};

export default ContactPage;
