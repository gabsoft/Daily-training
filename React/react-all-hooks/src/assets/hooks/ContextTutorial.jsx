import React, { useState, useMemo } from 'react';
import AppContext from './Context';
import Login from './Login';
import User from './User';

function ContextTutorial() {
  const [username, setUsername] = useState('Galego');

  const value = useMemo(() => ({
    username, setUsername,
  }), [username]);

  return (
    <AppContext.Provider value={value}>
      <Login />
      {' '}
      <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;
