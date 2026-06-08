import "./WhyChoose.css"; 
import { FaRobot } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
export default function WhyChoose() {
  return (
    <div className="why">
      <h2>Why Choose CropAI?</h2>
      <p>Leverage the power of machine learning</p>

      <div className="cards">
        {/* CARD 1 */}
        <div className="card">
          <div className="logo-box">
            <FaRobot size={35} color="#4c5a00" />
          </div>
          <h3>AI-Powered Recommendations</h3>
          <p>
            Our model analyzes soil, weather, and climate data
            to suggest the best crop.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <div className="logo-box">
            <MdVerified size={35} color="#4c5a00" />
          </div>
          <h3>Accurate & Reliable</h3>
          <p>Trained on thousands of agricultural datasets.</p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <div className="logo-box">
            <FaHistory size={35} color="#4c5a00" />
          </div>
          <h3>Track Your History</h3>
          <p>Save and review all past recommendations.</p>
        </div>

      </div>
    </div>
  );
}