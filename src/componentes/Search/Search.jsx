import React, { useState } from 'react'
import "./search.scss";
import ProductCard from '../Products/ProductCard';



const Search = ({data}) => {

    const [query, setQuery] = useState("");

     const resultados = query ? data.filter(item =>
         item.title.toLowerCase().includes(query.toLowerCase())
  ) : [];


  return (

    <>

    <input  
        type='text'
        placeholder='Buscar...'
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        
        />

        <div className='search'>

            {resultados.map(item => (
        
          <ProductCard key={item.id} product={item} />
                ))}
      
         </div>



        </>
  )
}

export default Search;
