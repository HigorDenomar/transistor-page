import React, { useState, useRef } from 'react';
import {
  FiChevronLeft as ArrowLeft,
  FiChevronRight as ArrowRight,
  FiChevronUp as ArrowUp,
  FiChevronDown as ArrowDawn,
} from 'react-icons/fi';

import Card from './components/Card';

import swordImg from './assets/sword.png';
import heroImg from './assets/hero.png';
import person01Img from './assets/person-01.png';
import person02Img from './assets/person-02.png';
import person03Img from './assets/person-03.png';
import featherImg from './assets/feather.png';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const cardsRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Sua mensagem foi enviada com sucesso!\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  }
  return (
    <div id="landing-page">
      <header>
        <img src={swordImg} alt="Espada" />
        <h1>SUPERGIANTGAMES</h1>
      </header>

      <main>
        <section id="first-section">
          <div className="contain-hero">
            <h2>TRANSISTOR - RED THE SINGER</h2>
            <img src={heroImg} alt="Hero" />
            <p>"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</p>

            <img src={featherImg} className="feather" id="feather01" alt=""/>
            <img src={featherImg} className="feather" id="feather02" alt=""/>
            <img src={featherImg} className="feather" id="feather03" alt=""/>
            <img src={featherImg} className="feather" id="feather04" alt=""/>
          </div>
          <div
            id="scroll_to"
            onClick={() => {
              window.scrollTo(0, cardsRef.current.offsetTop);
            }}
          />
          <ArrowDawn />
        </section>

        <section ref={cardsRef} id="section-cards">
          <ArrowLeft />
          <div className="cards">
            <Card
              id="card01"
              description="A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão."
              src={person01Img}
            />
            <Card
              id="card02"
              description="Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura."
              src={person02Img}
            />
            <Card
              id="card03"
              description='Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.'
              src={person03Img}
            />
          </div>
          <ArrowRight />
        </section>
        
        <section id="section-form">
          <form onSubmit={handleSubmit}>
            <h1>Formulário</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div id="inputs">
              <input
                type="text"
                placeholder="Nome"
                required
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              
              <textarea
                name="message"
                placeholder="Mensagem"
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />

              <button type="submit">Enviar</button>
            </div>
          </form>
        </section>

        <footer>
          <div id="circle" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <ArrowUp />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
