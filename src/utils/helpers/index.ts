export * from './theme';

export { default as alert } from './toast';

export const formatCPF = (value: string) => {
  const newValueCPF = value.replace(/[^\d]/g, '');

  return newValueCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};
