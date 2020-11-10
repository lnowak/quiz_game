import {useState} from 'react';

import QuestionArea from './QuestionArea'

const MainScreen = ({isScreenActive, setIsScreenActive, questions}) => {

    // console.log(questions.results)

    const [pageNo, setPageNo] = useState(0)

    let quest;
    if (questions){
        quest = questions.results.map((item, index) => {
            return <QuestionArea key={item.question} que={item} index={index} pageNo={pageNo} setPageNo={setPageNo} />
        });
    }

    return (
        <div className={isScreenActive === 3 ? 'mainScreen' : 'hidden'}>
            {quest}
        </div>
    )
}

export default MainScreen