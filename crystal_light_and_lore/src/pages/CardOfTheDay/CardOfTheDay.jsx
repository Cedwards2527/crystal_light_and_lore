import { Sun, Sparkles } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome.";
import TarotCardDisplay from "../../components/TarotCardDisplay/TarotCardDisplay";
import "./CardOfTheDay.css";

function CardOfTheDay() {
  const currentDate = new Date().toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section className="daily__page">
      <BackToHome />
      <div className="daily__container">
        <Sun className="daily__sun" strokeWidth={1.2} />
        <h2 className="daily__title">Daily Tarot Card</h2>
        <p className="date">{currentDate}</p>
        <p className="daily__quote">
          "This is your divine message for today. Carry its wisdom with you
          throughout your journey."
        </p>
        <TarotCardDisplay />
        <div className="daily__footer">
          <p className="footer__text">
            Meditate on this card's message. A new card will be revealed
            tomorrow at dawn.
          </p>
          <div className="footer__sparkles">
            <Sparkles className="day__sparkles" strokeWidth={1.5}></Sparkles>
            <Sparkles className="day__sparkles" strokeWidth={1.5}></Sparkles>
            <Sparkles className="day__sparkles" strokeWidth={1.5}></Sparkles>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardOfTheDay;
