import { Sparkles } from "lucide-react";
import BackToHome from "../../components/BackToHome/BackToHome.";
import aboutImage from "../../assets/about-image.jpg";
import "./About.css";

function About() {
  return (
    <section className="about__page">
      <BackToHome />
      <div className="about__container">
        <img className="about__image" src={aboutImage} />
        <h2 className="about__name">Crystal</h2>
        <p className="about__subtitle">Psychic Medium & Oracle Reader</p>

        <div className="about__divider">
          <div className="about__divider-line about__divider-line-left" />
          <Sparkles className="about__sparkles" strokeWidth={1.5} />
          <div className="about__divider-line about__divider-line-right" />
        </div>
      </div>
    </section>
  );
}

export default About;
