import { useState } from 'react';
import './ColorPicker.css';
import SingleColor from '../single-color/SingleColor';


function ColorPicker() {

    const [rValue, setColorR] = useState(0);
    const [gValue, setColorG] = useState(0);
    const [bValue, setColorB] = useState(0);

    const colorRValue = redValue => setColorR(redValue);
    const colorGValue = greenValue => setColorG(greenValue);
    const colorBValue = blueValue => setColorB(blueValue);
  
    return (
        <div>
            <SingleColor color="r" value={rValue} onChange={colorRValue}/>
            <SingleColor color="g" value={gValue} onChange={colorGValue}/>
            <SingleColor color="b" value={bValue} onChange={colorBValue}/>
    
            <div className="rgbcolorpicker-container" >
            <div
                style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }} 
                className="boxcolor-container">  
            </div>
            <label>rgb({rValue}, {gValue}, {bValue})  </label>
            </div>
        </div>
    );
}

  
export default ColorPicker;