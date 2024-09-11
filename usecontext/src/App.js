import './App.css';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
    {/* useContext is React Hook that allows you access data from any component without explicity passing it down through props at every level.
    useContext is used to manage global data in the React App. */}
    <Profile/>
    <Footer/>
    </div>
  );
}

export default App;
