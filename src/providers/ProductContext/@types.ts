export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iSearchForm {
  name: string;
}

export interface iProductContextProps {
  children: React.ReactNode;
}

export interface iProductContext {
  products: iProduct[] | null;
  setProducts: React.Dispatch<React.SetStateAction<iProduct[] | null>>;
  productsShop: () => Promise<void>;
  setSearch: React.Dispatch<React.SetStateAction<iSearchForm | undefined>>;
  searchProducts: iProduct[] | undefined;
}
