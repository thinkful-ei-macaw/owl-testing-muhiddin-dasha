import React from "react";
import './chatLog.css'


export default function displayChat(props) {
  return (
    <div>
      {props.name} 
      {props.type} |
      {props.message} | 
      {Date(props.time)}<hr />
    </div>
  );
}
