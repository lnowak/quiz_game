import React, {useState} from 'react';


const WelcomeScreen = () => {

    return (
        <div className='welcomeScreen'>
            
            <div className='welcomeScreen__name'>
                <svg viewBox="0 0 500 500">
                    <path id="curve" d="M72.2,148.6c4-6.1,65.5-6.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text className='lkl' width="500">
                        <textPath href="#curve">
                            Quiz Game
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className='logo'></div>
            <div className='welcomeScreen__chooseMenu'>
                
            </div>
            <button className='welcomeScreen__button'>Play</button>
        </div>
    )
}

export default WelcomeScreen