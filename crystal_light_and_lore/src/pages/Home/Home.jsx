import { Sparkles } from "lucide-react";
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
    </section>
  );
}

export default Home;
