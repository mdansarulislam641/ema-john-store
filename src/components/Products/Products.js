import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const Products = ({addToCart,setProducts,products}) => {
    // console.log(addToCart)
  
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
   
 

   
    return (
        <div>
            <ShowProducts products={products} addToCart={addToCart}></ShowProducts>
        </div>
    );
};

export default Products;