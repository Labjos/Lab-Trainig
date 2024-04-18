import { useState } from 'react'
import './carrousel.css'

function Carrousel({ images }) {

    const [element, setElement] = useState(0);
    const up = () => {
        if (element < images.length -1) {
            setElement(element +1);
        }
    }

    const down = () => {
        if (element >= 1) {
            setElement(element -1);
        }
    }

  return (
    <div className='carrousel'>
        <button onClick={down} className='btn-down'>LEFT</button>
        <img src={images[element]} alt='images of element' />
        <button onClick={up} className='btn-up'>RIGTH</button>
    </div>
  )
}

export default Carrousel