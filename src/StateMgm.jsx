import React from 'react'
import { useState ,useEffect} from 'react'

const StateMgm = () => {
    const[city, Setcity]=useState("Hyderabad")
    useEffect(()=>{


        if(city==="Hyderaba"){
            Setcity("Bangalore")
           }
           else{
            Setcity("delhi")
           }

    },[city])








  return (
    <div> <h1> i live in{city}</h1> </div>
  )
}

export default StateMgm
