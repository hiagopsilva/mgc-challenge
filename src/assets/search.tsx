import React, { FC } from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
};

const Svg: FC<Props> = ({ width = 44, height = 44, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle cx="11" cy="11" r="6" stroke="#fff" />
    <path
      d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
      stroke="#fff"
      strokeLinecap="round"
    />
    <path d="M20 20L17 17" stroke="#fff" strokeLinecap="round" />
  </svg>
);

export default Svg;
