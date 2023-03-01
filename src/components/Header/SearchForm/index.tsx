import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ProductContext } from '../../../providers/ProductContext/ProductContext';

export interface iFormData {
  name: string;
}

const SearchForm = () => {
  const { setSearch } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>();

  const submit: SubmitHandler<iFormData> = async (data) => {
    setSearch(data);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submit)}>
      <input type='text' placeholder='Digitar pesquisa' {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
