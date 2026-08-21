import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./BackToHome.css";

function BackToHome() {
  return (
    <Link to="/" className="back__to-home">
      <ArrowLeft className="arrow__left" /> Back to Home
    </Link>
  );
}

export default BackToHome;
