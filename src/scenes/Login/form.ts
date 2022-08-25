import { yup } from '~/utils/modules';

export const validationForm = yup.object({
  email: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

export const initialValues = { email: 'admin', password: 'trevisan' };
