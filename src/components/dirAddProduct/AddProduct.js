import React, {useState} from 'react'

const AddProduct = ({onAdd}) => {
    const [title, setTitle] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        onAdd({title})

        setTitle('')
    }


  return (
    <div>
      <form onSubmit={submitForm}>
        <input type='text' placeholder='title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddProduct
