import React, { useState } from 'react';

function StateTutorial() {
  const [count, setCounter] = useState(0);
  const handleButtton = () => {
    setCounter(count + 1);
  };
  return (
    <>
      <h2>State Tutorial</h2>
      <div>{count}</div>
      <button type="button" onClick={handleButtton}>Increment</button>
    </>
  );
}

export default StateTutorial;
