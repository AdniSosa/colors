//- `MyFormChallenge.jsx`: Aquí crearemos el formulario e importaremos las BoxColor para pasarle `props`.
//También tendremos un input en el que escribiremos el color para hacer que coincida.
// El funcionamiento es el siguiente:
// - Si escribimos un color que está en la lista, el cuadro de ese color tendra el fondo de ese color.
// - Si el color (palabra que se escribe en el input) no coincide con el color, no cambiara ningun fondo.
// - Mientras se escribe el color, ese valor del input irá cambiando en el texto dentro de cada cuadro.
// - Tendremos 2 textos: Uno que diga que no soy el color y cambiará el texto cuando coincida el color.
//const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

import { useState, useRef, useEffect } from "react";
import BoxColor from "./BoxColor";

function MyForm() {

  const [value, setValue] = useState('');
  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState('');
  const inputRef = useRef(null)

  const findColor = (inputText) => {
    const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
    const colorFound = colors.find(color => inputText === color);

    if (!colorFound) {
      setColor(inputText);
      return colorFound
    }
    setColor(colorFound);
    setValue(`Yes, I'm ${colorFound} color`)
  }

  useEffect(() => {
    findColor(inputText)
  }, [inputText])


  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={() => setInputText(inputRef.current.value)}
        placeholder='Choose a color'
        ref={inputRef}
      />
      <BoxColor color={color} value={value} />
    </>
  );
}

export default MyForm;