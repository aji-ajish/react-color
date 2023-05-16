import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox';
import SearchColor from './SearchColor';

function App() {

  const [textColor, setTextColor] = useState(true)
  const [colorValue, setcolorValue] = useState('')
  const[hexValue,setHexValue]=useState('')


  return (
    <div className="App">
      <header className="App-header">
        <ColorBox 
        textColor={textColor}
        hexValue={hexValue}
        colorValue={colorValue}
         />
        <SearchColor
          colorValue={colorValue}
          textColor={textColor}
          setTextColor={setTextColor}
          setcolorValue={setcolorValue}
          setHexValue={setHexValue}
        />
      </header>
    </div>
  );
}

export default App;
