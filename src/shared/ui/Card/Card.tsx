import { CardProps } from "../../types/types";
import styles from "./style.module.scss";

export const Card = ({ children, question }: CardProps) => {
  return (
    <div className={styles.card}>
      {children}
      {question && (
        <div>
          <h3>{question.title}</h3>
          <p>{question.description}</p>
        </div>
      )}
    </div>
  );
};
