//- `BoxColor.jsx`: Aquí irá el componente del cuadrado de color.


import { useEffect, useRef, useState } from "react";

function BoxColor({ color, value, input }) {
  const [newValue, setNewValue] = useState('');
  const [classList, setClassList] = useState('');
  const divRef = useRef();

  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  
  const handleChange = (divColor) => {
    if (color === divColor) {
      //console.log(divRef.current.style.backgroundColor)
    //return divRef.current.style.backgroundColor = divColor;
    }
  }

  return (
    <div className="container">
      {colors.map((colorBox, index) => (
        <div
          key={index}
          className={`box ${colorBox}`}
          //ref={divRef}
          //onChange={handleChange(`${colorBox}`)}
          style={color === colorBox ? { backgroundColor: color, color: 'black' } : {}}
        >
          {color === colorBox ? value : `I'm not a ${color} color`}
        </div>
      ))}
    </div>
  )
}
export default BoxColor;  
