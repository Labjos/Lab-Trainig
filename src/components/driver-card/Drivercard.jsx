import Rating from '../rating/Rating';
import './DriverCard.css';


function Drivercard({ name, rating, img, car }) {

    return (
    <div className='driver-card'>
        <img src={img} alt='photo profile' className='driver-img' />
        <div className='driver-card-inside'>
            <h3>{name}</h3>
            <Rating className="dirver-rating">{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default Drivercard