const addToLocalStorage = id =>{
    // console.log(id)
let cart ={};
const savedCart = localStorage.getItem('cart');
if(savedCart){
    const parseCart = JSON.parse(savedCart);
    cart = parseCart;
}
else{
    cart = {};
}
let quantity = cart[id];
if(quantity){
    let newQuantity = quantity + 1;
    cart[id]=newQuantity;
}
else{
    cart[id] = 1;
}
localStorage.setItem('cart',JSON.stringify(cart))
}

const removeFromDb = id =>{
    const saveCart = JSON.parse(localStorage.getItem('cart'));
    if(saveCart){
        if(id in saveCart){
            delete saveCart[id];
            localStorage.setItem('cart',JSON.stringify(saveCart))
        }
    }
}
export {addToLocalStorage
        ,removeFromDb
    };