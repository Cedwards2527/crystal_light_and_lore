import { Link } from "react-router-dom";
import { Sparkles, Calendar } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome.";

import "./Cards.css";

const dots = [...Array(5)].map((_, i) => <div key={i} className="dot" />);

function Cards() {
  return (
    <section className="cards__page">
      <BackToHome />
      <div className="card__subtitle-row">
        <Sparkles className="card__sparkles" />
        <p className="card__subtitle">Light · Love · Guidance</p>
        <Sparkles className="card__sparkles" />
      </div>
      <h2 className="card__title">Free Daily Tarot Reading</h2>
      <p className="card__paragraph">
        Welcome, beautiful soul. Connect with divine guidance through the
        ancient wisdom of tarot.
      </p>
      <div className="button__container">
        <Link to="/daily" className="daily__card">
          <div className="daily__icon-container">
            <Calendar className="calendar" strokeWidth={1.5} />
          </div>
          <h2 className="daily__card-title">Daily Tarot Card</h2>
          <p>
            Receive your personal message from the universe. A new card revealed
            each day.
          </p>
          <span className="daily__card-pill">View Today's Card</span>
        </Link>

        <Link to="/random" className="random__reading">
          <div className="random__icon-container">
            <Sparkles className="sparkles" strokeWidth={1.5} />
          </div>
          <h2 className="random__reading-title">Random Reading</h2>
          <p>
            Ask a question and draw a card whenever you need divine guidance.
          </p>
          <span className="random__reading-pill">Draw a Card</span>
        </Link>
      </div>
      <div className="card-page__bottom">
        <p className="quote">
          "The cards are a mirror to your soul, reflecting the divine wisdom
          already within you."
        </p>
        <div className="dots">{dots}</div>
      </div>
    </section>
  );
}

export default Cards;
