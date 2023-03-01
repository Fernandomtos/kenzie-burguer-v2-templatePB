import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .required('E-mail obrigatório!')
    .email('Favor inserir e-mail válido!'),
  password: yup.string().required('Senha obrigatória!'),
});

export default schema;
