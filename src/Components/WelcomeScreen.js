import React, {useState} from 'react';


const WelcomeScreen = ({categories}) => {

    const [checked, setChecked] = useState(false)

    const categoryChoose = () => {
        setChecked(true)
    }

    let category_buttons;
    if (categories){
        category_buttons = categories.trivia_categories.map(item => <button className='welcomeScreen__chooseMenu__button' key={item.id} data-id={item.id}>{item.name}</button>)
    }

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
                {category_buttons}
            </div>
            <button className='welcomeScreen__button'>Play</button>
        </div>
    )
}

export default WelcomeScreen