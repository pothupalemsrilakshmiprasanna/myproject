import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const[number, setNumber]=useState(0)
    const increment=()=>{
        setNumber(number+1)
    }
    const decrement=()=>{
        if(number>1){
            setNumber(number-1)


        }
      
    }
    const reset=()=>{
        setNumber(0)
    }
  return (
    <div>
      ClickEvent<h1>{number}</h1><br/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button><br/>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ClickEvent
