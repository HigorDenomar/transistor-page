import React from 'react';
import {
  FiChevronLeft as ArrowLeft,
  FiChevronRight as ArrowRight,
} from 'react-icons/fi';

import Card from './components/Card';

import swordImg from './assets/sword.png';
import heroImg from './assets/hero.png';
import person01Img from './assets/person-01.png';
import person02Img from './assets/person-02.png';
import person03Img from './assets/person-03.png';

import './App.css';

function App() {
  return (
    <div id="landing-page">
      <header>
        <img src={swordImg} alt="Espada"/>
        <h1>SUPERGIANTGAMES</h1>
      </header>

      <main>
        <section id="first-section">
          <div className="contain-hero">
            <h2>TRANSISTOR - RED THE SINGER</h2>
            <img src={heroImg} alt="Hero" />
            <p>"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</p>
          </div>
        </section>

        <section id="section-cards">
          <div className="cards">
            <ArrowLeft />
            <Card
              description="A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão."
              src={person01Img}
            />
            <Card
              description="Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura."
              src={person02Img}
            />
            <Card
              description='Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.'
              src={person03Img}
            />
            <ArrowRight />
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;
