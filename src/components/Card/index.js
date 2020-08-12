import React from 'react';

import './styles.css';

function Card(props) {
  return (
    <div className="card">
      <div className="person-container">
        <div className="hidden">
          <img src={props.src} alt={props?.alt}/>
        </div>
      </div>

      <p>{props.description}</p>
    </div>
  );
}

export default Card;