declare type GenericType = Record<string, any>;

declare type CallBackType = {
  code?: string;
};

declare namespace AppType {
  type ToastMessage = {
    title: string;
    type: 'success' | 'error';
  };

  type OptionsType = {
    label: string;
    value: string;
  };

  type FiltersType = {
    title: string;
    options: OptionsType[];
  };
}
