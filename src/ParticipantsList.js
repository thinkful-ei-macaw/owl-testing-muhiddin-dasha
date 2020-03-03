import React from "react";
import "./participantsList.css";

export default function displayParticipants(props) {
  let session, stage;
  if (props.inSession) {
    session = <p>In session</p>;
  } else {
    session = <p>Left</p>;
  }
  if (props.onStage) {
    stage = <p>On stage</p>;
  }
  return (
    <li>
      {props.id} {props.name}
      <img src={props.avatar} />
      {session} {stage}
    </li>
  );
}
