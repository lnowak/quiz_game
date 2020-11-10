import {useState, useEffect} from 'react';

import './App.css';

import WelcomeScreen from './Components/WelcomeScreen';
import MainScreen from './Components/MainScreen'

function App() {

  const [categories, setCategories] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      setCategories(data)
    })
  }, [])

  return (
    <div className="App">
      <WelcomeScreen categories={categories} setChosenCategory={setChosenCategory} chosenCategory={chosenCategory}/>
      <MainScreen />
    </div>
  );
}

export default App;
