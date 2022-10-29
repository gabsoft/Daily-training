import React, { useReducer } from 'react';

// An alternative to useState with multiple states

function ReducerTutorial() {
  // const [count, setCounter] = useState(0);
  // const [showText, setShowText] = useState(true)

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1,
          showText: state.showText,
        };
      case 'TOOGLESHOWTEXT':
        return {
          count: state.count,
          showText: !state.showText,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <>
      <h2>Reducer Tutorial</h2>
      <div>{state.count}</div>
      {state.showText && <div>This is a text</div>}
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'TOOGLESHOWTEXT' });
        }}
      >
        Increment
      </button>
    </>
  );
}

export default ReducerTutorial;
