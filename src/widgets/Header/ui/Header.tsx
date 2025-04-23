import { LoginButton } from "@features/Auth/ui/LoginButton";
import { RegisterButton } from "@features/Auth/ui/RegisterButton";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "@shared/ui/Logo/Logo";
import NavLinks from "./NavLinks";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__left}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <NavLinks />
        </div>
        <div className={styles.header__auth}>
          <Link to="login">
            <LoginButton />
          </Link>
          <Link to="register">
            <RegisterButton />
          </Link>
        </div>
      </div>
    </header>
  );
};
