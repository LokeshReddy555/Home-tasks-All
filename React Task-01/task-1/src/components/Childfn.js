import React from 'react'

function Childfn() {
    console.log("Childfn Rendering");
  return (
    <div>Childfn</div>
  )
}

export default React.memo(Childfn);       //this stops from rerender