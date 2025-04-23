import { Button } from "@shared/ui/Button";
import styles from "./RegisterButton.module.scss";
export const RegisterButton = () => {
  return (
    <Button className={styles.register} onClick={() => console.log("register")}>
      Регистрация
    </Button>
  );
};
