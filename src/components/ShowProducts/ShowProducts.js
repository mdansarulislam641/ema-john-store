import React from 'react';
import Product from '../Product/Product';
import './ShowProducts.css';

const ShowProducts = ({products,addToCart}) => {
   
    return (
        <div className='product-container'>
            {
                products.map(product =><Product
                     product={product}
                     key={product.id}
                     addToCart={addToCart}
                     ></Product>)
            }
           
        </div>
    );
};

export default ShowProducts;