import patternDividerDesktop from '../assets/pattern-divider-desktop.svg';
import patternDividerMobile from '../assets/pattern-divider-mobile.svg';

const PictureDivider = () => {
  return (
    <picture className='divider__picture'>
        <source media='(max-width: 767px)' srcSet={patternDividerMobile} />
        <source media='(min-width: 768px)' srcSet={patternDividerDesktop} />
        <img src={patternDividerDesktop} alt='divider' />
    </picture>
  )
}

export default PictureDivider