import React, { useEffect, useState } from "react";
import callMe from "../public/images/contactPage/call.png";
import { Country, State, City } from "country-state-city";

const InputHelper = (props) => {
  const[inputHelperIntstruction,setInputHelperIntstruction]=useState("you type, I search for top matches, you click! deal? ;) now type the english name of your");
  const[showInputHelperIntstruction,setShowInputHelperIntstruction]=useState(true);
  return (
    <div
      style={{
        overflow: "visible",
        width: "100%",
        position: "relative",
        paddingTop: "0%",
      }}
    >
      <div
        style={{
          marginBottom: "0%",
          marginLeft: "5%",
          marginRight: "10%",
          textAlign: "center",
          overflow:"visible"
        }}
      >{(props.conditionsFullfilled?
      
      
      <div    style={{
                marginBottom: 0,
                overflow:"visible",
              }}>
    
     <h4 style={{marginLeft:"10%",marginRight:"2%",color:"white",fontSize:"1.9vw",lineHeight:"4.3vw"}} >{inputHelperIntstruction}  {props.currentInput}</h4>
        {props.arrayofSuggestions.length > 0 &&
        props.arrayofSuggestions.length < 25 ? (
          <div style={{overflow:"visible",width: "100%",marginLeft:"5%",marginRight:"0%",marginBottom:0}}>
           
            {props.arrayofSuggestions.map((item) => (
              <button
              onClick={()=>props.setValue(item)}
                key={item.isoCode}
                style={{
               fontSize:"2vw",
                  border: ".5vw solid #f90ee7",
                  padding:"1% 1%",
                  marginLeft: "1%",
                  marginBottom: "1%",
                  color:"white",
                  fontWeight:"400",
                  backgroundColor: "#5b42f3",
                  /* "#f90ee7" Add any other styles as needed */
                }}
                type="button"
                className="btn btn-primary"
                //onClick={() => propssetShowInfoForState((prevShowInfo) => !prevShowInfo)}
              >
                {item.name}
              </button>
            ))}
          </div>
        ) : (
          <div></div>
        )}
</div>
        : <h4  style={{marginLeft:"15%",marginRight:"2%",color:"white",fontSize:"1.9vw",lineHeight:"4.3vw"}} >first fill the field above</h4>)}
      </div>
{  /* <img
        style={{
          ziIndex: 1,
          width: "30%",
          position: "absolute",
          top: "100%",
          left: "50%",
        }}
        src={callMe}
      ></img>*/}
      <label htmlFor="state" className="form-label"></label>
    </div>
  );
};
export default InputHelper;
