
import "./productcard.scss"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext"


const ProductCard = ({ product }) => {

    const {addToCart} = useContext(CartContext)
 


  return (
    
    <div className='card'>
        <img className="img" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>

        <button onClick={() => addToCart(product)}>agregar al carrito</button>
      
        
    </div>
    
  )
    }

    export default ProductCard