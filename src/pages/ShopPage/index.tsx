import { useContext, useEffect } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { ProductContext } from '../../providers/ProductContext/ProductContext';
import { CartContext } from '../../providers/CartContext/CartContext';

const ShopPage = () => {
  const { productsShop } = useContext(ProductContext);
  const { cartModal } = useContext(CartContext);

  useEffect(() => {
    productsShop();
  }, []);

  return (
    <StyledShopPage>
      {cartModal && <CartModal />}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
