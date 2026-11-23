import { Sparkles, Heart } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome";
import "./RandomCard.css";

function RandomCard() {
  return (
    <section className="random__page">
      <BackToHome />
      <div className="random__container">
        <div className="random-icon__container">
          <Sparkles className="icon__sparkle" />
          <Heart className="icon__heart" strokewidth={1.5} />
          <Sparkles className="icon__sparkle" strokewidth={1.5} />
        </div>
        <h2 className="random__title">Draw Your Card</h2>
        <p className="random__instructions">
          Take a deep breath. Center yourself. When you're ready, ask yourself a
          question and draw a card.
        </p>
      </div>
    </section>
  );
}

export default RandomCard;
