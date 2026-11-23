import { Sparkles, Heart } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome";
import "./RandomCard.css";

function RandomCard() {
  return (
    <section className="random__page">
      <BackToHome />
      <div className="random__container">
        <div className="random-icon__container">
          <Sparkles className="random__icon" strokeWidth={1} />
          <Heart className="random__icon" strokeWidth={1} />
          <Sparkles className="random__icon" strokeWidth={1} />
        </div>
        <h2 className="random__title">Draw Your Card</h2>
        <p className="random__instructions">
          Take a deep breath. Center yourself. When you're ready, ask yourself a
          question and draw a card.
          <p className="random__quote">
            "Trust the devine timing. The card you need will always find you."
          </p>
        </p>
      </div>
    </section>
  );
}

export default RandomCard;
