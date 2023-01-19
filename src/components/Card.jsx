import patternDividerDesktop from '../assets/pattern-divider-desktop.svg';
import patternDividerMobile from '../assets/pattern-divider-mobile.svg';
import iconDecide from '../assets/icon-dice.svg';

const Card = () => {
    /* <source media='(max-width: 767px)' srcSet={patternDividerMobile} />
            <source media='(min-width: 768px)' srcSet={patternDividerDesktop} /> */
  return (
    <div className='advice__card'>
        <div className='card__body'>
            <div className='body__title'>    
                <h1>ADVICE #117</h1>
            </div>
            <div className='body__quote'>
                <p>
                    "It is easy to sit up and take
                    notice, what's difficult is getting
                    up and taking action."
                </p>
            </div>
            <div className='body__divider'>
                <picture className='divider__picture'>
                    <img src={patternDividerDesktop} alt='divider' />
                </picture>
            </div>
            <div className='body__button'>
                <button>
                    <img src={iconDecide} alt='decide' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card