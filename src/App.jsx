
import React, { useEffect, useRef, useState } from 'react'
import './index.css';


function App(){
  var[count,setcount] =useState(0)
  var total = useRef(0)

  useEffect(()=>{
    total.current = total.current+1
    console.log(total.current)
  })


  return(
    <div> 
      <button onClick={()=>{setcount(count+1)}}>Increment (+)</button>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count -1)}}>Decrement (-)</button>
      <h1>Rendering times - {total.current}</h1>
    </div>
  )
}
export default App;