import React, { useEffect, useState } from "react";
import NextSteps from "../components/NextSteps.jsx";
import callMe from "../public/images/contactPage/call.png";

import "./pages.css";
import "./ContactPage.css";

import axiosInstance from "../Api/axiosInstance.js";
import PageHeader from "./PageHeader.jsx";
import PageIntro from "../components/PageIntro.jsx";
import Slider from "../components/Slider.jsx";
const Campaign = () => {
 useEffect(()=>{
    window.scrollTo(0, 0);
 },[]);
   

  return (
    <div className="ContactPage">
      <PageHeader pageId={5} sectionId={1} image={callMe} page="campaign" />
      <div style={{ position: "relative", overflow: "visible" }}>
      <PageIntro title="" paragraph=""/>
      <Slider images={[
  {
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/1.png",
              caption: "",
             
},{
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/2.png", 
              caption: "I wish something can break through to you and play the reminder in that very moment! that even the greyness surrounding you, resisting your bold, vibrant colors, will one day realize it needed them all along"
             
},
{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/3.png",
              caption: "cause remember, even the color grey looks its best when paired with bright colors!",
             
}
,{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/4.png",
              caption: "so dont give in to the greyness of your surroundings instead help inspire your grey surrounding with your unique colors!",
             
},

{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/5.png",
              caption: "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
             
},
{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/6.png",
              caption: "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
             
},
{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/7.png",
              caption: "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
             
}
,
{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/8.png",
              caption: "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
             
}
,
{
  url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/campaign/slideshow/9.png",
              caption: "I have managed to keep my true colors alive one painting at a time! now I wonder if these paintings have the potential to be that reminder for someone out there...",
             
}


]}/>

<h1 className="h1-leftAligned">Let me take you back to Tuesday 21 March 2017, </h1>
<p className="txt p-leftAligned">
where this dream started; it was our new year in iran and this is what i saw on tv...
</p>
      <div class="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/5f5TQZi5_08?si=sOdm_GZ03iEaUL6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>

     <h1 className="h1-leftAligned">Now let me take you through the exact inner dialogue my 18 year old self went through after watching this video... </h1>
<p className="txt p-leftAligned">
Wouldn't it be cool to do something similar with other students in the future university I will go to?
Even one step further! What if we invited othere universities (even all around the world???) to join in and do their own version!
Then people will vote on the best video, and the winning team will get a week of an epic trip that would create them more memories and deepen their connections...
But how can we financially support this?
Well, what if we could find a company or an investor who would sponsor that trip?
It could be a possibility, right? but it is too childish and wierd!!! forget it!
</p>

     
      <h1 className="h1-leftAligned">
4 years after that I came accross this video...
</h1>

      <div class="iframe-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/H2rG4Dg6xyI?si=dp8dOseok1MS53_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <h1 className="h1-leftAligned">
after realizing what a key role making dreams come true together with otheres can play in
</h1>
  <h1 className="h1-leftAligned">
 creating powerful communities truly capable of the miracouls...
</h1>

  <h1 className="h1-leftAligned">
   I dared to resurface my childish wierd dream again!
</h1>
  <h1 className="h1-leftAligned">
but this time I stated seroulsy building on that childish dream...and the result is the project you see in formt of you!
</h1>
 <h1 className="h1-leftAligned">
now here is a slide show why on whyyou should help make this childish dream come true...
</h1>
      <div style={{ zIndex: 0, position: "relative", marginTop: "-80%", marginBottom: "0%" }}>
        <NextSteps dontshow="btn3"  currentStation="contact" conditionForAnimStart={true} />
      </div>
    </div>
    </div>
  );
};

export default Campaign;
