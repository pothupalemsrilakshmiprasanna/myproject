import React from 'react'
import './App.css'
import Firstcomponent from './routing/Firstcomponent'
import Secondcomponent from './routing/Secondcomponent'
import Thirdcomponent from './routing/Thirdcomponent'
import Fourthcomponent from './routing/Fourthcomponent'
import {  Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
//import Formexample from './formexample'
//import Userpage from './Userpage'
//import Employee from './Employee'
//import Multiplestate from './Multiplestate'
//import Resize from './chat'
//import Firstcomponent from './props container/Firstcomponent'
//import Secondcomponent from './props container/Secondcomponent'
//import Thirdcomponent from './props container/Thirdcomponent'
//import Fourthcomponent from './props container/Fourthcomponent'
//import StateMgm from './StateMgm'



//const user={
 // name:"prasanna",
  //city:"ponnuru",
  //district:"guntur",
  //state:"andhrapradesh"
//}

//const example={
  //model:"maruthi",
  //year:2022,
  //dealer:"nixon",
  //color:"red"
//}


/*function App() {
  return (
   <div className='container'>
  <Firstcomponent car={example}/>
  <Secondcomponent car={example}/>
  <Thirdcomponent car={example}/>
  <Fourthcomponent car={example}/>
  <StateMgm/>
  
   </div>
  )
}

export default <App>*/
 
 
 /*const App = () => {
   return (
     <div className='container'>
       <h1>
        welcome to react
      
        <Resize />

        
       </h1>
     </div>
   )
 }
 
 export default App*/
 
 
 const App = () => {
   return (
     <div>
      <Navbar/>
      <Routes>
        <Route path='/abc' element={<Firstcomponent/>}/>
        <Route path='/apple' element={<Secondcomponent/>}/>
        <Route path='/mango' element={<Thirdcomponent/>}/>
        <Route path='/banana' element={<Fourthcomponent/>}/>







      </Routes>
    
     </div>
   )
 }
 
 export default App
 