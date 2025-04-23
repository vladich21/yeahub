import { ButtonProps } from "./model/types";

export const Button = ({
  children,
  onClick,
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
