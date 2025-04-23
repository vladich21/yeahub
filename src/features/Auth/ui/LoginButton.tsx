import { Button } from "@shared/ui/Button";
import styles from "./LoginButton.module.scss";
export const LoginButton = () => {
  return (
    <Button className={styles.login} onClick={() => console.log("login")}>
      Вход
    </Button>
  );
};
