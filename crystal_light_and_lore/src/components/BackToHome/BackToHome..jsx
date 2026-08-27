import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./BackToHome.css";

function BackToHome() {
  return (
    <div className="back__to-home-container">
      <Link to="/" className="back__to-home">
        <ArrowLeft className="arrow__left" /> Back to Home
      </Link>
    </div>
  );
}

export default BackToHome;
