const getStoredCart = () => {
    const storedCartSting = localStorage.getItem('cart')
    if (storedCartSting) {
        return JSON.parse(storedCartSting)
    }
    return [];
}

const saveCartToLs = cart => {
    const cartSringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartSringified)
}

const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLs(cart)
}

const removeFromLS = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !==id);
    saveCartToLs(remaining)
}

export {addToLs , getStoredCart , removeFromLS}