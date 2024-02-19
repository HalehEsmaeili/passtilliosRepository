import React, { useState } from "react";

import Slider from "../components/Slider.jsx";
import NextSteps from "../components/NextSteps.jsx";

import { Container, Row, Col } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import callMe from "../public/images/contactPage/call.png";
import "./TeamPage.css";
import "./ContactPage.css";
//import callMeImg from "../public/images/contactPage/contactimg.png";
import colorGif from "../public/video/yourcolors.gif";
import welcomeVid from "../public/images/contactPage/welcome.mp4";
import Button from "../components/Button.js";
import axios from "axios";
import axiosInstance from "../Api/axiosInstance.js";
import PageHeader from "./PageHeader.jsx";
const ContactPage = () => {
  // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  //<img className="headerGif" src={callMe}></img> <img className="headerGif" src={colorGif}></img>
  //<img className="headerImg" src={callMeImg}></img>

  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [tel, setTel] = useState("");
  const [btnPressed, setBtnPressed] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);
  const [savingUnsuccessful, setSavingUnsuccessful] = useState(false);
  const handleClick = async (e) => {
    //e.preventDefault();

    if (email === "" || name === "") {
      setBtnPressed(true);
    } else {
      setFormData({
        email: email,
        name: name,
      });
      try {
        console.log("cccccccccc" + email);
        // Make a POST request to your Node.js server
        const response = await await axiosInstance.post(
          "/api/contact/saveEmail",
          {
            email: email,
            name: name,
            tel: tel,
          }
        );
        console.log("Response:", response); // Log the response from the server
        // Check rate limit status
        if (response.data.statusCode === 429) {
          console.log("Rate limit exceeded");
          // Handle rate limit exceeded case on the frontend
        } else {
          // Handle the response from the server
          if (response.status === 200) {
            setSavedSuccessfully(true);
            console.log("Success:", response.data);
            // Handle success, e.g., redirect to a success page
          } else {
            console.error("Server Error:", response.data);

            // Check for specific error condition (adjust based on Mailchimp response)
            if (response.data.errors && response.data.errors.length > 0) {
              const firstError = response.data.errors[0];
              if (
                firstError.error_code === "ERROR_GENERIC" &&
                firstError.field === "ADDRESS"
              ) {
                console.log("Email is already subscribed.");
                // Handle the case where the email is already subscribed
                // Set a state or perform an action accordingly
              }
            }
          }
        }
      } catch (error) {
        console.error("Error:", error.message);
        // Handle other errors, e.g., network error
      }
    }
  };

  const handleChange = (event) => {
    setBtnPressed(false);
    if (event.target.name === "name") {
      console.log(event.target.value);
      setname(event.target.value);
    } else if (event.target.name === "email") {
      console.log(event.target.value);
      setEmail(event.target.value);
    } else if (event.target.name === "tel") {
      console.log(event.target.value);
      setTel(event.target.value);
    }
  };

  return (
    <div className="ContactPage">
      {/**  <img className="headerGif" src={callMe}></img> 
  <h1 className="headerTxt" >Contact</h1>
  */}

      <PageHeader image={callMe} />

      <div style={{ position: "relative", overflow: "visible" }}>
        <svg
          className="svg-icon2"
          width="auto"
          height="auto"
          viewBox="0 0 212 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 3">
            <path
              className="svg-icon-path2"
              id="Vector 1"
              d="M112.36 50.8487C115.936 85.1232 130.708 158.77 144.012 151.033C158.497 149.336 187.468 149.804 198.197 168.943C211.609 192.868 185.393 196.107 159.981 201.873C150.507 204.022 148.175 221.394 131.137 223.5C119 225 120 221 101.584 215C83.1679 209 55 238 65 250.5M65 250.5C67.5751 252.536 76 263.5 86.5 265.5C107.345 269.471 108.5 270 112.36 275.142C116.219 280.283 123.829 291.393 144.012 286.605C167.081 281.133 179.957 298.745 184.249 301.291C187.682 303.327 198.913 306.89 204.099 308.417C187.468 307.399 174.592 310.962 167.081 312.489C156.888 314.016 156.051 315.358 144.012 318.598C121.815 324.571 99.509 310.135 91.4368 300.273C81.3711 287.974 66.2518 259.323 65 250.5ZM101.584 47.7095C80.8398 58.3991 43.0475 68.5984 10 40.5M60 80C57 76.5 53.1373 62.7451 57 58.6561M77 76.5C74.8541 76.5 70.4065 61.2598 74.2692 57.1707M24 70.5C24 70.5 21.5 55.7087 27.5 51.8567M42.4479 76.5C40.3019 76.5 38.5852 59.8882 42.4479 55.7992M93 70.5C90.8541 70.5 84.6373 56.9903 88.5 52.9013M10.964 17.7618C23.6608 26.585 46.694 34.4579 65.149 23.8702C88.2179 10.6354 112.36 64.5924 131.137 36.5959C149.914 8.59931 167.081 23.8702 179.957 23.8702C203.764 23.8702 204.993 17.7618 210 11.1445V3C203.741 5.71482 184.141 14.7077 175.128 14.7077C163.862 14.7077 150.445 8.09462 134.892 20.816C119.334 33.5417 117.188 42.1952 112.36 36.5959C107.531 30.9966 94.6557 11.6535 74.2692 14.7077C53.8828 17.7618 43.1531 32.5236 14.7194 17.7618C-8.02759 5.95236 5.59912 12.8412 10.964 17.7618Z"
              stroke="black"
              stroke-width="3"
            />
            <path
              className="svg-icon-path2"
              id="Vector 3"
              d="M199 308C135.022 307.942 94.8834 292.696 71 259"
              stroke="black"
              stroke-width="2"
            />
            <path
              className="svg-icon-path2"
              id="Vector 5"
              d="M204.5 308C185.145 297.162 178 251.5 154.355 256.838C112.859 266.205 120.855 252.338 88.8552 232.338C70.7184 221.002 25.3552 213.838 73.3552 261.838"
              stroke="black"
              stroke-width="2"
            />
          </g>
        </svg>
        <main className="form-signin w-100 m-auto">
          {/**<form action="/" method="post"> */}
          <div className="mb-3">
            <h1 className="h3 mb-3 fw-normal h1contact">
              join the contact list!
            </h1>
          </div>
          {savedSuccessfully ? (
            <div className="successContainer">
              <video id="chicks" autoplay="autoplay" muted loop>
                {" "}
                <source src={welcomeVid} type="video/mp4"></source>{" "}
              </video>
            </div>
          ) : (
            <div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="how should I address you?"
                />
                {btnPressed && name === "" ? (
                  <p className="errorP">forgot to enter your name?</p>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="e_mail" className="form-label">
                  your Email:
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="e_mail"
                  onChange={handleChange}
                  value={email}
                  placeholder="name@example.com"
                />

                {btnPressed && email === "" ? (
                  <p className="errorP">forgot to enter your email?</p>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  tel number:
                </label>
                <input
                  type="telNumber"
                  name="tel"
                  className="form-control nameInput"
                  onChange={handleChange}
                  value={tel}
                  placeholder="optional..for SMS lovers!"
                />
              </div>

              <div className="btnEmailListContainer">
                <Button
                  id="contactBtn"
                  name="count me in!"
                  handleClick={handleClick}
                />
              </div>
            </div>
          )}

          {/**  <button className="w-100 btn btn-lg btn-primary" type="submit">count me in!</button>
   </form>
  */}
        </main>
      </div>
      <div
        style={{ position: "relative", marginTop: "-80%", marginBottom: "0%" }}
      >
        <NextSteps currentStation="team" conditionForAnimStart={true} />
      </div>
    </div>
  );
};

export default ContactPage;
