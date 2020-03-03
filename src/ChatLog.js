import React from "react";


export default function displayChat(props) {
  return (
    <li>
      {props.participantId}
    {props.type}
    {props.message}
    {new Date(props.time)}
    {new Date(props.timestamp)}
    </li>
  );
}