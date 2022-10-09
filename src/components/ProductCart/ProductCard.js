
import './ProductCard.css';


const ProductCard = ({cart , children,clearOrders}) => {
  console.log(cart)
  let totalPrice=0;
  let totalShipping = 0;
  let tax ;
  let grandTotal;
  let quantity = 0 ;
        for(const cartItem of cart){
          quantity = quantity + cartItem.quantity ;
      //  console.log(quantity)
       totalPrice = totalPrice + cartItem.price * quantity;
       totalShipping = totalShipping + cartItem.shipping * quantity;
       tax = (totalPrice * 0.1).toFixed(2);
       grandTotal = totalPrice + totalShipping + parseFloat(tax) ;
        }
  // console.log(cart)
    return (
        <div className="product-card bg-red-400 pl-7 pt-10 text-2xl rounded-lg">
          <h2>Product Card selected</h2>
          <h2>select product : {quantity} </h2>
          <h2>Total Price:{totalPrice}</h2>
          <h2>total Shipping:{totalShipping}</h2>
          <h2>Tax:{tax}</h2>
          <h2>Grand Total:{grandTotal}</h2>
          <button className='py-2 px-3 bg-red-800 font-bold rounded mr-4 mt-5 text-white' onClick={clearOrders}>Clear Orders</button>
          {children}
        </div>
    );
};

export default ProductCard;