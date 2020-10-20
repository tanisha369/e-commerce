import React,{useState} from 'react'
function Product_changer() {
    const [state, setState] = useState(1)
        
  function decreament() {
   setState(prevCount=> prevCount-1)
  }
  function increament() {
    setState(prevCount=> prevCount+1)
  }
    return (
        <div>
            <span>
      <button onClick={decreament}>-</button>
  <h1>{state}</h1>
  
      <button onClick={increament}>+</button>   
      </span>
        </div>
    )
}

export default Product_changer
