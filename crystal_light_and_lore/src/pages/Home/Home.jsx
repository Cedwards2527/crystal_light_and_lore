import { Sparkles, Calendar } from "lucide-react";
import "./Home.css";

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
        <button className="daily__card" type="button">
          <div className="daily__icon-container">
            <Calendar className="calendar" strokeWidth={1.5} />
          </div>
          <h2 className="daily__card-title">Daily Tarot Card</h2>
          <p>
            Receive your personal message from the universe. A new card revealed
            each day.
          </p>
          <span className="daily__card-pill">View Today's Card</span>
        </button>

        <button className="random__reading" type="button">
          <div className="random__icon-container">
            <Sparkles className="sparkles" strokeWidth={1.5} />
          </div>
          <h2 className="random__reading-title">Random Reading</h2>
          <p>
            Ask a question and draw a card whenever you need divine guidance.
          </p>
          <span className="random__reading-pill">Draw a Card</span>
        </button>
      </div>
      <div className="homepage__bottom">
        <p className="quote">
          "The cards are a mirror to your soul, reflecting the divine wisdom
          already within you."
        </p>
      </div>
    </section>
  );
}

export default Home;
