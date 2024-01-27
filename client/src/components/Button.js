
import React, {useEffect,useState} from "react";
import "./button.css";
import "../public/intro.css";
function Button(props){
    return (
        <button id={props.id} onClick={()=>props.handleClick()} className="button-64" role="button"><span class="text">{props.name}</span></button>
    );
}
export default Button;
