import { Sun } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome.";
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
        <p className="subtitle">
          "This is your divine message for today. Carry its wisdom with you
          throughout your journey."
        </p>
      </div>
    </section>
  );
}
export default CardOfTheDay;
