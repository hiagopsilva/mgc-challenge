import { yup } from '~/utils/modules';

export const validationForm = yup.object({
  user: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

export const initialValues = { user: 'admin', password: 'trevisan' };
