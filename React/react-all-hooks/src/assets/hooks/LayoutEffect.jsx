import React from "react";
import axios from "axios";
import { useLayoutEffect, useState, useEffect } from "react";
import { useRef } from "react";

function LayoutEffectTutorial() {

   const inputRef = useRef(null)
  
    useEffect(() => {
            console.log(inputRef.current.value);
      }, []); 
      
      useLayoutEffect(() => {
            inputRef.current.value = 'Galego'
      }, []); // If u don`t pass it will execute in every re-render, passing [] render only one time and passing de state you want to watch it renders in changes of this state
  
    return <input ref={inputRef} value="Gabriel"/>;
}

export default LayoutEffectTutorial;
