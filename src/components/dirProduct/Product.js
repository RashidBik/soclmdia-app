import React from 'react'

 function Product({products,onDelete}) {
    return (
    <div className='box'>
        <div>{`Author: ${products.author}`}</div>
        <h1>{products.name}</h1>
        <div>{`Qoute: ${products.qoute}`}</div>
        <button onClick={()=>onDelete(products.id)}>Delete</button>
    </div>
  )
}
export default Product