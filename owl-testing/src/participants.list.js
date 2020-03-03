import React from "react";
import store from "./store";

export default function displayParticipants(props) {
  return (
    <div className="participants">
      <h2>{props.store.name}</h2>
      <ul className="person-favorite-things">
        {props.store.participants.map(participant => (
          <li key={participant.id}>{participant.name}</li>
        ))}{" "}
      </ul>
    </div>
  );
}
