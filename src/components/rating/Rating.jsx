import './Rating.css';
import starSolid from '../../assets/images/star-solid.svg';
import star from '../../assets/images/star-regular.svg';


function Rating({ children }) {

    const roundNumber = Math.round(children);
    const diference = 5 - roundNumber;
    const stars = (number, starIcon) => {
        return [...Array(number)].map((_, index) => {
            return <img key={index} src={starIcon} alt='start image' className='star' />
        });
    }

  return (
    <div className='rating'>
        {stars(roundNumber, starSolid)}
        {stars(diference, star)}
        
    </div>
  )
}

export default Rating