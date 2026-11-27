import { Sparkles, Heart } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome";
import "./RandomCard.css";

const randomDots = [...Array(7)].map((_, i) => (
  <div key={i} className="random__dot" />
));

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
        </p>
        <p className="random__quote">
          "Trust the devine timing. The card you need will always find you."
        </p>
        <div
          className="before-card__placeholder"
          type="button"
          // onClick={drawCard}
          // disabled={isRevealing}
        >
          <Sparkles className="container__sparkle" strokeWidth={1} />
        </div>
        <p className="placeholder__text">Click below to reveal your guidance</p>
        <button className="random-card__button">
          <Sparkles className="button__sparkles" strokeWidth={1.5} />
          Draw Card
          <Sparkles className="button__sparkles" strokeWidth={1.5} />
        </button>
        <p className="random-footer__text">
          Each card drawn is a sacred moment. Take time to reflect on its
          message before drawing again.
        </p>
        <div className="random__dots">{randomDots}</div>
      </div>
    </section>
  );
}

export default RandomCard;
