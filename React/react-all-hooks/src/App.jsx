import React from 'react';
import './App.css';
import StateTutorial from './assets/hooks/StateTutorial';
import ReducerTutorial from './assets/hooks/ReducerTutorial';
import EffectTutorial from './assets/hooks/EffectTutorial';
import RefTutorial from './assets/hooks/RefTutorial';
import LayoutEffectTutorial from './assets/hooks/LayoutEffect';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
    </div>
  );
}

export default App;
