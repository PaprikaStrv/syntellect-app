import React, { FC } from "react";

export interface ButtonProps {
  buttonText: string;
  callback: () => void;
}

export const Button: FC<ButtonProps> = ({ buttonText, callback }) => {
  return <button onClick={callback} style={{padding: '12px', cursor: 'pointer', fontSize: '20px'}}>{buttonText}</button>;
};
