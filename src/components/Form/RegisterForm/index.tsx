import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validator';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { iUserRegisterForm } from '../../../providers/UserContext/@types';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegisterForm>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<iUserRegisterForm> = async (data) => {
    userRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <Input
        label='Confirmar Senha'
        type='password'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <Input
        label='Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
