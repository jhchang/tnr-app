import { useState, useEffect } from 'react';

const facts = [
  'cat fact #1',
  'cat fact #2',
  'cat fact #3',
  'cat fact #4',
  'cat fact #5',
  'cat fact #6',
];

export default function RandomFacts() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex(i => (i + 1) % facts.length),
      2000,
    );
    return () => clearInterval(timerId);
  }, []);

  return <div>{facts[index]}</div>;
}
