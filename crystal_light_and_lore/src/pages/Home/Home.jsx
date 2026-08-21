import { Link } from "react-router-dom";
import { Sparkles, Calendar } from "lucide-react";

import "./Home.css";

const dots = [...Array(5)].map((_, i) => <div key={i} className="dot" />);

function Home() {
  return (
    <section className="home__page">
      <div className="home__subtitle-row">
        <Sparkles className="home__sparkles" />
        <p className="home__subtitle">Light · Love · Guidance</p>
        <Sparkles className="home__sparkles" />
      </div>
      <h2 className="home__title">Spiritual Readings</h2>
      <p className="home__paragraph">
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
      <div className="homepage__bottom">
        <p className="quote">
          "The cards are a mirror to your soul, reflecting the divine wisdom
          already within you."
        </p>
        <div className="dots">{dots}</div>
      </div>
    </section>
  );
}

export default Home;
