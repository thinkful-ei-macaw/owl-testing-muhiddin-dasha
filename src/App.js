import React from 'react';
import ParticipantsList from './ParticipantsList';
import Stage from './Stage';
import ChatLog from './ChatLog';
import './App.css';
import { participants } from './participantsStore';
import {chatEvents} from './chatEvents';

function App() {
  return (
    <main className='App'>
      <div className='participantsList'>
        {participants.map(participant => (
          <ParticipantsList
            key={participant.id}  name={participant.name}
            avatar = {participant.avatar} inSession={participant.inSession} onStage={participant.onStage}
          />
        ))}
      </div>
      <div className="stage">
      {participants.map(participant => (
          <Stage
            key={participant.id}  name={participant.name}
            avatar = {participant.avatar} inSession={participant.inSession} onStage={participant.onStage}
          />
        ))}
      </div>
      {/* <div className="chatlog">
      {participants.map(participant => (
          <ChatLog
            key={participant.id}  name={participant.name} message={participant.message} type={participant.type} 
            avatar = {participant.avatar} inSession={participant.inSession} onStage={participant.onStage}
          />
        ))}
      </div> */}
    </main>
  );
}

export default App;
