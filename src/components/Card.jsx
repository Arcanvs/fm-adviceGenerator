import iconDecide from '../assets/icon-dice.svg';
import useApiAdvice from '../hooks/useApiAdvice';
import { useState, useEffect } from 'react';
import PictureDivider from './PictureDivider';

const Card = () => {
    const [dataApi, setDataApi] = useState([]);
    const [callAPI, setCallAPI] = useState(true);
    const [loading, error] = useApiAdvice('https://api.adviceslip.com/advice', setDataApi, callAPI);
    
    const handleClick = () => {
        setCallAPI(true)
    }

    useEffect(() => {
        setCallAPI(false);
    }, [callAPI]);

    return (
        <div className='advice__card'>
            <div className='card__body'>
                <div className='body__quote'>
                    <h1>
                        ADVICE { loading ? 
                                <span className='showloading'>
                                    <ion-icon name="sync-outline"></ion-icon>
                                </span> : 
                                `#${dataApi.slip.id}`}</h1>
                    <p>{ loading ? 
                         <span className='showloading'>
                             <ion-icon name="sync-outline"></ion-icon>
                         </span> : 
                         `"${dataApi.slip.advice}"`}
                    </p>
                </div>
                <div className='body__button'>
                    <PictureDivider />
                    <button onClick={handleClick}>
                        <img src={iconDecide} alt='decide' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card