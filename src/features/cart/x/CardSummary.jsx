import React from 'react'

const CardSumary = ({totalItems}) => {
  return (
    <div>
        <h3>Resumen del carrito</h3>
        <p>Total de productos: {totalItems}</p>
    </div>
  )
}

export default CardSumary