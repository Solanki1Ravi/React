import React from "react";
import "./UserCard.css";
import ravi from "../assets/ravi.jpeg"



function UserCard(props) {
  return (
    <div className="mainContainer" style={props.style}>
      <h1 id="user-name" >{props.name}</h1>
      <img id="user-img" src={props.image} alt="img"></img>
      <p id="user-desc">{props.desc}</p>
    </div>
  );
}

export default UserCard;
