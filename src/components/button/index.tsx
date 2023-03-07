import React, { FC } from "react";
import './index.scss'

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return <div onClick={onClick}>{children}</div>;
};

export default Button;
