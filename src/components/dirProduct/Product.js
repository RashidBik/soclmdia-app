import React from 'react'
import './delPstyle.css'

 function Product({products,onDelete}) {
    return (
    <div className='box'>
        <span>{` ${products.author}`}</span>
        <h1>{products.name}</h1>
        <div>{products.qoute}</div>
        <button className='btn' onClick={()=>onDelete(products.id)}>Delete</button>
    </div>
  )
}
export default Product