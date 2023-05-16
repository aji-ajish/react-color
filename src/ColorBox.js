import React from 'react'

function ColorBox({ textColor,hexValue,colorValue }) {
  return (
    <main>
      <div className='box'>
        <div style={{ background:colorValue,
        color:textColor?'#000':'#fff'}}>
          <p >{colorValue?colorValue:"Empty Value"}</p>
          <p>{hexValue?hexValue:null}</p>
        </div>

      </div>
    </main>
  )
}

ColorBox.defaultProps={
  colorValue:"Empty Color Value"
}
export default ColorBox