import React, { useEffect, useState } from "react";
import callMe from "../public/images/contactPage/call.png";
import { Country, State, City } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";
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


  const [city, setCity] = useState({name:""}); // New state for city
  const [cityPlaceholder, setCityPlaceholder] = useState(
    "first choose a state:)"
  );
  //const [allcities, setAllCities] = useState([]);
  const [citySuggestions, setCitySuggestions] = useState([]);

  const [state, setState] = useState({name:"",isoCode:""});
  const [statePlaceholder, setStatePlaceholder] = useState(
    "great! which state in Germany?"
  );
  //const [allStates, setAllStates] = useState(State.getStatesOfCountry("DE"));
  const [stateSuggestions, setStateSuggestions] = useState(
    State.getStatesOfCountry("DE")
  );

  const [country, setCountry] = useState({name:"Germany",isoCode:"DE"});
  const [countryPlaceholder, setCountryPlaceholder] = useState(
    "no way... welcome! which country then?"
  );
  //const [allCountries, setAllCountries] = useState(Country.getAllCountries());
  const [countrySuggestions, setCountrySuggestions] = useState(
    Country.getAllCountries()
  );
  const [showInfoForCountry, setShowInfoForCountry] = useState(false);
  
  const [btnPressed, setBtnPressed] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);
  const [savingUnsuccessful, setSavingUnsuccessful] = useState(false);
  const [tooManyTries, setTooManyTries] = useState(false);
  const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [stateIsoCode, setStateIsoCode] = useState("");
  const [helperTxt, setHelperTxt] = useState("");

////recaptcha
const[recaptchaSuccess,setRecaptchaSuccess]=useState(false);
const[recaptchaFail,setRecaptchaFail]=useState(false);
const[recaptchaExpired,setRecaptchaExpired]=useState(false);
////useeffects for country,state,city
  useEffect(() => {
    console.log("i am triggered by",country.name);
    if (country.isoCode==="") {
    //setCountry.isoCode("");
    setStatePlaceholder(
      "lets first find your country;)"
    );
    } else{
      setStatePlaceholder(
        "great! which state in " + country.name+ " ?"
      );
    }
     
    

  }, [country]);

  useEffect(() => {
    console.log("state: i am triggered by",state.name);
    //handleFilteringAndSetting(newValue,Country.getAllCountries(),country,setCountry,countrySuggestions,setCountrySuggestions);
   
   
    if (state.isoCode==="") {
      setCityPlaceholder(
        "lets first find your state;)"
      );
    }else{
     setCityPlaceholder(
        "great! which city in " + state.name+ " ?"
      );
    }

  }, [state]);


 const handleRecaptcha=()=>{

 };




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

