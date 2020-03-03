import React from "react";
import "./stage.css";

export default function displayStage(props) {
  let stage;
  if (props.onStage) {
    stage = <div>
      <img src={props.avatar} /> <p>On stage</p>
      </div>
  }
  return (
    <li>
      {stage}
    </li>
  );
}