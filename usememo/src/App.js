import './App.css';
import Example from './components/Example/Example';

function App() {
  return (
    <div className="App">
     {/*The React useMemo Hook returns a memozied value.(it's like caching a value so that it dosen't need to be recalculated.)
     The useMemo Hook only  runs when one of its dependencies gets updated
     This can improve the performance of the application. There is one more hook in react to improve performance, that is useCallbackhook
     The useMemo and useCallback Hooks are similar. The main difference is:
     -useMemo returns a memozied value.
     -useCallback returns a memozied function. */}
     <Example/>
    </div>
  );
}

export default App;
