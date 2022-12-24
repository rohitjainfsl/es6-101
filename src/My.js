import './My.css'
import {useState} from 'react'

function My(){

  // const count = 0
  // function setCount(c){
  //   count = c
  // }

  const [count, setCount] = [0,1] //destructuring
  

  //closure
  function increment(){
    setCount
  }

  //closure
  function decrement(){

  }

  // const divStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
  return (
    <div className="counter">
      <button onClick={increment}> + </button>
      <p>{count}</p>
      <button onClick={decrement}> - </button>
    </div>
  )
}
export default My