const handleSubmit = (event) => {
  event.preventDefault();
  // Füge hier deine Submit-Logik hinzu
}


  const handleClick = async (e) => {
    
    //make sure country state city are valid values othere wise set them to ""
   
    
    if (!isMobilePhone(tel, "de-DE", { strictMode: false })) {
      setTelError("Invalid phone number");
    }
    if (
      (tel !== "" && !isMobilePhone(tel, "de-DE", { strictMode: false })) ||
      !isEmail(email) ||
      email === "" ||
      name === "" ||
      city.name === ""||
      country.isoCode===""||
      state.isoCode===""
    ) {
      
      setBtnPressed(true);
    } else {
      try {
        const response = await axiosInstance.post("/api/contact/saveEmail", {
          email: email,
          name: name,
          tel: tel,
          country:country.name,
          state: state.name,
          city: city.name,
        });

        if (response.status === 200) {
          setSavedSuccessfully(true);
          console.log("Success:", response.data);
        } else {
          // Handle different HTTP status codes here
          if (response.status === 429) {
            console.log("Rate limit exceeded in right place");
          } else if (response.status === 400) {
            // Handle 400 error (validation error)
            setError(response.data.errors);
            console.error("Validation Error:", response.data.errors);
          } else {
            // Handle other errors
            console.error("Server Error:", response.data);
          }
        }
      } catch (error) {
        console.error("Validation Error:", error);
        if (error.response) {
          if (error.response.status === 429) {
            console.log("Rate limit exceeded in catch");
            setSavingUnsuccessful(true);
            setTooManyTries(true);
            setSavedSuccessfully(false);
          }  else {
            // Handle other errors
            console.error("Server Error:", error.response.data);
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
      console.log("country",country);
      if (newValue.length < country.name.length) {
        console.log("Deletion occurred");
        setCountry({name:newValue, isoCode:""});
        setStatePlaceholder("first choose the country:)");
        setState({name:"",isoCode:""});
      }
// Filter states based on the entered text (inputName,newInputValue,listTOFilter,useState_Val,set_useState_Val,setPlaceholder,suggestion_useState_Val,setSuggestions)
handleFilteringAndSetting(newValue,Country.getAllCountries(),country,setCountry,countrySuggestions,setCountrySuggestions);
      //console.log("the current state saved isssss", state);
    } else if (event.target.name === "state") {
    if(country.isoCode===""){
      setState({name:"",isoCode:""});
      setStatePlaceholder("first enter the country:)");
    }else{
    
      const newValue = event.target.value;
      // Filter states based on the entered text
      /*
      const filteredStates = State.getStatesOfCountry(countryIsoCode).filter((stateItem) => {
        return cleanString(stateItem.name).startsWith(cleanString(newValue));
      });
      */
      if (newValue.length < state.name.length) {
        setState({name:newValue,isoCode:""});
        setCityPlaceholder("first choose the state:)");
        setCity({name:""});
      }
      handleFilteringAndSetting(newValue,State.getStatesOfCountry(country.isoCode),state,setState,stateSuggestions,setStateSuggestions);
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
        console.log("iso code state is" + stateIsoCode);
        setCity({name:""});
        setCityPlaceholder("first enter the state:)");
      } else {
        // console.log("iso code should be setted " + stateIsoCode);

        const newValue = event.target.value;
        ///by deletion in city input field
        if (newValue.length < city.name.length) {
          console.log("Deletion occurred");
          setCityPlaceholder("which city are you in?");
          setCity({name:newValue});
        }
        handleFilteringAndSetting(newValue,City.getCitiesOfState(country.isoCode, state.isoCode),city,setCity,citySuggestions,setCitySuggestions);
       
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
const handleFilteringAndSetting=(newInputValue,listTOFilter,useState_Val,set_useState_Val,suggestion_useState_Val,setSuggestions)=>{
  const filteredValues = listTOFilter.filter((item) => {
    return cleanString(item.name).includes(cleanString(newInputValue));
  });
 
        ///only if there is exactly one match to the entered state set the stateIsoCode
        if (filteredValues.length === 1 && newInputValue.length >= useState_Val.name.length) {
         
          set_useState_Val(filteredValues[0]);
          setSuggestions(filteredValues);
          /*
         
          setPlaceholder(
            "great! which "+inputName+ " in " + filteredValues[0].name
          );
          */
        } else {
          if (filteredValues.length === 0 && suggestion_useState_Val.length === 1) {
            console.log("i am in fitered val 0",suggestion_useState_Val[0] );
            set_useState_Val(suggestion_useState_Val[0]);
          } else {
            console.log("no matches yet just saving" + newInputValue);
            set_useState_Val({name:newInputValue,isoCode:""});
            setSuggestions(filteredValues);
          }
        }
  

};

  return (
   
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
         <h1 className="h3  fw-normal h1contact">welcome {name? name:""}! 🎉🥳🍾</h1>
    
      </div>
     
        <div className="successContainer">
          <video className="contactListVid" autoPlay muted loop>
            <source
              src="https://passtillios-bucket-web.s3.amazonaws.com/contact/success.mp4"
              type="video/mp4"
            ></source>
          </video>
          <p className="contactListMsg">   Hey {name}! 🌟 So stoked to welcome you to the Passtillios crew! Your trust means the world to me. it will be aweome so buckel up because we're about to embark on an epic journey, collecting some incredible stories together. I'll be dropping you a welcome email soon, so keep an eye out! Take care, and get ready for the awesomeness ahead!🚀🎨✨
          </p>
        </div>
          </div>
       
)};
export default SuccessPage;
