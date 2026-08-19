import { Sparkles, CalendarHeart, User } from "lucide-react";
import headerImage from "../../assets/header-image.jpg";
import "./Header.css";

function Header() {
  return (
    <section className="header__page">
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
          <button className="appointment__button">
            <CalendarHeart className="calendar__heart" strokeWidth={1.5} /> Book
            an Appointment
          </button>
        </div>
      </header>
      <div className="about__content">
        <button className="about__button">
          <User className="user__icon" strokeWidth={1.5} /> Meet Crystal
        </button>
      </div>
    </section>
  );
}

export default Header;
