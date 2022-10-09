
    export const addToCartItem = async ()=>{
       const product = await fetch('products.json');
       const products = await product.json();

            const getCart = localStorage.getItem('cart');
            const savedCart = JSON.parse(getCart);
            let storeCart = [];
            for(let id in savedCart){
                // console.log(id)
                const addedCart = products.find(product=>product.id ===id);
                if(addedCart){
                    const quantity = savedCart[id]
                    addedCart.quantity = quantity ;
                    storeCart.push(addedCart);
                }
            }
            return {products , storeCart}
     
    }
    

