import ButttonAddToCart from "../../Cart/ButttonAddToCart/ButttonAddToCart.jsx"
import "./productcard.scss"

import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    

  return (
    <div className='card'>
        <img className="img" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        
        <div className="card-actions">
          
          <ButttonAddToCart product={product} />

          <Link key={product.id} to={`/shop/${product.id}`}>
             <p>ver detalles</p>
          </Link> 
        </div>
    </div>
  )
}

export default ProductCard