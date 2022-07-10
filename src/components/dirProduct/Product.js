import React from 'react'
import './delPstyle.css'

 function Product({products,onDelete}) {
    return (
    <div className='contain'>
      <div className='box'>
          <p className='author'>{`@_ ${products.author}`}</p>
          <h1>{products.name}</h1>
          <div>{`"${products.qoute}"`}</div>
          <button className='btn' onClick={()=>onDelete(products.id)}>Delete</button>
      </div>
    </div>
  )
}
export default Product