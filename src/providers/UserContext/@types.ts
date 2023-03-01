export interface iUser {
  id: string;
  email: string;
  password: string;
  accessToken: string;
}

export interface iUserLoginForm {
  email: string;
  password: string;
}

export interface iUserRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  userLogin: (data: iUserLoginForm) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (data: iUserRegisterForm) => Promise<void>;
  userLogout: () => void;
  user: iUser | null;
}
