import './Product.css';
import data from '../../data/data';

const Product = () => {
    console.log(data);

  return (
    <div className='list_of_products'>
        {
            data.map((item, index)=>(
                <div key={index} className="one_product_card">
                    <h4>{item.name}</h4>
                    <img src={item.imageUrl} alt="prekes nuotrauka" />
                    {/* //ideti produkto aprasyma */}
                    <p>{item.description}</p>
                    {/* ideti produkto kaina */}
                    <p>price: {item.price} $</p>
                    {/* stilizuoti vienos prekes kortele */}
                    {/* stilizuoti sarasa */}
                </div>
            ))
        }
      
    </div>
  )
}

export default Product
