
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartReview from '../CartReview/CartReview';
import ProductCard from '../ProductCart/ProductCard';

const Orders = () => {
    const {products, storeCart} = useLoaderData();
    const [cart, setCart] = useState(storeCart);
    const clearOrders = () =>{
        localStorage.removeItem('cart');
        setCart([]);
    }
    return (
        <div className='home-container'>
           <div>
           {
                cart.map(product=> <CartReview product={product} key={product.id} cart={cart} setCart={setCart}></CartReview>)
            }
         
           </div>
          <ProductCard cart={cart} clearOrders={clearOrders}></ProductCard>
          <div className='absolute top-[50%] left-[25%] text-3xl'>
          {
                cart.length === 0 && <h1>Please add Your Product Go To <Link className='text-red-500 underline' to='/home'>Buy Now</Link> </h1>
            }
          </div>
        </div>
    );
};

export default Orders;