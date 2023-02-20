import Product from '../product/Product';
import { useState } from 'react';

const Products = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    console.log('funkcija addToCart', item);
    // jei tokios prekes dar nera krepselyje -> sukurk savybe kiekis 1
    //jei tokia preke jau yra -> didink kieki +1
    //jei prekes likutis pakankamas
    //extra uzduotis: pakoreguoti kieki -isminusuoti countInStock
    let newChart = [...items]
    let product = newChart.find( x => x.name === item.name);
    console.log(product);

    if(product===undefined && item.countInStock > 0){
      product= {
        ...item,
        quantity: 1
      }
       newChart.push(product);
       console.log(newChart)
    } else if(product && product.quantity < item.countInStock){
      //jei tokia preke yra
      product.quantity++
    } else {
      alert("Prekes kiekis nepakankamas...")
    }
    setItems(newChart);
  }
   
  return (
    <div>
      <Product addToCart={addToCart}/>
    </div>
  )
}

export default Products
