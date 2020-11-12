const WelcomeScreen = ({ isScreenActive, setIsScreenActive}) => {


    return (
        <div className={isScreenActive === 1 ? 'welcomeScreen' : 'hidden'} >
            <div className='screen__name welcomeScreen__name'>
                <svg viewBox="0 0 500 500" className='name'>
                    <path id="curve" d="M72.2,148.6c4-6.1,65.5-6.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text>
                        <textPath href="#curve">
                            Quiz Game
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className='welcome__logo logo'></div>
            <button className='welcomeScreen__button button' onClick={() => {setIsScreenActive(2)}}>Let's play</button>
        </div>
    )
}

export default WelcomeScreen