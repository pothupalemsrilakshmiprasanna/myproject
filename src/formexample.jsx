import React, { useState } from 'react'

const Formexample = () => {

const[userName, setuserName]=useState("")
const[newdetails, setnewdetails]=useState("")

const getuserName=(apple)=>{

setuserName(apple.target.value)
}
const userdetails=(e)=>{
  e.preventDefault()

  
    setnewdetails(userName)
}












  return (
    <section className="formsection">
        <div className='inputdiv'>
          <form onSubmit={userdetails}>
            <input type="text" placeholder="enter your name"onChange={getuserName} /><br/>
            


            <h2>{newdetails}</h2>
            <button className="submit" type="submit">submit</button>
            </form>
        </div>
    </section>
  )
}


export default Formexample
