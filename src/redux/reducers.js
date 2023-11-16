const initialState = {
    cart: [],
    products: [],
    modalOpen: false,
    modalProduct: {},
    cartTotal: 0
};
const getItem = (id, products) => {
    const product = products.find(item => item.id === id);
    return product;
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let tempProducts = [...state.products];
            let index = tempProducts.indexOf(getItem(action.payload, state.products));
            let product = tempProducts[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            return { ...state, cart: [...state.cart, product], products: tempProducts };
        case 'INCREMENT_ITEM':
            let tempCart = [...state.cart];
            let selectedProduct = tempCart.find(item => item.id === action.payload);
            const itemIndex = tempCart.indexOf(selectedProduct);
            let cartProduct = tempCart[itemIndex];

            cartProduct.count = cartProduct.count + 1;
            cartProduct.total = cartProduct.count * cartProduct.price;
            return { ...state, cart: [...tempCart] };
        case 'DECREMENT_ITEM':
            let decrementCart = [...state.cart];
            const selectedTempCartProduct = decrementCart.find(item => item.id === action.payload);
            const productIndex = decrementCart.indexOf(selectedTempCartProduct);
            const dCartProduct = decrementCart[productIndex];

            dCartProduct.count = dCartProduct.count - 1;

            if (dCartProduct.count === 0) {
                const decrementProducts = [...state.products]
                decrementCart = decrementCart.filter(item => item.id !== action.payload);
                const index = state.products.indexOf(getItem(action.payload, state.products));
                let removedProduct = decrementProducts[index];
                removedProduct.inCart = false;
                removedProduct.count = 0;
                removedProduct.total = 0;
                return { ...state, cart: [...decrementCart],products:[...decrementProducts] };
            } else {
                dCartProduct.total = dCartProduct.count * dCartProduct.price;
                return { ...state, cart: [...decrementCart]};
            }
        case 'SET_PRODUCTS':
            let products = []
            if (action?.payload?.length)
                products = action.payload.map(p => ({ ...p, inCart: false, count: 0, total: 0 }))
            return { ...state, products };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case 'CLEAR_CART':
            let productsData = [...state.products]
            let clearCartProducts
            if (productsData)
                clearCartProducts = productsData.map(p => ({ ...p, inCart: false, count: 0, total: 0 }))
            return { ...state, cart: [], products: clearCartProducts }
        case 'OPEN_MODAL':
            return { ...state, modalOpen: true, modalProduct: state.cart.find(item => item.id === action.payload)}
        case 'CLOSE_MODAL':
            return { ...state, modalOpen: false, modalProduct: {} }
        case 'ADD_TOTAL':
            let total = 0;
            state.cart.map(item => (total += item.total));
            return { ...state, cartTotal: total }
        default:
            return state;
    }
};

export default rootReducer;