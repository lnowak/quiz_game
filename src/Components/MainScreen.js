import {useState} from 'react';

import QuestionArea from './QuestionArea'
import ScoreScreen from './ScoreScreen'

const MainScreen = ({isScreenActive, setIsScreenActive, questions, score, setScore, setChosenCategory}) => {

    const [pageNo, setPageNo] = useState(0)

    let quest;
    if (questions){
        quest = questions.results.map((item, index) => {
            return <QuestionArea key={item.question} que={item} index={index} pageNo={pageNo} setPageNo={setPageNo} setIsScreenActive={setIsScreenActive} score={score} setScore={setScore}/>
        });
    }

    return (
        <div className={`${isScreenActive === 3 ? 'mainScreen' : 'hidden'}`}>
            <div className='logo screen__logo'></div>
            {quest}
            <ScoreScreen setChosenCategory={setChosenCategory} pageNo={pageNo} setPageNo={setPageNo} score={score} setScore={setScore} setIsScreenActive={setIsScreenActive}/>
        </div>
    )
}

export default MainScreen