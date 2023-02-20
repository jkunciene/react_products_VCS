import Product from '../product/Product';
import { useState } from 'react';

const Products = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    console.log('funkcija addToCart', item)
  }
   
  return (
    <div>
      <Product addToCart={addToCart}/>
    </div>
  )
}

export default Products
