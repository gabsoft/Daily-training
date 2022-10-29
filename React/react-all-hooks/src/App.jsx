import React from 'react';
import './App.css';
import StateTutorial from './assets/hooks/StateTutorial';
import ReducerTutorial from './assets/hooks/ReducerTutorial';
import EffectTutorial from './assets/hooks/EffectTutorial';
import RefTutorial from './assets/hooks/RefTutorial';
import LayoutEffectTutorial from './assets/hooks/LayoutEffect';
import ContextTutorial from './assets/hooks/ContextTutorial';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ContextTutorial />
    </div>
  );
}

export default App;
