import {useState} from 'react'
import React from "react";
import AddProduct from './components/dirAddProduct/AddProduct';
import ProductList from './components/dirProductList/ProductList'
function App() {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: 'Human',
        author: 'Brayan Trisi',
        qoute: 'go as far as you can see'
    },
    {
        id: 2,
        name: 'Herman Hiss',
        author: 'Paul kolo',
        qoute: 'try anything'
    },
    {
        id: 3,
        name: 'badfox',
        author: 'Rashid Bik',
        qoute: 'I never forget this if i do but this cant!'
    }
])

const addProduct = (name,author,quote)=>{
  const randomId = Math.floor(Math.random()*10000)

  const newProduct = {randomId,name,author, ...quote}

  setProducts([...products, newProduct])
}

const deleteProduct = (id) =>{
setProducts(products.filter((item) => item.id !== id))
}
  return (
    <div className='container'>
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct}  />
    </div>
  )
}

export default App