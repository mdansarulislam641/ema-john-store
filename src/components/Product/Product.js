import React from 'react';
import './Product.css';
const Product = ({product,addToCart}) => {
    const {name, img ,price, ratings, category} =product ;
    return (
        <div className='product-card-single'>
            <div className='card-image'>
                <img src={img} alt="not images available" />
            </div>
            <div className="card-info">
                <h3 className='product-name'>Name:{name}</h3>
                <h4 className='product-price'>Price:{price}</h4>
                <h4 className='product-category'>Category:{category}</h4>
                <h4 className='product-ratings'>Ratings:{ratings} star</h4>
            </div>
            <button onClick={()=>addToCart(product)} className='add-to-cart'>Add to cart</button>
        </div>
    );
};

export default Product;