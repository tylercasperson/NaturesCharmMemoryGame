import React from 'react';
import './style.css';

function Picture(props) {
  return (
    <button className="card border-primary border-dark pictureCard" onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
}

export default Picture;
