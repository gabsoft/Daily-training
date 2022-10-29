import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EffectTutorial() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
      });
  }, []); // If u don`t pass it will execute in every re-render, passing [] render only one time
  // and passing de state you want to watch it renders in changes of this state

  return (
    <div>
      EffectTutorial
      { data }
    </div>
  );
}

export default EffectTutorial;
