import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/UserContext/UserContext';
import { CartContext } from '../../providers/CartContext/CartContext';

const Header = () => {
  const { cartModal, setCartModal } = useContext(CartContext);
  const { userLogout } = useContext(UserContext);

  const logoutDashboard = () => {
    userLogout();
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setCartModal(!cartModal);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button'>
                <MdLogout
                  size={28}
                  onClick={() => {
                    logoutDashboard();
                  }}
                />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
