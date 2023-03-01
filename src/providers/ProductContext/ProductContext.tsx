import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  iProductContext,
  iProductContextProps,
  iProduct,
  iSearchForm,
} from './@types';
import api from '../../services/api';
import { UserContext } from '../UserContext/UserContext';

export const ProductContext = createContext({} as iProductContext);

const ProductProvider = ({ children }: iProductContextProps) => {
  const [products, setProducts] = useState<iProduct[] | null>(null);
  const [search, setSearch] = useState<iSearchForm>();

  const { setLoading } = useContext(UserContext);
  const navigate = useNavigate();

  const searchProducts = products?.filter((product) =>
    search === undefined
      ? true
      : product.name.toLowerCase().includes(search.name.toLocaleLowerCase())
  );

  const productsShop = async () => {
    const token = localStorage.getItem('@Token');

    try {
      setLoading(true);
      const response = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      // const currentError = error as AxiosError<errorResponse>;
      toast.error('Autorização inválida, favor realizar novo login!');
      localStorage.removeItem('@Token');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, setProducts, productsShop, setSearch, searchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
