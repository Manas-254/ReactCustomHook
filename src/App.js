import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CustomHook1 from './components/CustomHook1';

function App() {
  return (
    <div className="App">
     <CounterOne/>
     <CounterTwo/>
     <CustomHook1/>
    </div>
  );
}

export default App;
