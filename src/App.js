import React from 'react';
import './App.css';

import swordImg from './assets/sword.png';

function App() {
  return (
    <div id="landing-page">
      <header>
        <img src={swordImg} alt="Espada"/>
        <h1>SUPERGIANTGAMES</h1>
      </header>
    </div>
  );
}

export default App;
