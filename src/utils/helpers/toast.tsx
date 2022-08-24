import { Toastify } from '~/utils/modules';

type AlertMessage = string | string[] | Element | Element[];
type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';
type TypePosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

type ShowAlertProps = {
  message: AlertMessage;
  type?: TypeOptions;
  position?: TypePosition;
};

const Msg = ({ message }: any): JSX.Element => (
  <div style={{ width: 260 }}>{message}</div>
);

export default function Alert({
  message,
  type = 'error',
  position = 'top-left',
  ...rest
}: ShowAlertProps): void {
  Toastify.toast(<Msg message={message} />, { type, position, ...rest });
}
