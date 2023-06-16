// import {useState} from 'react'
// import './card.css';

export default function GreeterB({values}) {
  const randInx = Math.floor(Math.random()*values.length);
  const randEl = values[randInx];
  return (
    <div >values from GreetB: {randEl}</div>
  );
}
