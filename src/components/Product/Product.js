import React from 'react';
import './Product.css';

function Product({ id, title, image, price, raiting }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
             <strong>{price}</strong>
             </p>
             <div className="product__raiting">
                {Array(raiting)
                    .fill()
                    .map((_) => (
                        <span role="img">⭐️</span>
                    ))}
             </div>
             <img src={image} alt=""/>
        </div>
    )
}

export default Product;
