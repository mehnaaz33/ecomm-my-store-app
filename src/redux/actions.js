export const addToCart = (id) => ({
    type: 'ADD_TO_CART',
    payload: id,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });

  export const clearCart = () => ({
    type: 'CLEAR_CART'
  });

  export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });

  export const closeModal = () => ({
    type: 'CLOSE_MODAL'
  });

  export const openModal = (product) => ({
    type: 'OPEN_MODAL',
    payload: product,
  });

  
  export const increment = (id) => ({
    type: 'INCREMENT_ITEM',
    payload:id
  });
  
  export const decrement = (id) => ({
    type: 'DECREMENT_ITEM',
    payload:id
  });

  export const addTotal = () => ({
    type: 'ADD_TOTAL',
  })