import React from 'react';
import './App.css';

import swordImg from './assets/sword.png';
import heroImg from './assets/hero.png';

function App() {
  return (
    <div id="landing-page">
      <header>
        <img src={swordImg} alt="Espada"/>
        <h1>SUPERGIANTGAMES</h1>
      </header>

      <main>
        <section id="section-01">
          <div className="contain-hero">
            <h2>TRANSISTOR - RED THE SINGER</h2>
            <img src={heroImg} alt="Hero" />
            <p>"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
