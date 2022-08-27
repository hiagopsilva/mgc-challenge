import { yup } from '~/utils';

export const validationForm = yup.object({
  user: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

export const initialValues = { user: '', password: '' };
