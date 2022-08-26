import { isEmpty } from 'lodash';
import moment from 'moment';

export * from './theme';
export { default as alert } from './toast';

const SCREEN_DATE = 'DD/MM/YYYY';
const ISO_DATE = 'YYYY-MM-DD';

export const formatCPF = (value: string) => {
  const newValueCPF = value.replace(/[^\d]/g, '');

  return newValueCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatDate = (date: string, formatDateCompleted?: boolean) => {
  if (!formatDateCompleted) return moment(date, ISO_DATE).format(SCREEN_DATE);

  if (formatDateCompleted) {
    const newDate = moment(date, SCREEN_DATE).format(ISO_DATE);

    return moment(newDate, ISO_DATE).format(SCREEN_DATE);
  }
};

export const currencyFormat = (num: any) => {
  return `${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

export const hasValue = (value: boolean) => (value ? ' Sim' : ' Não');

export const hasMessage = (value: string) =>
  !isEmpty(value) ? value : 'Sem mensagem.';
