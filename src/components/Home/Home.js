import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToLocalStorage } from '../../utilities/localStorage';
import ProductCard from '../ProductCart/ProductCard';
import Products from '../Products/Products';
import './Home.css';
import './Home.css';
const Home = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const addToCart = (product) =>{
        const exits = cart.find(selected=>selected.id === product.id);
        let newCart = [];
        if(!exits){
            product.quantity = 1; 
            newCart = [...cart,product];
        }
        else{
            const rest = cart.filter(restPro => restPro.id !== product.id);
            exits.quantity =exits.quantity + 1;
            newCart = [...rest , exits]
        }
    //    newCart = [...cart, product];
       setCart(newCart);
    addToLocalStorage(product.id)
    } 

    // clear orders 
    const clearOrders = () =>{
       localStorage.removeItem('cart');
       setCart([])
    }
    useEffect(()=>{
        const savedData = JSON.parse(localStorage.getItem('cart'));
        const save = [];
        if(savedData){
            for(const id in savedData){
            const singleData = products.find(product=>product.id===id);
           
            if(singleData){
                 const quantity = savedData[id];
                 singleData.quantity = quantity ;

                save.push(singleData);
                
            }
        }
        setCart(save);
    }
},[products])
    return (
        <div className='home-container'>
           <Products addToCart={addToCart} products={products} setProducts={setProducts}></Products>
           <ProductCard cart={cart} clearOrders={clearOrders}>
            <button className='border-0 bg-pink-700 py-1 px-3 rounded-md mt-5'>
                <Link to='/orders'>Order Reviews</Link>
            </button>
           </ProductCard>
        </div>
    );
};

export default Home;