import './BoxColor.css';

function BoxColor({ r, g, b }) {
    const brigth = (r * 299 + g * 587 + b * 114) / 1000;
    const textColor = brigth > 128 ? "black" : "white";
    const hexag = "#" +(( 1<<24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return (
        <div className="box-color" style={{blackgroundColor: `rgb(${r}, ${g}, ${b})`, color: `${textColor}`}}>
            <p className="box-color-p">{`rgb(${r}, ${g}, ${b}) `} {hexag}</p>
        </div>
    )
}

export default BoxColor