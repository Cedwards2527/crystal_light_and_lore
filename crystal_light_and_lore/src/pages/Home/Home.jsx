import { Sparkles } from "lucide-react";
import "./Home.css";

function Home() {
  return (
    <section className="home__page">
      <div className="home">
        <Sparkles className="home__sparkles" />
        <p className="home__subtitle">Light · Love · Guidance</p>
        <Sparkles className="home__sparkles" />
      </div>
    </section>
  );
}

export default Home;
