const ScoreScreen = ({pageNo, setPageNo, setIsScreenActive, score, setScore, setChosenCategory}) => {

    const playNewGame = () => {
        setPageNo(() => 0);
        setIsScreenActive(() => 1);
        setScore(() => 0)
        setChosenCategory(() => false)
    }

    return (
        <div className={pageNo === 10 ? 'questionsArea' : 'hidden'}>
            <div className='scoreScreen__scoreArea'>
                <p>Final score</p> 
                <p>{score}/10</p>
            </div>
            <button className='button scoreScreen__button' onClick={playNewGame}>Play New Game</button>
        </div>
    )
}

export default ScoreScreen