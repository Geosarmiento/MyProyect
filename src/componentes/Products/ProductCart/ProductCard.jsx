import ButttonAddToCart from "../../Cart/ButttonAddToCart/ButttonAddToCart.jsx"
import "./productcard.scss"


const ProductCard = ({ product }) => {
    

  return (
    <div className='card'>
        <img className="img" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        
        <div className="card-actions">
          
          <ButttonAddToCart product={product} />

          <p>ver detalles</p>
        </div>
    </div>
  )
}

export default ProductCard