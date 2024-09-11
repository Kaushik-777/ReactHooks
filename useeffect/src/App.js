import './App.css';
import Example1 from './components/Example1/Example1';
import Example2 from './components/Example2/Example2';

function App() {
  return (
    <div className="App">
     {/* The useEffect Hook allows you to perform side effects in your components */ }
     {/* Fetching data from API */}
     {/* Directly updating the DOM */}
     {/* Timers like setTimeout and setInterval */}
     <Example1/>
     <Example2/>
    </div>
  );
}

export default App;
