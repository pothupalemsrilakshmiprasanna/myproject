import React from 'react'



const Childcomponent = (props) => {
  const{model,year,dealer,color}=props.car
  console.log(props)
  return (
    <section>
      <div>{model}</div>
      <div>{year}</div>
      <div>{dealer}</div>
      <div>{color}</div>
    </section>

  )
}

export default Childcomponent
