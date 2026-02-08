
import "./main.scss"
import { useState, useEffect } from 'react'

import ProductCard from "../componentes/Products/ProductCard.jsx";

import Searchs from "./../componentes/Search/Search.jsx"


import { products } from "../data/products.jsx";


const Main = () => {
    const [productsState, setProductsState] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setProductsState(products);
            setLoading(false);
        }, 1500);
    }, []); // [] significa que solo se ejecuta una vez al montar el componente


    return (
        <div>

            <Searchs data={products} />

            <h2>Productos</h2>

            <div className='card_container'>

                {loading ? (<p>Cargando productos...</p>) :
                    (productsState.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}

                        />
                    )))}
            </div>


        </div>
    )
}

export default Main