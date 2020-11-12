import { CircleToBlockLoading } from 'react-loadingg';

const ChoiceScreen = ({categories, setChosenCategory, chosenCategory, isScreenActive, setIsScreenActive}) => {

    const chooseCategory = e => {
        setChosenCategory(e.target.dataset.id);
    }

    let category_buttons;
    if (categories){
        category_buttons = categories.trivia_categories.map(item => <button className={`choiceScreen__chooseMenu__button ${Number(item.id) === Number(chosenCategory) ? 'choiceScreen__chooseMenu__button--checked' : ''}`} key={item.id} data-id={item.id} onClick={chooseCategory}>{item.name}</button>)
    }

    return (
        <div className={isScreenActive === 2 ? 'choiceScreen' : 'hidden'}>
            <div className='screen__name'>
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
            <p className={categories ? 'categoryPick' : 'hidden'}>Choose Category</p>
            <div className={categories ? 'choiceScreen__chooseMenu' : 'hidden'}>
                {category_buttons}
            </div>
            <div className={categories ? 'hidden' : 'loading'} >
                <CircleToBlockLoading color='white' />
            </div>
            <button className={chosenCategory ? 'choiceScreen__button button' : 'choiceScreen__button--hidden'} disabled={chosenCategory ? false : true} onClick={() => {setIsScreenActive(3)}}>Play</button>
        </div>
    )
}

export default ChoiceScreen