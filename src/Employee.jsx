import React from 'react'
import { useState } from 'react'

const Employee = () => {
const [name, setName]=useState("")
const [role, setRole]=useState("")
const [email, setEmail]=useState("")
const [dept, setDept]=useState("")

const Empdetails={name,role,email,dept}

const Emphandler=async(e)=>{
    e.preventDefault()
    console.log(Empdetails)
    const response= await fetch("http://localhost:5000/api/emp/add-emp",{
        method:"POST",
        headers:{
            "constant-Type":"Application/json"
        },
        body:JSON.stringify(Empdetails)

    })
}








  return (
    <div className='empform'>
     <div className='section'>
        <form onsubmit={Emphandler}>
            <label>Employee name</label>          <br/>
            <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/><br/>
            <label>Employee role</label>          <br/>
            <input type="text" name="role" onChange={(e)=> setRole(e.target.value)}/><br/>
            <label>Employee email</label>          <br/>
            <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)}/><br/>
            <label>Employee dept</label>          <br/>
            <input type="text" name="dept" onChange={(e)=> setDept(e.target.value)}/><br/>
            <button type="submit">submit</button>


            </form>
            </div> 
    </div>
  )
}

export default Employee
