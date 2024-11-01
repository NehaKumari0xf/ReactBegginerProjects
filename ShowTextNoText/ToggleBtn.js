import React, { useState } from 'react'

function ToggleBtn() {
    const [showP, setShowP]=useState(false);
  return (
      <>
        <h1>ToggleText</h1>
        <button onClick={()=>setShowP(!showP)}>Show Text</button>
        {showP && <p>This is the hidden text.</p>}
      </>
  )
}

export default ToggleBtn
