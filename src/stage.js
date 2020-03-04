import React from "react";
import "./stage.css";

export default function displayStage(props) {
  let stage;
  if (props.onStage) {
  stage = <div><p>{props.name}</p>
      <img src={props.avatar} /> <p>On stage</p><hr />
      </div>
  }
  return (
    <li>
      {stage}
    </li>
  );
}