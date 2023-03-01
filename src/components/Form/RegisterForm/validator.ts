import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .required('E-mail obrigatório!')
    .email('Favor inserir e-mail válido!'),
  password: yup.string().required('Senha obrigatória!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha')
    .required('Confirmação de senha é obrigatória'),
  name: yup.string().required('Nome do usuário é obrigatório'),
});

export default schema;
