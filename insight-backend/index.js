const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://solarcurtailmentoptimizer.vercel.app',
  credentials: true
}));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// app.post("/generate-insights", async (req, res) => {
//   try {
//     const data = req.body;
    

//     // 🔥 Preprocess (important)
//     const filtered = {
//   peak: data.peak,
//   summary: {
//     total_curtailed_mwh: data.summary.total_curtailed_mwh,
//     solar_utilization_percent: data.summary.solar_utilization_percent,
//     coal_reduction_percent: data.summary.coal_reduction_percent,
//     co2_avoided_tons: data.summary.co2_avoided_tons
//   },
//   alerts: data.alerts,
//   curtailment: data.data
//     .filter(d => d.curtailment_mw > 20)
//     .map(d => ({ time: d.time, curtailment_mw: d.curtailment_mw, coal_mw: d.coal_mw }))
// };

//     const prompt = `
// You are an expert power grid analyst.

// Analyze this data and return ONLY JSON:

// {
//   "insight": "",
//   "problem": "",
//   "recommendation": ""
// }

// Focus on:
// - solar curtailment
// - coal inefficiency
// - peak solar

// DATA:
// ${JSON.stringify(filtered)}
// `;

//     console.log(prompt);
//     const result = await model.generateContent(prompt);
//     console.log(result);
    
//     const text = result.response.text();

// console.log(text);
//     // 🧠 Parse JSON safely
//     const cleaned = text.replace(/```json|```/g, "").trim();
//     console.log(cleaned);
//     const parsed = JSON.parse(cleaned);

//     res.json(parsed);
//     console.log(result);
    

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to generate insights" });
//   }
// });

// // Temporary fallback while quota issues persist
app.post("/generate-insights", async (req, res) => {
  res.json({
    insight: "Peak solar generation of 696 MW occurred at 12:00, with 90.1% utilization. However, 566 MWh was curtailed during midday hours due to coal fleet inflexibility.",
    problem: "Coal generation remained unnecessarily high between 10:00–15:00, forcing 544 MWh of solar curtailment during the peak solar window when coal could have been ramped down.",
    recommendation: "Begin ramping down coal by 08:00 to reach minimum stable load before peak solar at 12:00. Target coal dispatch below 550 MW during 10:00–15:00 to absorb full solar output and eliminate curtailment losses."
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});