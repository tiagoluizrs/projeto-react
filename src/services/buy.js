const buy = (product, navigate) => {
    let cartLocal = window.localStorage.getItem('cart');
    
    if(cartLocal){
        cartLocal = JSON.parse(cartLocal)
        let verify = cartLocal.some(cart => cart.id === product.id)
        if(!verify){
            window.localStorage.setItem('cart', JSON.stringify([
                ...cartLocal,
                product
            ]));
        }
    }else{
        window.localStorage.setItem('cart', JSON.stringify([product]));
    }

    navigate("/cart");
}

const addToCart = (product) => {
    let cartLocal = window.localStorage.getItem('cart');
    
    if(cartLocal){
        cartLocal = JSON.parse(cartLocal)
        let verify = cartLocal.some(cart => cart.id === product.id)
        if(!verify){
            window.localStorage.setItem('cart', JSON.stringify([
                ...cartLocal,
                product
            ]));
        }
    }else{
        window.localStorage.setItem('cart', JSON.stringify([product]));
    }
}

export {
    addToCart,
    buy
}