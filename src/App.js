import {useState, useEffect} from 'react';

import './App.css';

import WelcomeScreen from './Components/WelcomeScreen';
import ChoiceScreen from './Components/ChoiceScreen'
import MainScreen from './Components/MainScreen'

function App() {

  const [categories, setCategories] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(false);
  const [questions, setQuestions] = useState(false)
  const [isScreenActive, setIsScreenActive] = useState(1);
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      setCategories(data)
    })
    .catch(err => {
      console.log(err)
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

  return (
    <div className="App">
      <WelcomeScreen isScreenActive={isScreenActive} setIsScreenActive={setIsScreenActive}/>
      <ChoiceScreen isScreenActive={isScreenActive} setIsScreenActive={setIsScreenActive} categories={categories} setChosenCategory={setChosenCategory} chosenCategory={chosenCategory} />
      <MainScreen isScreenActive={isScreenActive} setIsScreenActive={setIsScreenActive} questions={questions} score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
