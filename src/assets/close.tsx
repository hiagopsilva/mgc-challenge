import React, { FC } from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
};

const Svg: FC<Props> = ({ width = 26, height = 26, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M18 6L6 18"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Svg;
