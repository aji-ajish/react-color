import colorNames from 'colornames';
import React from 'react'

function SearchColor({ textColor,colorValue ,setTextColor,setcolorValue,setHexValue}) {
  return (
    <main>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder='Add Color'
            required
            value={colorValue}
            onChange={(e)=>{
              setcolorValue(e.target.value);
              setHexValue(colorNames(e.target.value));
            }}
             />
        </form>
        <button onClick={()=>setTextColor(!textColor)}>Toggle Color</button>
    </main>
  )
}

export default SearchColor