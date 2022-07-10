import React, {useState} from 'react'
import './addPstyle.css'


const AddProduct = ({onAdd}) => {
  const [prod, setProd] = useState({
    author:'',
    name: '',
    qoute: ''
  })
    const submitForm = (e) => {
      e.preventDefault()
      onAdd(prod)
      // setProd('')     
      
    };
  return (
    <div className='header'>
      <form className='form' onSubmit={submitForm}>
        <input type='text' placeholder='The Author of book' value={prod.author} onChange={e => setProd({...prod, author: e.target.value})} />
        <label></label>
        <input type='text' placeholder='Book Name' value={prod.name} onChange={e => setProd({...prod, name: e.target.value})} />
        <label></label>
        <input type='text' placeholder='The best quote you remember' value={prod.qoute} onChange={e => setProd({...prod, qoute: e.target.value})} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddProduct
