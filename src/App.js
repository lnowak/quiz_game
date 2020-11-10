import {useState, useEffect} from 'react';

import './App.css';

import WelcomeScreen from './Components/WelcomeScreen';
import ChoiceScreen from './Components/ChoiceScreen'
import MainScreen from './Components/MainScreen'

function App() {

  const [categories, setCategories] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(false);
  const [questions, setQuestions] = useState(false)

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      setCategories(data)
    })
  }, [])
  
  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${chosenCategory}&type=multiple`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      setQuestions(data)
    })
  }, [chosenCategory]);

  console.log(questions);

  return (
    <div className="App">
      <WelcomeScreen categories={categories} setChosenCategory={setChosenCategory} chosenCategory={chosenCategory} />
      <ChoiceScreen categories={categories} setChosenCategory={setChosenCategory} chosenCategory={chosenCategory} />
      <MainScreen />
    </div>
  );
}

export default App;
