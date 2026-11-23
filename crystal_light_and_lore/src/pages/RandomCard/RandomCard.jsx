import { Sparkles, Heart } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome";

function RandomCard() {
  return (
    <section className="random__page">
      <BackToHome />
      <div className="random-icon__container">
        <Sparkles className="icon__sparkle" />
        <Heart className="icon__heart" strokewidth={1.5} />
        <Sparkles className="icon__sparkle" strokewidth={1.5} />
      </div>
    </section>
  );
}

export default RandomCard;
