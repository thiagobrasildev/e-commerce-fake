import React from "react";

type ButtonProps = {
  title: string;
  containerClass?: string;
  handleClick?: () => void;
};

const Button = ({ title, containerClass, handleClick }: ButtonProps) => {
  return (
    <button className={`w-max rounded-3xl cursor-pointer ${containerClass}`}>
      {title}
    </button>
  );
};

export default Button;
