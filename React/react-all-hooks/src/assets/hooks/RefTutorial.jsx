import React, { useRef } from 'react';

function RefTutorial() {
  const inputRef = useRef(null);

  const handleClick = () => {
  };

  return (
    <div>
      <h1>Galego</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button type="button" onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
