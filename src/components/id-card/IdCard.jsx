import './IdCard.css';




function IdCard({picture, firstname, lastname, gender, heigth, birth}) {

    return (
        <div className='id-card'>
            <img className='image' src={picture} />
            <div className='lastName'><p>First name: {lastname}</p></div>
            <div className='firstName'><p>Last name: {firstname}</p></div>
            <div className='gender'><p>Gender: {gender}</p></div>
            <div className='heigth'><p>Height: {heigth}</p></div>
            <div className='birth'><p>Birth: {birth}</p></div>
        </div>
    )
}

export default IdCard