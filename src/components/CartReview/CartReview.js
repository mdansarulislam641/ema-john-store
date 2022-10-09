import React from 'react';
import { removeFromDb } from '../../utilities/localStorage';

const CartReview = ({product,cart,setCart}) => {
    const {id, img, name, price, quantity} = product ;
    const deleteAddToCart = (id) =>{
        const remaininingCart = cart.filter(item=>item.id !==id);
        setCart(remaininingCart)
       removeFromDb(id);
    }
    return (
        <div className='flex border-2 m-auto my-7 w-6/12 rounded-lg' >
            <div >
                <img className='w-[90px]' src={img} alt="" />
            </div>
            <div className='flex items-center flex-grow'>
                <div className="cart-info w-9/12 pl-10">
                        <p>{name}</p>
                        <p>Price:{price}</p>
                        <p>Quantity:{quantity}</p>
                </div>
                <div className="delete-btn">
                    <button onClick={()=>deleteAddToCart(id)} className='py-3 px-5 bg-red-800 rounded text-white text-2xl font-bold mr-3'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartReview;