import './Dice.css';
import emptyDice from '../../assets/images/dice-empty.png';
import { useState } from 'react';

function Dice() {
    const [dice, setDice] = useState();

    const roll = () => {
        const num = Math.floor(Math.random(1) * 6) +1;
        setTimeout(() => {
            setDice(num);
        }, 1_000)
    }


    return (
        <div className='dice'>
            <img onClick={roll} src={dice ? `./src/assets/images/dice${dice}.png` : emptyDice} className='img-dice' /> 
        </div>
    )
}

export default Dice