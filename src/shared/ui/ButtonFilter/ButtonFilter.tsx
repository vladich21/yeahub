import styles from "./styles.module.scss";

interface ButtonProps {
  id?: number;
  text?: string;
  img?: string;
  onClick?: (value: number) => void;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonFilter = ({
  id,
  text,
  img,
  onClick,
  className,
  children,
  ...props
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick && id !== undefined) {
      onClick(id);
    }
  };

  return (
    <button
      className={`${className} ${styles.button}`}
      {...props}
      onClick={handleClick}
    >
      {img && <img className={styles.img} src={img} alt="" />}
      {children || text} {/* Рендерим children или text */}
    </button>
  );
};
