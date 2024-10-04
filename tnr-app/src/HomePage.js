import React from 'react';
import RandomFacts from './RandomFacts';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center p-8'>
        Company goal and mission statement
      </h1>
      <h2 className='rounded-md border-4 py-2 px-4 text-center my-8'>
        Brief explanation of TNR
      </h2>
      <RandomFacts />
      <div className='justify-center flex space-x-20 my-8'>
        <Button onClick={handleLogin}>Get started with us</Button>
        <Button>Meet the cats</Button>
      </div>
    </div>
  );
}

export default HomePage;
