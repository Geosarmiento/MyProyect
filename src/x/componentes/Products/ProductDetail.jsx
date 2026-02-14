import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { products } from '../../data/products.jsx';
import { CartContext } from '../../context/CartContext.jsx';
import './productcard.scss';
import { ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  const goBack = () => {
    if (typeof window !== 'undefined' && window.history && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/shop');
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goBack();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate('/shop')}>Volver a la tienda</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
     
      <button onClick={goBack}> <ArrowLeft /></button>
    
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
       
       
       
        <div>
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>{product.description}</p>
          <h2 style={{ color: '#e74c3c' }}>${product.price}</h2>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <p><strong>Color:</strong> {product.details.color}</p>
            <p><strong>Tallas disponibles:</strong> {product.details.size.join(', ')}</p>
            <p><strong>Peso:</strong> {product.details.weight}</p>
            <p><strong>Garantía:</strong> {product.details.warranty}</p>
          </div>

          <button 
            onClick={() => addToCart(product)}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%'
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail