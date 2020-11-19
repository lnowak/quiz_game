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
            {/* <div className='screen__name'>
                <svg viewBox="0 0 500 500">
                    <path id="curve" d="M72.2,148.6c4-6.1,65.5-6.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text className='lkl' width="500">
                        <textPath href="#curve">
                            Quiz Game
                        </textPath>
                    </text>
                </svg>
            </div> */}
            <div className='logo screen__logo'></div>
            {quest}
            <ScoreScreen setChosenCategory={setChosenCategory} pageNo={pageNo} setPageNo={setPageNo} score={score} setScore={setScore} setIsScreenActive={setIsScreenActive}/>
        </div>
    )
}

export default MainScreen