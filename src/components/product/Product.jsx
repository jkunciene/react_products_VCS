import './Product.css'

const Product = (props) => {
    console.log(props.products);
    const items = props.products;

  return (
    <div className='list_of_products'>
        {
            items.map((item, index)=>(
                <div key={index} className="one_product_card">
                    <h4>{item.name}</h4>
                    <img src={item.imageUrl} alt="prekes nuotrauka" />
                    {/* //ideti produkto aprasyma */}
                    {/* ideti produkto kaina */}
                    {/* stilizuoti vienos prekes kortele */}
                    {/* stilizuoti sarasa */}
                </div>
            ))
        }
      
    </div>
  )
}

export default Product
