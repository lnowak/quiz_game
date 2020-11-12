import { useState } from "react";

const QuestionArea = ({que, index, pageNo, setPageNo, score, setScore}) => {

    const [isCorrect, setIsCorrect] = useState(true)

    const encode = mystring => {
        return mystring.replace(/&ouml;/g, 'o').replace(/&lrm;/g, '').replace(/&oacute;/g, 'o').replace(/&auml;/g, 'a').replace(/&quot;/g, '"').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&euml;/g, "e").replace(/&hellip;/g, '...').replace(/&#039;/g, "'").replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'").replace(/&amp;/g, "&").replace(/&‌pi/g, "π").replace(/&shy;/g, "");
    }
    let question = encode(que.question);

    const answers = [que.correct_answer];
    que.incorrect_answers.map(e => {
        answers.push(e);
        answers.sort();
        return answers
    });

    const choseAnswer = e => {
        setIsCorrect(() => false);
        if (e.target.dataset.id === que.correct_answer) {
            console.log(e.target.innerText, que.correct_answer, 'dobrze');
            setScore(() => score + 1);
            e.target.className = 'correct'
        } else {
            e.target.className = 'incorrect';
        };
        setTimeout(() => {
            setPageNo(() => pageNo + 1);
        }, 500);

    }

    return (
        <div className={index === pageNo ? 'questionsArea' : 'hidden'}>
            <p className='questionsArea__question'>{question}</p>
            <div className='questionsArea__answers'>
                {answers.map(e => {
                    const answer = encode(e)
                    return <button key={e} data-id={e} disabled={isCorrect ? false : true} className={`${e === que.correct_answer && !isCorrect ? 'correct': 'questionsArea__answers__item '}`} onClick={choseAnswer}>{answer}</button>
                })}
                {/* <button style={{height: '25px', width: '50px'}} onClick={() => setPageNo(() => pageNo + 1)}>+</button>
                <button style={{height: '25px', width: '50px'}} onClick={() => setPageNo(() => pageNo - 1)} >-</button> */}
            </div>
        </div>
    )
}

export default QuestionArea