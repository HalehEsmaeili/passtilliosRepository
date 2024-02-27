import React, { useEffect, useState } from "react";
import callMe from "../public/images/contactPage/call.png";
import { Country, State, City } from "country-state-city";

const InputHelper = (props) => {
  const[inputHelperIntstruction,setInputHelperIntstruction]=useState("ok! you type, I search for top matches, you click! type the english name of your");
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
        }}
      >{(props.conditionsFullfilled?
      
      
      <div    style={{
                marginBottom: 0,
              }}>
    
     <h4 style={{marginLeft:"5%",marginRight:"5%",color:"white"}} >{inputHelperIntstruction}  {props.currentInput}</h4>
        {props.arrayofSuggestions.length > 0 &&
        props.arrayofSuggestions.length < 15 ? (
          <div style={{marginBottom:0}}>
           
            {props.arrayofSuggestions.map((item) => (
              <button
              onClick={()=>props.setValue(item)}
                key={item.isoCode}
                style={{
                  border: "none",
                  marginLeft: "1%",
                  backgroundColor: "#f90ee7",
                  /* Add any other styles as needed */
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
          <div>"..."</div>
        )}
</div>
        : <h4 style={{color:"white"}} >first fill the field above</h4>)}
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
