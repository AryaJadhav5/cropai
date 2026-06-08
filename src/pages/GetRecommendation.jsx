
import { useState } from "react";
import "./GetRecommendation.css";

export default function GetRecommendation() {

  const [prediction, setPrediction] = useState("");

  const [form, setForm] = useState({
    humidity: "",
    ph: "",
    rainfall: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    organicmatter: "",
    soilmoisture: "",
    soiltype: "",
    cropseason: "",
    temperature: "",
    longitude: "",
    latitude: "",
    region: "",
    windspeed: "",
    irrigationtype: "",
    fertilizerusage: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setForm({
      humidity: "",
      ph: "",
      rainfall: "",
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      organicmatter: "",
      soilmoisture: "",
      soiltype: "",
      cropseason: "",
      temperature: "",
      longitude: "",
      latitude: "",
      region: "",
      windspeed: "",
      irrigationtype: "",
      fertilizerusage: ""
    });
    setPrediction("");
  };

  const handleSubmit = async () => {
    // Validation: check all fields are filled
    const emptyFields = Object.entries(form)
      .filter(([_, value]) => value === "")
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      alert(`Please fill in all fields: ${emptyFields.join(", ")}`);
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:5001/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            N: form.nitrogen,
            P: form.phosphorus,
            K: form.potassium,
            Organic_Matter: form.organicmatter,
            Soil_Moisture: form.soilmoisture,
            Soil_Type: form.soiltype,
            Crop_Season: form.cropseason,
            Temperature: form.temperature,
            Rainfall: form.rainfall,
            Longitude: form.longitude,
            Latitude: form.latitude,
            pH: form.ph,
            Region: form.region,
            Humidity: form.humidity,
            Wind_Speed: form.windspeed,
            Irrigation: form.irrigationtype,
            Fertilizer_Usage: form.fertilizerusage
          })
        }
      );

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setPrediction(data.prediction);
      }

    } catch (error) {
      console.error(error);
      alert("Error connecting to server. Make sure the backend is running on http://127.0.0.1:5001");
    }
  };

  return (
    <div className="rec-container">
      <div className="rec-card">

        <div className="input-group full">
          <label>Nitrogen</label>
          <input
            type="number"
            name="nitrogen"
            value={form.nitrogen}
            onChange={handleChange}
            placeholder="202"
          />
        </div>

        <div className="input-group full">
          <label>Phosphorus</label>
          <input
            type="number"
            name="phosphorus"
            value={form.phosphorus}
            onChange={handleChange}
            placeholder="202"
          />
        </div>

        <div className="input-group full">
            <label>Potassium (K)</label>
            <input
              type="number"
              name="potassium"
              value={form.potassium}
              onChange={handleChange}
              placeholder="202"
            />
          </div>

          <div className="input-group full">
            <label>Organic Matter</label>
            <input
              type="number"
              name="organicmatter"
              value={form.organicmatter}
              onChange={handleChange}
              placeholder="2.5"
            />
          </div>

            <div className="input-group full">
            <label>Soil Moisture</label>
            <input
              type="number"
              name="soilmoisture"
              value={form.soilmoisture}
              onChange={handleChange}
              placeholder="18.0"
            />
          </div>

          <div className="input-group full">
            <label>Soil Type</label>
            <select
              name="soiltype"
              value={form.soiltype}
              onChange={handleChange}
            >
              <option value="">-- Select Soil Type --</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Alluvial">Alluvial</option>
              <option value="Laterite">Laterite</option>
            </select>
          </div>

             <div className="input-group full">
            <label>Crop Season (Kharif/Rabi/Zaid)</label>
            <select
              name="cropseason"
              value={form.cropseason}
              onChange={handleChange}
            >
              <option value="">-- Select Season --</option>
              <option value="Kharif">Kharif</option>
              <option value="Rabi">Rabi</option>
              <option value="Zaid">Zaid</option>
            </select>
          </div>

          <div className="input-group full">
          <label>Temperature (°C)</label>
          <input
            type="number"
            name="temperature"
            value={form.temperature}
            onChange={handleChange}
            placeholder="25"
          />
        </div>

             <div className="input-group full">
          <label>Rainfall (mm)</label>
          <input
            type="number"
            name="rainfall"
            value={form.rainfall}
            onChange={handleChange}
            placeholder="202"
          />
        </div>

        <div className="input-group full">
          <label>Longitude</label>
          <input
            type="number"
            step="0.01"
            name="longitude"
            value={form.longitude}
            onChange={handleChange}
            placeholder="73.85"
          />
        </div>

        <div className="input-group full">
          <label>Latitude</label>
          <input
            type="number"
            step="0.01"
            name="latitude"
            value={form.latitude}
            onChange={handleChange}
            placeholder="18.52"
          />
        </div>

        <div className="input-group full">
          <label>Soil pH</label>
          <input
            type="number"
            name="ph"
            value={form.ph}
            onChange={handleChange}
            placeholder="6.5"
          />
        </div>

        <div className="input-group full">
          <label>Region</label>
          <select
            name="region"
            value={form.region}
            onChange={handleChange}
          >
            <option value="">-- Select Region --</option>
            <option value="Mumbai City">Mumbai City</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Thane">Thane</option>
            <option value="Palghar">Palghar</option>
            <option value="Raigad">Raigad</option>
            <option value="Ratnagiri">Ratnagiri</option>
            <option value="Sindhudurg">Sindhudurg</option>
            <option value="Pune">Pune</option>
            <option value="Satara">Satara</option>
            <option value="Sangli">Sangli</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Solapur">Solapur</option>
            <option value="Aurangabad">Aurangabad</option>
            <option value="Jalna">Jalna</option>
            <option value="Beed">Beed</option>
            <option value="Osmanabad">Osmanabad</option>
            <option value="Latur">Latur</option>
            <option value="Nanded">Nanded</option>
            <option value="Parbhani">Parbhani</option>
            <option value="Hingoli">Hingoli</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Wardha">Wardha</option>
            <option value="Bhandara">Bhandara</option>
            <option value="Gondia">Gondia</option>
            <option value="Chandrapur">Chandrapur</option>
            <option value="Gadchiroli">Gadchiroli</option>
            <option value="Amravati">Amravati</option>
            <option value="Akola">Akola</option>
            <option value="Washim">Washim</option>
            <option value="Yavatmal">Yavatmal</option>
            <option value="Nashik">Nashik</option>
            <option value="Dhule">Dhule</option>
            <option value="Nandurbar">Nandurbar</option>
            <option value="Jalgaon">Jalgaon</option>
          </select>
        </div>

        <div className="input-group full">
          <label>Humidity (%)</label>
          <input
            type="number"
            name="humidity"
            value={form.humidity}
            onChange={handleChange}
            placeholder="82"
          />
        </div>

        <div className="input-group full">
          <label>Wind Speed (km/h)</label>
          <input
            type="number"
            name="windspeed"
            value={form.windspeed}
            onChange={handleChange}
            placeholder="10"
          />
        </div>

        <div className="input-group full">
          <label>Irrigation Type (Drip/Sprinkler/Flood)</label>
          <input
            type="text"
            name="irrigationtype"
            value={form.irrigationtype}
            onChange={handleChange}
            placeholder="Drip"
          />
        </div>

        <div className="input-group full">
          <label>Fertilizer Usage (kg/hectare)</label>
          <input
            type="number"
            name="fertilizerusage"
            value={form.fertilizerusage}
            onChange={handleChange}
            placeholder="500"
          />
        </div>

        <div className="btn-row">
          <button type="button" className="main-btn" onClick={handleSubmit}>
            🌿 Get Recommendation
          </button>
          <button type="button" className="clear-btn" onClick={handleClear}>
            ↻ Clear
          </button>
        </div>

        {prediction && (
          <div className="prediction-box">
            <h3>Recommended Crop</h3>
            <p>{prediction}</p>
          </div>
        )}
      </div>

      <div className="tips-box">
        <h3>💡 Tips for Accurate Results</h3>
        <ul>
          <li>Get soil test results for precise N, P, K values.</li>
          <li>Use 30-day average temperature & humidity.</li>
          <li>Enter annual rainfall, not daily values.</li>
        </ul>
      </div>
    </div>
  );
}