import React from 'react'

const Productinfo = () => {
    const product = {
        id : 1,
        name : "laptop",
        price : 1200,
        availability : "in stock ",
    };
  return (
    <div>
        <h1>
            name : { product.name}
        </h1>
        <h1> price : ${product.price}</h1>
        <h1> availability : {product.availability}</h1>
        { product.map( (p)=>{
            <div key={id}>
                <h1>name : {p.name}</h1>
                <h2>price : {p.price}</h2>
            </div>
        })}
    </div>
  )
}

export default Productinfo