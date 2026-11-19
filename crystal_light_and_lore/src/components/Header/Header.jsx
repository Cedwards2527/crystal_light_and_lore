import { Sparkles, CalendarHeart, RectangleVertical } from "lucide-react";
import { Link } from "react-router-dom";
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
            <Sparkles className="header__sparkles" strokeWidth={1.5} />
            <p className="header__subtitle">Psychic Medium & Oracle Reader</p>
            <Sparkles className="header__sparkles" />
          </div>
          <h1 className="header__title">Crystal's Light & Lore</h1>
          <button className="appointment__button" type="button">
            <CalendarHeart className="calendar__heart" strokeWidth={1.5} /> Book
            an Appointment
          </button>
        </div>
      </header>
      <div className="about__content">
        <Link to="/About" className="about__link">
          <RectangleVertical className="rectangle__icon" strokeWidth={1.5} />{" "}
          Choose a free tarot card
        </Link>
      </div>
    </section>
  );
}

export default Header;
