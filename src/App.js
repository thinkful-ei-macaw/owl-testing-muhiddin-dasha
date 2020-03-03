import React from 'react';
import logo from './logo.svg';
import ParticipantsList from './ParticipantsList';
import './App.css';
import { participants } from './participantsStore';

function App() {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Recreate Owl and Testing!</h1>
      </header>
      <div className='App-list'>
        {participants.map(list => (
          <ParticipantsList
            key={list.id}
            header={list.header}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
