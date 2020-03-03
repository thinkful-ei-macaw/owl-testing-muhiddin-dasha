import React from 'react';
import ParticipantsList from './ParticipantsList';
import './App.css';
import { participants } from './participantsStore';

function App() {
  return (
    <main className='App'>
      <div className='App-list'>
        {participants.map(participant => (
          <ParticipantsList
            key={participant.id}  name={participant.name}
            avatar = {participant.avatar} inSession={participant.inSession} onStage={participant.onStage}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
