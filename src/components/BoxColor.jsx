import { useEffect, useRef } from "react";

function BoxColor({ color, divColor }) {
  const divRef = useRef()

  useEffect(() => {
    if (color === divColor) {
      divRef.current.style.backgroundColor = color
      divRef.current.style.color = 'black'
      //console.log(divRef.current)
    } else {
      divRef.current.style.backgroundColor = 'transparent'
      divRef.current.style.color = divColor
    }
  }, [color])

  return (
    <div
      ref={divRef}
      className={`box ${divColor}`}
    >
      {color === divColor ? `Yes, I'm ${color} color!` : `I'm not a ${color} color`}
    </div>
  )
}
export default BoxColor;  
