import { Sun } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome.";
import "./CardOfTheDay.css";

function CardOfTheDay() {
  return (
    <section className="daily__page">
      <BackToHome />
      <div className="daily__container">
        <Sun className="daily__sun" strokeWidth={1.2} />
        <h2 className="daily__title">Daily Tarot Card</h2>
      </div>
    </section>
  );
}

export default CardOfTheDay;
