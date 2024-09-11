import './App.css';
import Example from './components/Example/Example';
import Example1 from './components/Example1/Example1';

function App() {
  return (
    <div className="App">
    {/* useRef is a react hook that allows us to create mutabe variables, which will not re-render the component
    useRef is also used for accessing DOM elements */}
    <Example1/>
    <Example/>
    </div>
  );
}

export default App;
