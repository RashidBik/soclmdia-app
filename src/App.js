import {useState,useEffect} from 'react'
import React from "react";
import AddProduct from './components/dirAddProduct/AddProduct';
import ProductList from './components/dirProductList/ProductList'
function App() {
  const [products, setProducts] = useState([])

useEffect(()=>{
  const sendReq = async() =>{
    const resp = await fetch('http://localhost:8000/products')
    const respData = await (await resp).json()
    setProducts(respData)

  }
  sendReq()
},[])

const addProduct = async (props)=>{
  // const randomId = Math.floor(Math.random()*10000)
   const response = await fetch(`http://localhost:8000/products`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(props)
    })

    const responseData = await response.json()
  // const newProduct = {randomId,name,author, ...quote}

  setProducts([...products, responseData])
}

const deleteProduct = async (id) =>{
 await fetch(`http://localhost:8000/products/${id}`,{method: 'DELETE'})
setProducts(products.filter((item) => item.id !== id))
}
  return (
    <div className='container'>
      <div className='title'>The books I have read</div>
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct}  />
    </div>
  )
}

export default App