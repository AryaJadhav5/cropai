import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check authentication status whenever location changes
    const authStatus = localStorage.getItem("isAuthenticated");
    const userNameFromStorage = localStorage.getItem("userName");
    setIsAuthenticated(authStatus === "true");
    setUserName(userNameFromStorage || "");
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")} style={{cursor: "pointer"}}>🌾 CropAI</div>

      <div className="nav-links">
        <span onClick={() => navigate("/dashboard")} className="nav-link">Dashboard</span>
        <span onClick={() => navigate("/recommend")} className="nav-link">Get Recommendation</span>
        
        {isAuthenticated ? (
          <>
            <span onClick={() => navigate("/history")} className="nav-link">My History</span>
            <div className="user-section">
              <span className="user-name">👤 {userName}</span>
              <span onClick={handleLogout} className="nav-link sign-out">Sign Out</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}