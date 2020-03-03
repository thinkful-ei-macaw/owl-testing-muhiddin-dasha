import React from "react";
import participants from "./participantsStore";

export default function displayParticipants(props) {
  return (
    <div className="participants">
      <ul className="participants">
        {props.participants.map(participant => (
          <li key={participant.id} name={participant.name}
           avatar = {participant.avatar} insession={participant.inSession} onstage={participant.onstage}>
          </li>
        ))}
      </ul>
    </div>
  );
}
