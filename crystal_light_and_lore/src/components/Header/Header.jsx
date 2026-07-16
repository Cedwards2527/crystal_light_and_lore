import headerImage from "../../assets/header-image.jpg";
import "./Header.css";

function Header() {
  return (
    <header
      className="header"
      style={{ "--header-image": `url(${headerImage})` }}
    >
      <img className="header__image" src={headerImage} alt="Header Image" />
    </header>
  );
}

export default Header;
