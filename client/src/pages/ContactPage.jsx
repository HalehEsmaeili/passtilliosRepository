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
      <PageIntro page="Networking" txt={t("pageIntro.contact.text")}/>
       
      <div className="mappedContentContainer">
      <h3 className="mappedContentH">Here's why joining the Passtillios contact list is a smart first move to join this symphony!</h3>
   

<p className="mappedContentTxt">
1. Big High-Five ✋: Your joining is like shouting "heck yeah!" for the project. It tells me you liked what you read and saw here, and for now, you're in. The more of you join in, the closer we get to finding the right talents, connections, and backers to make more crazy ideas a reality.
</p>
   <p className="mappedContentTxt">

2.Stay Connected 🪢: At the heart of this project is building a bold, fun, and magical Passtillios community. Joining the contact list means you want to stay in the loop and become part of a family that will be your go-to when it comes to finding partners in crime for your next out-of-the-box, innovative ideas.
</p>


<p className="mappedContentTxt">
3.
Not salesy or spammy 🫰: Your attention is sacred to me. This is purely for networking purposes. I'll only send emails when there are important updates about this project. And hey, if it turns out you it is not your cup of tea 🍵, you can opt-out anytime down the road. So, there's nothing to lose.
</p>


          </div>
       

       <ContactList/>
      </div>

      <div style={{ zIndex: 0, position: "relative", marginTop: "-80%", marginBottom: "0%" }}>
        <NextSteps dontshow="btn3"  currentStation="contact" conditionForAnimStart={true} />
      </div>
    </div>
  );
};

export default ContactPage;
