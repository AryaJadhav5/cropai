import { useNavigate } from "react-router-dom";
import { GiWheat } from "react-icons/gi";


import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();  

  return (
    <div className="hero">
      <div className="hero-left">
        <p className="tag">🌱 Machine Learning Powered</p>

        <h1>
          Smart Crop
          <br /><span>Recommendation</span>
        </h1>

        <p>
          Confused about what to plant? Enter your soil and climate data
          and let our AI recommend the perfect crop.
        </p>

      
        <button className="btn" onClick={() => navigate("/recommend")}>
          Get Started →
        </button>
      </div>

      <div className="hero-right">

        <div className="card">

  <div className="logo-box">
    <GiWheat size={40} color="#4CAF50" />
  </div>

  <h3>CropAI</h3>
  <p>Analyzes 7 key parameters</p>

          <div className="bar">Nitrogen (N)</div>
          <div className="bar">Phosphorus (P)</div>
          <div className="bar">Potassium (K)</div>
          <div className="bar">Temperature</div>
          <div className="bar">Humidity</div>
          <div className="bar">pH</div>
          <div className="bar">Rainfall</div>

          <button className="result">🌾 Rice</button>
        </div>
      </div>
  </div>
  );
}