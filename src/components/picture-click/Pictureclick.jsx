import { useState } from 'react';
import './PictureClick.css';


function Pictureclick({ img, imgClick }) {
    const [click, setClick] =useState(0);

    const presentClick = () => {
        setClick(click === 0 ? click +1 : click -1);
    }

    return (
        <div>
            <img src={img} onClick={presentClick} alt='Pickle Rick' className='click-rick' />
            <img src={imgClick} onClick={presentClick} alt='glasses' className='glasses' style={{display: click === 0 ? 'none' : 'block'}} />
        </div>
    )
}

export default Pictureclick