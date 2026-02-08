import "./productcard.scss"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx"

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext)

  return (
    <div className='card'>
        <img className="img" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        
        <div className="card-actions">
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            <p>ver detalles</p>
        </div>
    </div>
  )
}

export default ProductCard