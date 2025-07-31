import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
type InputProps = InputHTMLAttributes<HTMLInputElement>;
export const Input = (props: InputProps) => {
  return <input {...props} className={styles.input} />;
};
