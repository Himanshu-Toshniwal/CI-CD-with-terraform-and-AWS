const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.static('public'));
app.use(express.json());

const API_KEY = "3bf467d4cead6c183d81560f2b60ad56";

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🌤️ Weather App</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                background: linear-gradient(135deg, #0f0c29 0%, #302b63 35%, #24243e 100%); 
                min-height: 100vh; 
                color: white;
                padding: 20px;
                animation: gradientShift 12s ease infinite;
            }
            @keyframes gradientShift {
                0% { background: linear-gradient(135deg, #0f0c29 0%, #302b63 35%, #24243e 100%); }
                25% { background: linear-gradient(135deg, #141e30 0%, #243b55 35%, #0f3460 100%); }
                50% { background: linear-gradient(135deg, #2c3e50 0%, #34495e 35%, #2c3e50 100%); }
                75% { background: linear-gradient(135deg, #232526 0%, #414345 35%, #232526 100%); }
                100% { background: linear-gradient(135deg, #0f0c29 0%, #302b63 35%, #24243e 100%); }
            }
            .container { max-width: 800px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 40px; }
            .header h1 { 
                font-size: 3rem; 
                margin-bottom: 10px; 
                background: linear-gradient(45deg, #00d4ff, #090979, #00d4ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: textShine 3s ease-in-out infinite alternate;
            }
            @keyframes textShine {
                0% { background: linear-gradient(45deg, #00d4ff, #090979, #00d4ff); }
                100% { background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff); }
            }
            .search-box { 
                background: linear-gradient(145deg, rgba(0,212,255,0.15), rgba(9,9,121,0.1)); 
                padding: 30px; 
                border-radius: 25px; 
                backdrop-filter: blur(20px); 
                margin-bottom: 30px;
                text-align: center;
                border: 1px solid rgba(0,212,255,0.3);
                box-shadow: 0 8px 32px rgba(0,212,255,0.2);
            }
            .search-input { 
                width: 70%; 
                padding: 15px 20px; 
                border: 2px solid rgba(255,255,255,0.3); 
                border-radius: 30px; 
                font-size: 1.1rem; 
                margin-right: 10px;
                outline: none;
                background: rgba(255,255,255,0.9);
                color: #333;
                transition: all 0.3s ease;
            }
            .search-btn { 
                padding: 15px 25px; 
                background: linear-gradient(45deg, #00d4ff, #090979); 
                color: white; 
                border: none; 
                border-radius: 30px; 
                font-size: 1.1rem; 
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
            }
            .weather-card { 
                background: linear-gradient(145deg, rgba(0,212,255,0.15), rgba(9,9,121,0.1)); 
                padding: 40px; 
                border-radius: 25px; 
                backdrop-filter: blur(25px); 
                text-align: center;
                display: none;
                border: 1px solid rgba(0,212,255,0.3);
                box-shadow: 0 8px 32px rgba(0,212,255,0.2);
            }
            .temperature { 
                font-size: 4rem; 
                font-weight: bold; 
                margin-bottom: 10px; 
                background: linear-gradient(45deg, #00d4ff, #ffffff, #00d4ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🌤️ Weather App</h1>
                <p>Accurate and Real-time Weather Information</p>
            </div>
            
            <div class="search-box">
                <input type="text" class="search-input" placeholder="Enter city name" id="cityInput">
                <button class="search-btn" onclick="getWeather()">🔍 Check Weather</button>
            </div>
            
            <div class="weather-card" id="weatherCard">
                <div style="font-size: 5rem; margin-bottom: 20px;">🌤️</div>
                <div class="temperature" id="temperature">25°C</div>
                <div style="font-size: 1.5rem; margin-bottom: 30px;">Clear Sky</div>
                <div style="font-size: 1.3rem;">📍 Mumbai, India</div>
            </div>
        </div>
        
        <script>
            function getWeather() {
                document.getElementById('weatherCard').style.display = 'block';
            }
        </script>
    </body>
    </html>
  `);
});

app.listen(8080, () => {
    console.log("🌤️ Weather App running on port 8080");
});