import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import CardOfTheDay from "./pages/CardOfTheDay/CardOfTheDay";
import RandomCard from "./pages/RandomCard/RandomCard";
import About from "./pages/About/About";
import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<CardOfTheDay />} />
          <Route path="/random" element={<RandomCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
