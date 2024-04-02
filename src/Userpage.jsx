import React, { useState } from 'react'
import { useEffect } from 'react';
const userdetails="https://jsonplaceholder.typicode.com/posts"

const Userpage = () => {
    const[user, setuser]=useState([]);

const userhandler=async()=>{
    const response= await fetch(userdetails);
    const newdata=await response.json();
    setuser(newdata);

};
useEffect(()=>{
      console.log(userhandler());
},[]);

  return <div>
      {user.map((item)=>{
        return(
            <div className='usersection'>
                <h2 style={{color:"green"}}>{item.title}</h2>
                <h3 style={{color:"blue"}}>{item.body}</h3>




            </div>
        )
      
      }) }

      
    </div>
  
}

export default Userpage
