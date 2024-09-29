import React from 'react';
import RandomFacts from './RandomFacts';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function onButtonClick() {
    navigate('/login');
  }

  return (
    <div>
      <h1>Company goal and mission statement</h1>
      <h2>Brief explanation of TNR</h2>
      <RandomFacts />
      <button onClick={() => onButtonClick()}>Get started with us</button>
      <button>Meet the cats</button>
    </div>
  );
}

export default HomePage;
