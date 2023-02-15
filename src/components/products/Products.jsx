import Product from '../product/Product';
import products from '../../data/data';

const Products = () => {
    //console.log(products);
  return (
    <div>
      <Product products={products}/>
    </div>
  )
}

export default Products
