import React, { useEffect, useState } from "react";
//import callMe from "../public/images/contactPage/call.png";

import { Country, State, City } from "country-state-city";
//import ReCAPTCHA from "react-google-recaptcha";
import brevoLogo from "../public/images/contactPage/BREVO.png";
import contactlistCanva from "../public/images/contactPage/contactlistcanva.png";
//import "./TeamPage.css";
import "../pages/ContactPage.css";
import Button from "../components/Button.js";
import axiosInstance from "../Api/axiosInstance.js";
import { isEmail, isMobilePhone } from "validator";
import InputHelper from "./InputHelper.jsx";
const ContactList = () => {
  const [showInfoForState, setShowInfoForState] = useState(false);
  const [showInfoForCity, setShowInfoForCity] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [tel, setTel] = useState("");

  const [city, setCity] = useState({ name: "" }); // New state for city
  const [cityPlaceholder, setCityPlaceholder] = useState(
    "first choose a state:)"
  );
  //const [allcities, setAllCities] = useState([]);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [state, setState] = useState({ name: "", isoCode: "" });
  const [statePlaceholder, setStatePlaceholder] = useState(
    "great! which state in Germany?"
  );
  //const [allStates, setAllStates] = useState(State.getStatesOfCountry("DE"));
  const [stateSuggestions, setStateSuggestions] = useState(
    State.getStatesOfCountry("DE")
  );

  const [country, setCountry] = useState({ name: "Germany", isoCode: "DE" });
  const [countryPlaceholder, setCountryPlaceholder] = useState(
    "no way... welcome! which country then?"
  );
  //const [allCountries, setAllCountries] = useState(Country.getAllCountries());
  const [countrySuggestions, setCountrySuggestions] = useState(
    Country.getAllCountries()
  );
  const [showInfoForCountry, setShowInfoForCountry] = useState(false);
  const [agreedToBrevo, setAgreedToBrevo] = useState(false);
  const [agreedToJoin, setAgreedToJoin] = useState(false);
  const [btnPressed, setBtnPressed] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);
  const [savingUnsuccessful, setSavingUnsuccessful] = useState(false);
  const [tooManyTries, setTooManyTries] = useState(false);
  //const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [stateIsoCode, setStateIsoCode] = useState("");
  const [helperTxt, setHelperTxt] = useState("");

  ///
  /*recaptcha
  const [recaptchaToken, setRechatchaToken] = useState(null);
 
  const [recaptchaSuccess, setRecaptchaSuccess] = useState();
 
  useEffect(() => {
    axiosInstance
      .get(`/api/contact/verify-recaptcha`, { recaptchaToken: recaptchaToken })
      .then((response) => {
        console.log("responsoe for grey");
        console.log(response.data.sections);
        //response.data.sections.section_title;
        if (response.success) {
          setRecaptchaSuccess(true);
        } else {
          setRecaptchaSuccess(false);
        }

        //console.log(response.data.sections);
        //setSectionData(response.data.sections);
      })
      .catch((error) => {
        console.error("Error retrieving section data:", error);
        // Handle error
      });
  }, [recaptchaToken]);
 */
  ////useeffects for country,state,city
  useEffect(() => {
   
    if (country.isoCode === "") {
      //setCountry.isoCode("");
      setStatePlaceholder("lets first find your country;)");
    } else {
      setStatePlaceholder("great! which state in " + country.name + " ?");
    }
  }, [country]);

  useEffect(() => {
   
    //handleFilteringAndSetting(newValue,Country.getAllCountries(),country,setCountry,countrySuggestions,setCountrySuggestions);

    if (state.isoCode === "") {
      setCityPlaceholder("lets first find your state;)");
    } else {
      setCityPlaceholder("great! which city in " + state.name + " ?");
    }
  }, [state]);

 /// const handleRecaptcha = () => {};

  /*
  const handleBlur = (event) => {
    console.log("im in handle blur");
    if (event.target.name === "country") {
      const filteredCountry = Country.getAllCountries().filter(
        (countryItem) => {
          return cleanString(countryItem.name) === cleanString(country.name);
        }
      );
      if (filteredCountry.length > 0) {
        console.log("im in handle blur", filteredCountry[0].name);
        setCountry(filteredCountry[0]);
      }
      else if(filteredCountry.length===0){
        setCountry({name:"",isoCode:""});
      }
    }
  };
*/



  const handleClick = async (e) => {
    //make sure country state city are valid values othere wise set them to ""
/*
    if (!isMobilePhone(tel, "de-DE", { strictMode: false })) {
      setTelError("Invalid phone number");
    }
    */
    if (
     
      !isEmail(email) ||
      email === "" ||
      name === "" ||
      city.name === "" ||
      country.isoCode === "" ||
      state.isoCode === "" ||
      !agreedToBrevo ||
      !agreedToJoin
     // recaptchaSuccess === null ||
      //recaptchaSuccess === false
    ) {

      setBtnPressed(true);
    } else {
      try {
    
        const response = await axiosInstance.post(
          "/api/contact/save-to-tempo-contactlist-brevo",
          {
            email: email,
            name: name,
            // tel: tel,
            country: country.name,
            state: state.name,
            city: city.name,
          }
        );

        if (response.status === 200) {
          setSavedSuccessfully(true);
         
        } else {
          // Handle different HTTP status codes here
          if (response.status === 429) {
           setTooManyTries(true);
          } else if (response.status === 400) {
            // Handle 400 error (validation error)
            setError(response.data.errors);
      
          } else {
            // Handle other errors
     
          }
        }
      } catch (error) {
        
        if (error.response) {
          if (error.response.status === 429) {
           
            setSavingUnsuccessful(true);
            setTooManyTries(true);
            setSavedSuccessfully(false);
          } else {
            // Handle other errors
           // console.error("Server Error:", error.response.data);
            setSavingUnsuccessful(true);
            setTooManyTries(false);
            setSavedSuccessfully(false);
          }
        }
      }
    }
  };
  const cleanString = (str) => {
    const lvl1 = str.toLowerCase().replace(/[\s-]/g, "");
    return lvl1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const handleChange = (event) => {
    // console.log("handleChange is triggered by",event.target.value);
    setBtnPressed(false);

    if (event.target.name === "name") {
      setname(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);

      if (!isEmail(event.target.value)) {
        // Set an error message if the email is invalid
        setEmailError("Invalid email");
      } else {
        // Clear the error message if the email is valid
        setEmailError("");
      }
    } else if (event.target.name === "tel") {
      setTel(event.target.value);
      /*
      if (
        event.target.value !== "" &&
        !isMobilePhone(event.target.value, 'de-DE', { strictMode: false })
      ) {
        // Set an error message if the phone number is invalid
        setTelError("Invalid phone number");
      } else {
        // Clear the error message if the phone number is valid
        setTelError("");
      }
      */
    } else if (event.target.name === "country") {
      const newValue = event.target.value;
     
      if (newValue.length < country.name.length) {
      
        setCountry({ name: newValue, isoCode: "" });
        setStatePlaceholder("first choose the country:)");
        setState({ name: "", isoCode: "" });
      }
      // Filter states based on the entered text (inputName,newInputValue,listTOFilter,useState_Val,set_useState_Val,setPlaceholder,suggestion_useState_Val,setSuggestions)
      handleFilteringAndSetting(
        newValue,
        Country.getAllCountries(),
        country,
        setCountry,
        countrySuggestions,
        setCountrySuggestions
      );
      //console.log("the current state saved isssss", state);
    } else if (event.target.name === "state") {
      if (country.isoCode === "") {
        setState({ name: "", isoCode: "" });
        setStatePlaceholder("first enter the country:)");
      } else {
        const newValue = event.target.value;
        // Filter states based on the entered text
        /*
      const filteredStates = State.getStatesOfCountry(countryIsoCode).filter((stateItem) => {
        return cleanString(stateItem.name).startsWith(cleanString(newValue));
      });
      */
        if (newValue.length < state.name.length) {
          setState({ name: newValue, isoCode: "" });
          setCityPlaceholder("first choose the state:)");
          setCity({ name: "" });
        }
        handleFilteringAndSetting(
          newValue,
          State.getStatesOfCountry(country.isoCode),
          state,
          setState,
          stateSuggestions,
          setStateSuggestions
        );
        ///only if there is exactly one match to the entered state set the stateIsoCode
        // Compare the lengths to detect deletions
        /*
      if (filteredStates.length === 1 && newValue.length >= state.length) {
        //console.log("Deletion occurred");
        setStateIsoCode(filteredStates[0].isoCode);
        setState(filteredStates[0].name);
        setStateSuggestions(filteredStates);
        setCityPlaceholder("great! which city in " + filteredStates[0].name);
      } else {
        if (filteredStates.length === 0 && stateSuggestions.length === 1) {
          setState(stateSuggestions[0].name);
        } else {
          setState(event.target.value);
          setStateSuggestions(filteredStates);
        }
      }
      */
      }
      //console.log("the current state saved isssss", state);
    } else if (event.target.name === "city") {
      if (state.isoCode === "") {
      
        setCity({ name: "" });
        setCityPlaceholder("first enter the state:)");
      } else {
        // console.log("iso code should be setted " + stateIsoCode);

        const newValue = event.target.value;
        ///by deletion in city input field
        if (newValue.length < city.name.length) {
         
          setCityPlaceholder("which city are you in?");
          setCity({ name: newValue });
        }
        handleFilteringAndSetting(
          newValue,
          City.getCitiesOfState(country.isoCode, state.isoCode),
          city,
          setCity,
          citySuggestions,
          setCitySuggestions
        );

        /*
    const filteredCities = allcities.filter((cityItem) => {
          return cleanString(cityItem.name).startsWith(cleanString(newVal));
        });
        if (filteredCities.length === 1 && newVal.length >= city.length) {
          console.log(
            "filteredCities[0].namesdg<sfgggggg" + filteredCities[0].name
          );
          setCity(filteredCities[0].name);
          setCitySuggestions(filteredCities);
        } else {
          if (filteredCities.length === 0 && citySuggestions.length === 1) {
            setCity(citySuggestions[0].name);
          } else {
            setCity(event.target.value);
            setCitySuggestions(filteredCities);
          }
        }
        */
      }
    }
  };
  //useStateval is either city,state or country use state whic hare json files
  const handleFilteringAndSetting = (
    newInputValue,
    listTOFilter,
    useState_Val,
    set_useState_Val,
    suggestion_useState_Val,
    setSuggestions
  ) => {
    const filteredValues = listTOFilter.filter((item) => {
      return cleanString(item.name).includes(cleanString(newInputValue));
    });

    ///only if there is exactly one match to the entered state set the stateIsoCode
    if (
      filteredValues.length === 1 &&
      newInputValue.length >= useState_Val.name.length
    ) {
      set_useState_Val(filteredValues[0]);
      setSuggestions(filteredValues);
      /*
         
          setPlaceholder(
            "great! which "+inputName+ " in " + filteredValues[0].name
          );
          */
    } else {
      if (filteredValues.length === 0 && suggestion_useState_Val.length === 1) {

        set_useState_Val(suggestion_useState_Val[0]);
      } else {

        set_useState_Val({ name: newInputValue, isoCode: "" });
        setSuggestions(filteredValues);
      }
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
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

        <div className="mb-3">
          {savedSuccessfully ? (
            <h3 className="h3  fw-normal h2contact">
              only 1 last step left to do!{name ? name : ""}! 🎉🥳🍾
            </h3>
          ) : savingUnsuccessful ? (
            <h3 className="fw-normal h1contact">oooops!</h3>
          ) : (
            <h3 className="fw-normal h1contact">join the passtillios newsletter</h3>
          )}
        </div>
      </div>
      {savedSuccessfully ? (
        <div className="successContainer">
          <video className="contactListVid" autoPlay muted loop>
            <source
              src="https://passtillios-bucket-web.s3.amazonaws.com/contact/success.mp4"
              type="video/mp4"
            ></source>
          </video>
          <p className="contactListMsg">
            {" "}
            Hey {name}! 🌟 So stoked to welcome you to the Passtillios crew!
            Your trust means the world to me. it will be aweome so buckel up
            because we're about to embark on an epic journey, collecting some
            incredible stories together. I'll be dropping you a welcome email
            soon, so keep an eye out! Take care, and get ready for the
            awesomeness ahead!🚀🎨✨
          </p>
        </div>
      ) : savingUnsuccessful ? (
        tooManyTries ? (
          <video className="contactListVid" autoPlay muted>
            <source
              src="https://passtillios-bucket-web.s3.amazonaws.com/contact/too-many-trys.mp4"
              type="video/mp4"
            ></source>
          </video>
        ) : (
          <video className="contactListVid" autoPlay muted>
            <source
              src="https://passtillios-bucket-web.s3.amazonaws.com/contact/fail.mp4"
              type="video/mp4"
            ></source>
          </video>
        )
      ) : (
        <div className="InputLabelContainer">
          {/*telError && <p className="errorP">{telError}</p>*/}

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
              {name === "" ? "your" : name + "’s"} Email:
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
            {btnPressed && emailError ? (
              <p className="errorP">{emailError}</p>
            ) : null}
          </div>

          {/**the country */}
          <div style={{ marginBottom: 0 }} className="mb-3">
            {showInfoForCountry && (
              <InputHelper
                setValue={(val) => {
                  setCountry(val);
                  setShowInfoForCountry(false);
                }}
                conditionsFullfilled={true}
                currentInput="country"
                arrayofSuggestions={countrySuggestions}
              />
            )}

            <div
              style={{
                ziIndex: 10,
                width: "100%",
                position: "relative",
                paddingTop: "0%",
                marginBottom: "2%",
                marginLeft: "0%",
                //paddingLeft:0,
                overflow: "visible",
              }}
            >
              <label htmlFor="state" className="form-label">
                {name === "" ? "your" : name + "’s"} country:
              </label>
              <button
                style={{
                  width: "25%",
                  fontSize: "1.5vw",
                  border: "none",
                  padding: ".7% 0",
                  backgroundImage:
                    "linear-gradient(102deg, #f90ee7,#5b42f3 70%,#00eeb9,#fec125)",
                  marginLeft: "1%",
                }}
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  setShowInfoForCountry((prevShowInfo) => !prevShowInfo)
                }
              >
                {showInfoForCountry ? "close " : "show "} country helper
              </button>
              <input
                type="text"
                name="country"
                className="form-control"
                onChange={handleChange}
                //onBlur={handleBlur}
                value={country.name}
                placeholder={countryPlaceholder}
              />
            </div>

            {btnPressed && country.isoCode === "" ? (
              <p className="errorP">
                no matches found for the input above. make sure it is the
                english name.
              </p>
            ) : null}
          </div>

          {/**the state */}
          <div style={{ marginBottom: 0 }} className="mb-3">
            {showInfoForState && (
              <InputHelper
                setValue={(val) => {
                  setState(val);
                  setShowInfoForState(false);
                }}
                currentInput="state"
                conditionsFullfilled={country.isoCode !== "" ? true : false}
                arrayofSuggestions={stateSuggestions}
              />
            )}

            <div
              style={{
                ziIndex: 10,
                width: "100%",
                position: "relative",
                paddingTop: "0%",
                marginBottom: "2%",
                marginLeft: "0%",
                overflow: "visible",
              }}
            >
              <label htmlFor="state" className="form-label">
                {name === "" ? "your" : name + "’s"} State:
              </label>
              <button
                style={{
                  width: "27%",
                  fontSize: "1.7vw",
                  border: "none",
                  padding: ".7% 0",
                  backgroundImage:
                    "linear-gradient(102deg, #f90ee7,#5b42f3 70%,#00eeb9,#fec125)",
                  marginLeft: "1%",
                }}
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  setShowInfoForState((prevShowInfo) => !prevShowInfo)
                }
              >
                {showInfoForState ? "close " : "show "} state helper
              </button>
              <input
                type="text"
                name="state"
                className="form-control"
                onChange={handleChange}
                value={state.name}
                placeholder={statePlaceholder}
              />
            </div>

            {btnPressed && state.isoCode === "" ? (
              <p className="errorP">
                no matches found for the input above. make sure it is the
                english name.
              </p>
            ) : null}
          </div>

          <div style={{ marginBottom: 0 }} className="mb-3">
            {showInfoForCity && (
              <InputHelper
                setValue={(val) => {
                  setCity(val);
                  setShowInfoForCity(false);
                }}
                currentInput="city"
                conditionsFullfilled={state.isoCode !== "" ? true : false}
                arrayofSuggestions={citySuggestions}
              />
            )}

            <div
              style={{
                ziIndex: 10,
                width: "100%",
                position: "relative",
                paddingTop: "0%",
                marginBottom: "2%",
                marginLeft: "0%",
                overflow: "visible",
              }}
            >
              <label htmlFor="city" className="form-label">
                {name === "" ? "your" : name + "’s"} City:
              </label>

              <button
                style={{
                  border: "none",
                  padding: ".7% 0",
                  width: "28%",
                  fontSize: "1.7vw",
                  backgroundImage:
                    "linear-gradient(102deg, #f90ee7,#5b42f3 70%,#00eeb9,#fec125)",

                  marginLeft: "1%",
                }}
                type="button"
                className="btn"
                onClick={() => {
                  setShowInfoForCity((prevShowInfo) => !prevShowInfo);
                }}
              >
                {showInfoForCity ? "close " : "show "} city helper
              </button>

              <input
                type="text"
                name="city"
                className="form-control"
                onChange={handleChange}
                value={city.name}
                placeholder={cityPlaceholder}
              />
            </div>

            {btnPressed && city.name === "" ? (
              <p className="errorP">
                no matches found for the input above. make sure it is the
                english name.
              </p>
            ) : null}
          </div>

          {/* <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              {name === "" ? "your" : name + "’s"} phone number:
            </label>
            <input
              type="telNumber"
              name="tel"
              className="form-control nameInput"
              onChange={handleChange}
              value={tel}
              placeholder="optional..for SMS lovers!"
            />
          Display error message for phone number
            telError && <p className="errorP">{telError}</p>
          </div>*/}

          <div></div>
          <div
            style={{
              width: " 100%",
              margin: " 0 auto",
              position: "relative",
              display: "inline-block",
              marginLeft: "5%",
            }}
          >
            {/* <input style={{width:"10%",marginLeft:"20%",position:"relative",display:"inline-block"}} type="submit" value="Submit" />
             */}
          </div>
          <div
            style={{
              overflow: "visible",
              position: "relative",
              marginBottom: 0,
              overflow: "visible",
            }}
          >
            <input
              type="checkbox"
              style={{
                color: "white",
                width: "10%",
                position: "absolute",
                display: "inline-block",
                left: "5%",
                top: "60%",
              }}
              value="0"
              id="OPT_IN"
              name="OPT_IN"
              onChange={(event) => {
                setAgreedToJoin(event.target.checked);
                setBtnPressed(false);
              }}
              s
            />
            <img
              src={contactlistCanva}
              style={{
                width: "8%",
                display: "inline-block",
                top: "2%",
                left: "5%",
                zIndex:-1,
                position: "absolute",
              }}
            ></img>
            <p
              className="conditionsTxt"
            >
              I agree to join the Passtillios newsletter 🤙, ensuring that I
              receive important project updates and timely calls to action and show my support for this project. I
              am aware that personal data I provided above, will be proccessed in accordance to passtillios data policy <a style={{color:"#00eeb9"}} href="/datenschutz">link to data policy</a>. If at any point I
              wish to discontinue receiving communications, I understand that I
              can effortlessly opt out by clicking the provided link in the
              update emails or by sending an email to
              remove-me-from-contactlist@passtillios.com🤝
            </p>
            {btnPressed && agreedToJoin === false ? (
              <p className="errorP">your agreement above is required</p>
            ) : null}
          </div>

          <p></p>

          <div>
            <div class="sib-form__declaration">
              <div class="declaration-block-icon">
                <svg
                  class="icon__SVG"
                  width="0"
                  height="0"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <symbol id="svgIcon-sphere" viewBox="0 0 63 63">
                      <path
                        class="path1"
                        d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z"
                        fill="#0092FF"
                      ></path>
                    </symbol>
                  </defs>
                </svg>
                {/* <svg class="svgIcon-sphere" style="width:63px; height:63px;">
                <use xlink:href="#svgIcon-sphere"></use>
              </svg>
              <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              */}
              </div>

              <div
                style={{
                  overflow: "visible",
                  position: "relative",
                  marginBottom: 0,
                  overflow: "visible",
                }}
              >
                <img
                  src={brevoLogo}
                  style={{
                    width: "5%",
                    display: "inline-block",
                    padding: "0%",
                    top: "15%",
                    left: "5%",
                    position: "absolute",
                  }}
                ></img>
                <input
                  type="checkbox"
                  style={{
                color: "white",
                width: "10%",
                position: "absolute",
                display: "inline-block",
                left: "5%",
                top: "60%",
              }}
                  value="1"
                  id="OPT_IN"
                  name="OPT_IN"
                  onChange={(event) => {
                    setAgreedToBrevo(event.target.checked);
                    setBtnPressed(false);
                  }}
                />
                <p
                className="conditionsTxt"
                >
                  Brevo is the platform where your information will be collected
                  and managed. By submitting this form you agree that the
                  personal data you provided will be transferred to Brevo for
                  processing in accordance with Brevo's Privacy Policy.👉{" "}
                  <a
                    style={{ color: "#f90e9b" }}
                    href="https://www.brevo.com/en/legal/privacypolicy/"
                  >
                    Brevo's Privacy Policy.
                  </a>
                </p>
                {btnPressed && agreedToBrevo === false ? (
                  <p className="errorP">your agreement above is required</p>
                ) : null}
              </div>
            </div>
          </div>
          <div
            style={{
              overflow: "visible",
              marginBottom: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
           { /*<p
              style={{
                fontSize: "2vw",
                marginLeft: "20%",
                textAlign: "left",
                lineHeight: "4vw",
                marginBottom: "0%",
              }}
            >
              you human?
            </p>
            <p
              style={{
                fontSize: "2vw",
                marginLeft: "20%",
                textAlign: "left",
                lineHeight: "4vw",
                marginBottom: "5%",
              }}
            >
              🤞😜👇
            </p>
            <ReCAPTCHA
              style={{
                width: "100%",
                marginLeft: "20%",
                marginTop: "0%",
                marginBottom: "0%",
                display: "inline-block",
                overflow: "visible",
          
              }}
              size="compact"
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={(token) => {
                setRechatchaToken(token);
              }}
              onExpired={() => setRechatchaToken(null)}
              onErrored={() => setRecaptchaSuccess(false)}
            />*/}
            {/*btnPressed &&
            (recaptchaSuccess === null || recaptchaSuccess === false) ? (
              <p className="errorP">it didnt work out here</p>
            ) : null*/}
          </div>

          <div className="btnEmailListContainer">
            <Button
              id="contactBtn"
              name="count me in!"
              form="sib-form"
              type="submit"
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </main>
  );
};
export default ContactList;
