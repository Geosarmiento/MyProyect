import "./productcard.scss"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';

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
            <Link to={`/shop/${product.id}`} className="view-details">Ver detalles</Link>
        </div>
    </div>
  )
}

export default ProductCard