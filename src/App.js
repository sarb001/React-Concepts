import React from 'react';
import Counter from './React-Redux/Counter';
import { useDispatch } from 'react-redux';

function App() {

   const dispatch = useDispatch();    
   // used  to dispatch an Action 

  return (
    <div className="App">
         <h2> Counter App  </h2>
          <div className="main-portion">
              <button onClick={() => dispatch({type:"INCREMENT"})}> Increment++ </button>
              <Counter />
              <button onClick={() => dispatch({type:"DECREMENT"})}> Decrement--  </button>
          </div>
    </div>

  );
}

export default App;
