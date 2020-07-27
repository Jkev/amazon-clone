import React from 'react';
import './Product.css';

function Product({ id, title, image, price, raiting }) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
             <strong>{price}</strong>
             </p>
             <div className="product__raiting">
                {Array(raiting)
                    .fill()
                    //undersocre, significa que no me importa el valor con el que se llene el array
                    .map((_) => (
                        // eslint-disable-next-line jsx-a11y/accessible-emoji
                        <span role="img">⭐️</span>
                    ))}
             </div>
             
             
            </div>
            <img src={image} alt=""/>
            <button>Añadir al carrito</button>
        </div>
    )
}

export default Product;
