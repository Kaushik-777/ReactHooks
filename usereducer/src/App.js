import './App.css';
import Example from './components/Example/Example';

function App() {
  return (
    <div className="App">
     {/* useReducer is similar to useState, But instead of providing state & setter function. It provides state and dispatch function
     The useReducer Hook accepts two arguments:
     --Reducer function
     --initial state
     and Returns: Current state and dispatch method
     The reducer function specifies the state gets updated. */}
     <Example/>
    </div>
  );
}

export default App;
