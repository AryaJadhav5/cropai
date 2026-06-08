import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import WhyChoose from "./Components/WhyChoose";
import GetRecommendation from "./pages/GetRecommendation";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HowItWorks />
                <WhyChoose />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recommend" element={<GetRecommendation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;