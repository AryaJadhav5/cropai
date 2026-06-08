from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
print("STEP 1")
app = Flask(__name__)
CORS(app)

print("STEP 2")

try:
    saved = joblib.load("Crop_Recommendation_System_.pkl")
    print("MODEL LOADED")
except Exception as e:
    print("ERROR:", e)

print("STEP 3")

print(type(saved))

model = saved["model"]
encoders = saved["encoders"]
target_encoder = saved["target_encoder"]

print("STEP 4")

@app.route("/")
def home():
    return "Flask API is running successfully!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # Check for required fields
        required_fields = [
            "N", "P", "K", "Organic_Matter", "Soil_Moisture",
            "Soil_Type", "Crop_Season", "Region", "Irrigation",
            "Temperature", "Rainfall", "Longitude", "Latitude",
            "pH", "Humidity", "Wind_Speed", "Fertilizer_Usage"
        ]

        missing = [f for f in required_fields if f not in data or data[f] in (None, "")]
        if missing:
            return jsonify({
                "error": f"Missing or empty fields: {', '.join(missing)}"
            }), 400

        try:
            soil_code = encoders["Soil_Type"].transform(
                [data["Soil_Type"]]
            )[0]
        except Exception as e:
            return jsonify({
                "error": f"Invalid Soil_Type '{data['Soil_Type']}': {str(e)}"
            }), 400

        try:
            season_code = encoders["Crop_Season"].transform(
                [data["Crop_Season"]]
            )[0]
        except Exception as e:
            return jsonify({
                "error": f"Invalid Crop_Season '{data['Crop_Season']}': {str(e)}"
            }), 400
 
        try:
            region_code = encoders["Region"].transform(
                [data["Region"]]
            )[0]
        except Exception as e:
            return jsonify({
                "error": f"Invalid Region '{data['Region']}': {str(e)}"
            }), 400

        try:
            irrigation_code = encoders["Irrigation"].transform(
                [data["Irrigation"]]
            )[0]
        except Exception as e:
            return jsonify({
                "error": f"Invalid Irrigation '{data['Irrigation']}': {str(e)}"
            }), 400

        # Build feature vector in the same order used during model training.
        features = [[
            float(data["N"]),
            float(data["P"]),
            float(data["K"]),
            float(data["Organic_Matter"]),
            float(data["Soil_Moisture"]),
            soil_code,
            season_code,
            float(data["Temperature"]),
            float(data["Rainfall"]),
            float(data["Longitude"]),
            float(data["Latitude"]),
            float(data["pH"]),
            region_code,
            float(data["Humidity"]),
            float(data["Wind_Speed"]),
            irrigation_code,
            float(data["Fertilizer_Usage"])
        ]]

        prediction = model.predict(features)

        print("Raw prediction:", prediction)

        crop_name = target_encoder.inverse_transform(prediction)[0]

        print("Crop name:", crop_name)

        return jsonify({
            "prediction": crop_name
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400

if __name__ == "__main__":
    print("Step 5")
    app.run(port=5001, debug=True)