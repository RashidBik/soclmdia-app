import Product from '../dirProduct/Product'
import '../../index.css'

const ProductList = ({products, onDelete}) => {
  return (
    <div className='item'>
      {products.map((item)=>{
        return <Product key={item.id} products={item} onDelete={onDelete} />
      })}
    </div>
  )
}

export default ProductList
