export * from './theme';

export { default as alert } from './toast';

export const formatCPF = (value: string) => {
  const newValueCPF = value.replace(/[^\d]/g, '');

  return newValueCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatDate = (value: string) => {
  return value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
};
