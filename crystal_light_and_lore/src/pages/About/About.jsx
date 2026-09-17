import { Sparkles, Leaf, Caravan, Heart } from "lucide-react";
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
        <div className="about__text">
          <div className="about__divider">
            <div className="about__divider-line about__divider-line-left" />
            <Sparkles className="about__sparkles" strokeWidth={1.5} />
            <div className="about__divider-line about__divider-line-right" />
          </div>

          <h3 className="about__title"> Hello there!</h3>

          <p>
            I'm Crystal, and welcome to Crystal's Light & Lore. Think of me as a
            cosmic bridge to the unseen realm. My roots belong to the sea
            breezes of Cape Cod, but these days, I'm traveling the country
            full-time in my RV, chasing sunlight and gathering magic.
          </p>
          <p>
            {" "}
            For the past eight years, I've operated as a direct bridge between
            our world and the unseen realm. When we sit down together, I like to
            brew a cup of warm tea and have an interactive collaboration.
          </p>

          <h3 className="readings__title">
            <Sparkles className="reading__sparkle" strokeWidth={1.5} />
            THE READINGS
          </h3>

          <p>
            {" "}
            My primary focus is working with multiple decks of Oracle cards,
            weaving their messages together to create a beautifully honest look
            at exactly what you need to grow right now. I don't believe a
            reading should simply tell you what the cards say. It's about
            putting the pieces together and seeing what they might be showing
            you in this particular moment.
          </p>

          <p>
            {" "}
            As a medium, the spirit world communicates with me in a variety of
            whimsical ways. Sometimes it's a sudden image flashed in my mind, a
            specific scent out of nowhere, or a whisper from angels and passed
            loved ones.
          </p>

          <p>
            My favorite part of this gift is that I act as a two-way bridge.
            While I can't force the doorway open, often these energies pop in to
            chat. When they do, I love helping you decode what their messages
            are and making sense of what comes through.
          </p>

          <h3 className="apothecary__title">
            <Leaf className="leaf" strokeWidth={1.5} />
            THE APOTHECARY
          </h3>

          <p>
            {" "}
            And when the cards are put away, the magic doesn't quite stop. I'm
            tucked into my traveling kitchen, brewing up earthly delights and
            creating things with my own two hands.
          </p>

          <p>
            {" "}
            I handcraft whimsical infused candles, intention sachets, magical
            herb blends, and spells to bring a little extra sparkle and support
            into your daily life. Each one is made with the same intention I
            bring to a reading: to create something meaningful that you can
            carry with you beyond our time together.
          </p>

          <h3 className="road__title">
            <Caravan className="caravan" strokeWidth={1.5} />
            MAGIC ON THE ROAD
          </h3>

          <p>
            Of course, having a home with wheels means that my little world is
            always moving, and because my home has wheels, I offer all of my
            interactive readings globally via Phone, Video (Zoom/FaceTime), or
            Email.
          </p>

          <p>
            And no matter where my RV is parked this week, my traveling
            apothecary is always open. I safely ship all of my handcrafted
            candles, sachets, herbs, and spells straight to your doorstep,
            nationwide.
          </p>

          <p>
            So, let's sit down, share a cup of tea, and see what beautiful
            secrets the universe is ready to whisper to you!
          </p>

          <div className="about__divider">
            <div className="about__divider-line about__divider-line-left" />
            <Heart className="about__heart" strokeWidth={1.5} />
            <div className="about__divider-line about__divider-line-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
