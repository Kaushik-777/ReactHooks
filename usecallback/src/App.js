import './App.css';
import Example from './components/Example/Example';

function App() {
  return (
    <div className="App">
     {/* useCallback is a React Hook that lets you cache a function definition between re-renders.
     It means, when we use the useCallback Hook, it dosen't create multiple instance of same function when re-render happens.
     isntead of creating new instance of the function, it provides the cached on re-render of the component */}
     <Example/>
    </div>
  );
}

export default App;
