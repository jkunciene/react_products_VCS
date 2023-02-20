import './Product.css';
import data from '../../data/data';


const Product = ({addToCart}) => {
  

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
                   

                    <button onClick={()=>addToCart(item)}>Pirkti</button>
                </div>
            ))
        }
      
    </div>
  )
}

export default Product
