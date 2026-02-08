import React, { useState } from 'react'
import "./search.scss";
import ProductCard from '../Products/ProductCart/ProductCard.jsx';

import { Search } from 'lucide-react';

const SearchsP = ({ data }) => {

    const [query, setQuery] = useState("");

    const resultados = query ? data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    ) : [];


    return (
        <>
            <div className='inputContainer'>
                <Search className='searchIcon'
                    color='#E5E7EB' />

                <input
                    className='inputSearch'
                    type='text'
                    placeholder='Dime que Buscar...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

            </div>

            <div className='search'>
                {resultados.map(item => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </>
    )
}


export default SearchsP;
