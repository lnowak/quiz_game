import {useState} from 'react';


import './App.css';


import WelcomeScreen from './Components/WelcomeScreen';
import MainScreen from './Components/MainScreen'

function App() {

  const [mainActive, setmainActive] = useState(false)

  return (
    <div className="App">
      <WelcomeScreen />
      <MainScreen />
    </div>
  );
}

export default App;
