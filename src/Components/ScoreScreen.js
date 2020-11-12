const ScoreScreen = ({que, index, pageNo, setPageNo, setIsScreenActive, score, setScore}) => {
    console.log(pageNo)

    return (
        <div className={pageNo === 10 ? 'questionsArea' : 'hidden'}>
            Your score is {score}/10
        </div>
    )
}

export default ScoreScreen