import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { iCartContext, iCartContextProps } from './@types';
import { iProduct } from '../ProductContext/@types';
import { ProductContext } from '../ProductContext/ProductContext';

export const CartContext = createContext({} as iCartContext);

const CartProvider = ({ children }: iCartContextProps) => {
  const [cartModal, setCartModal] = useState(false);
  const localStorageCartList = localStorage.getItem('@KenzieBurguerV2');
  const [currentSale, setCurrentSale] = useState<iProduct[] | null>(
    localStorageCartList ? JSON.parse(localStorageCartList) : ([] as iProduct[])
  );

  const { products } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem('@KenzieBurguerV2', JSON.stringify(currentSale));
  }, [currentSale]);

  const handleClick = (id: number) => {
    if (currentSale?.some((product) => product.id === id)) {
      toast.error('O produto já foi adicionado no carrinho de compras');
    } else {
      const addProductCart = products?.find((product) => product.id === id);

      if (currentSale && addProductCart) {
        setCurrentSale([...currentSale, addProductCart]);
      }
    }
  };

  const removeProductCart = (id: number) => {
    const newListCart = currentSale?.filter((product) => product.id !== id);
    if (newListCart) {
      setCurrentSale(newListCart);
    }
  };

  const removeAllCart = () => {
    const newListCart: iProduct | [] = [];
    setCurrentSale(newListCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        handleClick,
        currentSale,
        removeProductCart,
        removeAllCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
