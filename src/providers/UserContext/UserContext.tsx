import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import {
  iUserContext,
  iUserContextProps,
  iUser,
  iUserLoginForm,
  iUserRegisterForm,
} from './@types';
import api from '../../services/api';

interface errorResponse {
  error: string;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (data: iUserLoginForm) => {
    try {
      setLoading(true);
      const response = await api.post<iUser>('/login', data);
      setUser(response.data);
      localStorage.setItem('@Token', response.data.accessToken);
      toast.success('Login realizado com sucesso!');
      navigate('/shop');
    } catch (error) {
      toast.error('E-mail ou senha inválido(s)!');
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data: iUserRegisterForm) => {
    try {
      setLoading(true);
      const response = await api.post<iUser>('/users', data);
      toast.success('Usuário cadastrado com sucesso!');
      setUser(response.data);
      localStorage.setItem('@Token', response.data.accessToken);
      navigate('/');
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@Token');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        loading,
        setLoading,
        userRegister,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
