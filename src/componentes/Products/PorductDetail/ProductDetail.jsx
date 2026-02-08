import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../data/products.jsx";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx"

import "./productDetail.scss"
import { ArrowLeft } from 'lucide-react';
 
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

    const { addToCart } = useContext(CartContext);

    const navigate =useNavigate();
  


  const { id } = useParams(); // Obtener id desde la URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado
      <ArrowLeft className="atras" onClick={()=>navigate(-1)} /></h2>;
    
  }

  return (
    <div>

          
        <div className="containerProductDetail" style={{ padding: "20px" }}>

              <ArrowLeft className="atras" onClick={()=>navigate(-1)} />
          

          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} style={{ width: "290px", height: "250px" }} />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <p>Color: {product.details.color}</p>
          <p>Tamaño: {product.details.size}</p>
          <p>Peso: {product.details.weight}</p>


          
        <div>           
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>


        </div>
        </div>



    </div>
  );
};

export default ProductDetail;
