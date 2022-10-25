import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StateTutorial from './assets/hooks/StateTutorial'
import ReducerTutorial from './assets/hooks/ReducerTutorial'
import EffectTutorial from './assets/hooks/EffectTutorial'
import RefTutorial from './assets/hooks/RefTutorial'
import LayoutEffectTutorial from './assets/hooks/LayoutEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StateTutorial/>
      <ReducerTutorial/>
      <EffectTutorial/>
      <RefTutorial/>
      <LayoutEffectTutorial/>
    </div>
  )
}

export default App
