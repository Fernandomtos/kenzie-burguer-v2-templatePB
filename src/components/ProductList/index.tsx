import { useContext } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';
import { UserContext } from '../../providers/UserContext/UserContext';
import { ProductContext } from '../../providers/ProductContext/ProductContext';

const ProductList = () => {
  const { searchProducts } = useContext(ProductContext);

  const { loading } = useContext(UserContext);

  return (
    <StyledProductList>
      {loading ? (
        <div>
          <img src='./Spinner-1s-200px.svg' alt='Loading...' />
        </div>
      ) : (
        searchProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </StyledProductList>
  );
};

export default ProductList;
