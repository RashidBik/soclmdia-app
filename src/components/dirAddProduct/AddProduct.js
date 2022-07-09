import React, {useState} from 'react'
import './addPstyle.css'

const AddProduct = ({onAdd}) => {
    const [prod, setProd] = useState('')
    const submitForm = (e) => {
      e.preventDefault()
      onAdd({prod})
      
    
        setProd('')
    }


  return (
    <div>
      <form className='form' onSubmit={submitForm}>
        <input type='text' placeholder='The Author of book' value={prod} onChange={(e)=> setProd(e.target.value)} />
        <label></label>
        <input type='text' placeholder='Book Name' value={prod} onChange={(e)=> setProd(e.target.value)} />
        <label></label>
        <input type='text' placeholder='The best quote you remember' value={prod} onChange={(e)=> setProd(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddProduct
