import { Sparkles } from "lucide-react";
import headerImage from "../../assets/header-image.jpg";
import "./Header.css";

function Header() {
  return (
    <header
      className="header"
      style={{ "--header-image": `url(${headerImage})` }}
    >
      <img className="header__image" src={headerImage} alt="Header Image" />
      <div className="header__content">
        <div className="header__subtitle-row">
          <Sparkles className="header__sparkles" />
          <p className="header__subtitle">Psychic Medium & Oracle Reader</p>
          <Sparkles className="header__sparkles" />
        </div>
        <h1 className="header__title">Crystal's Light & Lore</h1>
      </div>
    </header>
  );
}

export default Header;
