const QuestionArea = ({que, index, pageNo, setPageNo}) => {

    // console.log(index, que)
    const encode = mystring => {
        console.log(mystring)
        return mystring.replace(/&quot;/g, /"/);
    }
    encode(que.question);
    console.log(que.question);
    return (
        <div className={index === pageNo ? '' : 'hidden'}>
            <p>{que.question}</p>
            <p>{que.correct_answer}</p>
            {que.incorrect_answers.map(e => <p>{e}</p>)}
            <button onClick={() => setPageNo(pageNo + 1)} style={{height: '50px', width: '100px'}}>+</button>
        </div>
    )
}

export default QuestionArea