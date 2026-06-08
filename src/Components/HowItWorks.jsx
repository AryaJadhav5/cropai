export default function HowItWorks() {
  return (
    <div className="how">
      <h2>How It Works</h2>
      <p>Three simple steps to get your crop recommendation</p>

      <div className="steps">
        <div className="step">
          <div className="num">01</div>
          <h3>Create Account</h3>
          <p>Sign up and log in to your dashboard.</p>
        </div>

        <div className="step">
          <div className="num">02</div>
          <h3>Enter Soil Data</h3>
          <p>Input nutrients, weather, and climate data.</p>
        </div>

        <div className="step">
          <div className="num">03</div>
          <h3>Get Recommendation</h3>
          <p>Receive AI-powered crop suggestion instantly.</p>
        </div>
      </div>
    </div>
  );
}