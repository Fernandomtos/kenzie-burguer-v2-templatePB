import { iProduct } from '../ProductContext/@types';

export interface iCartContextProps {
  children: React.ReactNode;
}

export interface iCartContext {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (id: number) => void;
  currentSale: iProduct[] | null;
  removeProductCart: (id: number) => void;
  removeAllCart: () => void;
}
