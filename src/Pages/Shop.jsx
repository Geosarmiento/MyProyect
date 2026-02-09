import React from 'react'
import "./shop.scss"
import { useState, useEffect } from 'react';

import ProductCard from "../componentes/Products/ProductCart/ProductCard.jsx";
import Searchs from "../componentes/Search/Search.jsx";
import { products } from "../data/products.jsx";
import { Link } from 'react-router-dom';

export const Shop = () => {
    
    const [productsState, setProductsState] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setProductsState(products);
            setLoading(false);
        }, 1000);
    }, []); // [] significa que solo se ejecuta una vez al montar el componente

  return (
     <div>

            <Searchs data={products} />

            <h2>Productos</h2>

            <div className='card_containerShop'>
                {loading ? (<p>Cargando productos...</p>) :
                    (productsState.map((p) => (

                            <ProductCard product={p} />
                        
                    )))}
            </div>

            
        </div>
  )
}

export default Shop


