import React from 'react'
import { useRef } from 'react'

function RefTutorial() {
  const inputRef = useRef(null)
  
  const handleClick = (e) => {
    console.log(inputRef.current.value)
  }

  return (
    <div>
        <h1>Galego</h1>
        <input type="text" placeholder="Ex..." ref={inputRef}/>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial