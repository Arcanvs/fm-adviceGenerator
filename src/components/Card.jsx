import patternDividerDesktop from '../assets/pattern-divider-desktop.svg';
import patternDividerMobile from '../assets/pattern-divider-mobile.svg';
import iconDecide from '../assets/icon-dice.svg';
import useApiAdvice from '../hooks/useApiAdvice';
import { useState, useEffect } from 'react';

const Card = () => {
    const [dataApi, setDataApi] = useState([]);
    const [callAPI, setCallAPI] = useState(true);
    const [loading, error] = useApiAdvice('https://api.adviceslip.com/advice', setDataApi, callAPI);
    const handleClick = () => {
        setCallAPI(true)
    }
    useEffect(() => {
        setCallAPI(false);
    }, [callAPI])
    /* <source media='(max-width: 767px)' srcSet={patternDividerMobile} />
            <source media='(min-width: 768px)' srcSet={patternDividerDesktop} /> */
    /* 
        <p>
            "It is easy to sit up and take
            notice, what's difficult is getting
            up and taking action."
        </p>
    */
  return (
    <div className='advice__card'>
        <div className='card__body'>
            <div className='body__title'>    
                <h1>ADVICE #{dataApi.slip.id}</h1>
            </div>
            <div className='body__quote'>
                <p>
                    {dataApi.slip.advice}
                </p>
            </div>
            <div className='body__divider'>
                <picture className='divider__picture'>
                    <img src={patternDividerDesktop} alt='divider' />
                </picture>
            </div>
            <div className='body__button'>
                <button onClick={handleClick}>
                    <img src={iconDecide} alt='decide' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card