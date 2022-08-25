import { yup } from '~/utils/modules';

export const validationForm = yup.object({
  email: yup.string().email('Email Inválido').required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

export const initialValues = { email: '', password: '' };
