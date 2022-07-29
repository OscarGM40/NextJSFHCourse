import { FC, useEffect, useReducer } from 'react';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';
import Cookie from 'js-cookie';

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: Cookie.get('cart') != undefined ? JSON.parse(Cookie.get('cart')!) : [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    Cookie.set('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce((prev,curr) => curr.quantity + prev,0)
    const subTotal = state.cart.reduce((prev,curr) => (curr.quantity * curr.price)+ prev,0)
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE ?? 0);
    
    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal + (subTotal * taxRate),
    };
    dispatch({type:'[Cart] - Update order summary',payload:orderSummary})
  }, [state.cart]);

  useEffect(() => {
    try {
      const oldCart =
        Cookie.get('cart') != undefined ? JSON.parse(Cookie.get('cart')!) : [];
      dispatch({
        type: '[Cart] - LoadCart from cookies | storage',
        payload: oldCart,
      });
    } catch (error) {
      dispatch({
        type: '[Cart] - LoadCart from cookies | storage',
        payload: [],
      });
    }
  }, []);

  const addProductToCart = (product: ICartProduct) => {
    // buscar los productos iguales
    const sameProducts = state.cart.filter((p) => p._id === product._id);
    // buscar los que tengan la misma talla
    if (sameProducts.length > 0) {
      const sameSize = sameProducts.filter((p) => p.size === product.size);
      if (sameSize.length > 0) {
        const finalProduct: ICartProduct = {
          ...sameSize[0],
          quantity: sameSize[0].quantity + product.quantity,
        };
        dispatch({
          type: '[Cart] - Update Cart',
          payload: [
            ...state.cart.filter((p) => p.size !== sameSize[0].size),
            finalProduct,
          ],
        });
      } else {
        dispatch({
          type: '[Cart] - Update Cart',
          payload: [...state.cart, product],
        });
      }
    } else {
      dispatch({
        type: '[Cart] - Update Cart',
        payload: [...state.cart, product],
      });
    }
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Change Cart quantity', payload: product });
  };

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Remove product in Cart', payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state, //fijate que esparzo las props con ...state y los methods de uno en uno
        // methods
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
