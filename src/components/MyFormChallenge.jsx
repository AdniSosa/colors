import { useEffect, useState } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const [value, setValue] = useState('');
  const [color, setColor] = useState('');

  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  
  const findColor = (inputValue) => {
    setColor(inputValue);
  }

  useEffect(() => {
    findColor(value)
  }, [value])
  
  return (
    <>
      <input 
         type="text"
         value={value}
         onChange={(e) => setValue(e.target.value)}
         placeholder='Choose a color'
      />
      <div className="container">
      {colors.map(divColor =>(
        <BoxColor key={divColor} divColor={divColor} value={value} color={color}/>
      ))}
      </div>
    </>
  );
}

export default MyForm;