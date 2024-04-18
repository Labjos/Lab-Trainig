import './Random.css'

function Random({ min, max }) {
    const randomNum = Math.floor(Math.random(min) * max);

  return (
    <p className='random'>Random Value Between {min} & {max} = {randomNum}</p>
  )
}

export default Random