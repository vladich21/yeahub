import logoSvg from "@shared/assets/images/Logo.svg";

export const Logo = () => {
  return (
    <div className="header__logo">
      <img src={logoSvg} alt="Yeahub logo" />
    </div>
  );
};
