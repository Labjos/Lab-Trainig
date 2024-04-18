import { useState } from "react";
import './SingleColor.css'

function SingleColor({ color, value, onChange }) {

    const [colorPick, setColorPick] = useState(0);

    const onChangeColor = colorValue => {
    const valueOnChange = parseInt(colorValue.target.value, 10);
    setColorPick(valueOnChange);
    onChange(valueOnChange);
    }

    const stylePrev = () => {
    const r = color === 'r' ? colorPick : 0;
    const g = color === 'g' ? colorPick : 0;
    const b = color === 'b' ? colorPick : 0;
  
    return {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
        }
    }


    return (
        <div className="single-color">
        <div style={stylePrev()} className="box-color"></div>
        <label htmlFor={`color-${color}`}>{color.toUpperCase()}:</label>
        <input 
            type='number'
            id={`color-${color}`}
            min='0'
            max='255'
            value={value}
            onChange={onChangeColor}
        />
        </div>
    );
}

export default SingleColor;