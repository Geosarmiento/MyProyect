import React from 'react'
import "./shop.scss"
import { useState, useEffect } from 'react';

import ProductCard from "../componentes/Products/ProductCart/ProductCard.jsx";
import Searchs from "../componentes/Search/Search.jsx";
import { products } from "../data/products.jsx";

import { usePagination } from "../hooks/usePagination.js";



export const Shop = () => {



    const [productsState, setProductsState] = useState([]);
    const [loading, setLoading] = useState(true);

    const { currentPage, totalPages,
        currentItems, nextPage,
        prevPage, goToPage } = usePagination(productsState, 10);



    useEffect(() => {

        setTimeout(() => {
            setProductsState(products);
            setLoading(false);
        }, 1000);

    }, [productsState]); // [] significa que solo se ejecuta una vez al montar el componente




    return (
        <div>

            <Searchs data={products} setProductsState={setProductsState} />

            <h2>Productos</h2>

            <div className='card_containerShop'>
                {loading ? (<p>Cargando productos...</p>) :
                    (currentItems.map((p) => (
                        <ProductCard key={p.id} product={p} />

                    )))}
            </div>



            <div className="pagination">

                <button onClick={prevPage}>
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        className={currentPage === i + 1 ? "active" : ""}
                    >
                        {i + 1}
                    </button>
                ))}

                <button onClick={nextPage}>
                    Next
                </button>

            </div>









        </div>
    )
}

export default Shop


