import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("userName");
    if (userNameFromStorage) {
      setUserName(userNameFromStorage);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {userName} 👋</h1>
        <p>Here's your crop recommendation overview.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Total Analyses</h3>
            <p className="stat-value">1</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🌾</div>
          <div className="stat-content">
            <h3>Last Crop</h3>
            <p className="stat-value">Rice</p>
          </div>
        </div>

        <div className="stat-card new-analysis">
          <div className="stat-icon">🍃</div>
          <div className="stat-content">
            <h3>New Analysis</h3>
            <button 
              className="get-started-btn"
              onClick={() => navigate("/recommend")}
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>

      <div className="recent-section">
        <div className="recent-header">
          <h2>⏱ Recent Recommendations</h2>
          <a href="#" className="view-all">View all →</a>
        </div>

        <div className="recent-item">
          <div className="recent-icon">🌾</div>
          <div className="recent-info">
            <h4>Rice</h4>
            <p className="recent-details">pH 6.5 · 25°C · 82% humidity</p>
          </div>
          <div className="recent-date">4/14/2026</div>
        </div>
      </div>
    </div>
  );
}
