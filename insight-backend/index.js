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

app.post("/generate-insights", async (req, res) => {
  try {
    const data = req.body;
    const data = {
  "meta": {
    "time_step_minutes": 15,
    "horizon_hours": 24,
    "generated_at": "2026-04-24T19:14:50.732436",
    "status": "FEASIBLE_WITH_SHORTAGE"
  },
  "summary": {
    "total_demand_mwh": 26882.85,
    "total_solar_mwh": 5727.82,
    "total_coal_mwh": 18069.75,
    "total_curtailed_mwh": 566.57,
    "total_shortage_mwh": 3641,
    "total_overgen_mwh": 0,
    "avg_solar_output_mw": 215.05,
    "coal_reduction_percent": 32.78,
    "solar_utilization_percent": 90.11,
    "coal_saved_mwh": 8813.1,
    "co2_avoided_tons": 8636.84,
    "cost_savings_inr": 35252400
  },
  "peak": {
    "solar_mw": 696.23,
    "time": "12:00"
  },
  "data": [
    {
      "demand_mw": 999.35,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 199,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T00:00:00",
      "time": "00:00"
    },
    {
      "demand_mw": 999.42,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 199,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T01:00:00",
      "time": "01:00"
    },
    {
      "demand_mw": 999.67,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 199,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T02:00:00",
      "time": "02:00"
    },
    {
      "demand_mw": 1023.48,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 223,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T03:00:00",
      "time": "03:00"
    },
    {
      "demand_mw": 1052.17,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 252,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T04:00:00",
      "time": "04:00"
    },
    {
      "demand_mw": 1079.25,
      "solar_mw": 9.22,
      "solar_used_mw": 9,
      "coal_mw": 800,
      "total_mw": 809,
      "shortage_mw": 270,
      "overgen_mw": 0,
      "curtailment_mw": 0.22,
      "timestamp": "2026-04-24T05:00:00",
      "time": "05:00"
    },
    {
      "demand_mw": 1110.24,
      "solar_mw": 162.34,
      "solar_used_mw": 162,
      "coal_mw": 800,
      "total_mw": 962,
      "shortage_mw": 148,
      "overgen_mw": 0,
      "curtailment_mw": 0.34,
      "timestamp": "2026-04-24T06:00:00",
      "time": "06:00"
    },
    {
      "demand_mw": 1133.13,
      "solar_mw": 248.72,
      "solar_used_mw": 248,
      "coal_mw": 800,
      "total_mw": 1048,
      "shortage_mw": 85,
      "overgen_mw": 0,
      "curtailment_mw": 0.72,
      "timestamp": "2026-04-24T07:00:00",
      "time": "07:00"
    },
    {
      "demand_mw": 1151.48,
      "solar_mw": 361.52,
      "solar_used_mw": 361,
      "coal_mw": 790,
      "total_mw": 1151,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 0.52,
      "timestamp": "2026-04-24T08:00:00",
      "time": "08:00"
    },
    {
      "demand_mw": 1330.5,
      "solar_mw": 473.62,
      "solar_used_mw": 473,
      "coal_mw": 800,
      "total_mw": 1273,
      "shortage_mw": 57,
      "overgen_mw": 0,
      "curtailment_mw": 0.62,
      "timestamp": "2026-04-24T09:00:00",
      "time": "09:00"
    },
    {
      "demand_mw": 1307.49,
      "solar_mw": 591.61,
      "solar_used_mw": 557,
      "coal_mw": 750,
      "total_mw": 1307,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 34.61,
      "timestamp": "2026-04-24T10:00:00",
      "time": "10:00"
    },
    {
      "demand_mw": 1156.94,
      "solar_mw": 666.64,
      "solar_used_mw": 486,
      "coal_mw": 670,
      "total_mw": 1156,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 180.64,
      "timestamp": "2026-04-24T11:00:00",
      "time": "11:00"
    },
    {
      "demand_mw": 1153.1,
      "solar_mw": 696.23,
      "solar_used_mw": 563,
      "coal_mw": 590,
      "total_mw": 1153,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 133.23,
      "timestamp": "2026-04-24T12:00:00",
      "time": "12:00"
    },
    {
      "demand_mw": 1136.81,
      "solar_mw": 669.49,
      "solar_used_mw": 610.5,
      "coal_mw": 525.5,
      "total_mw": 1136,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 58.99,
      "timestamp": "2026-04-24T13:00:00",
      "time": "13:00"
    },
    {
      "demand_mw": 1115.28,
      "solar_mw": 593.32,
      "solar_used_mw": 534,
      "coal_mw": 581,
      "total_mw": 1115,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 59.32,
      "timestamp": "2026-04-24T14:00:00",
      "time": "14:00"
    },
    {
      "demand_mw": 1074.23,
      "solar_mw": 490.33,
      "solar_used_mw": 413,
      "coal_mw": 661,
      "total_mw": 1074,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 77.33,
      "timestamp": "2026-04-24T15:00:00",
      "time": "15:00"
    },
    {
      "demand_mw": 1070.43,
      "solar_mw": 359.65,
      "solar_used_mw": 342.5,
      "coal_mw": 727.5,
      "total_mw": 1070,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 17.15,
      "timestamp": "2026-04-24T16:00:00",
      "time": "16:00"
    },
    {
      "demand_mw": 1017.59,
      "solar_mw": 244.47,
      "solar_used_mw": 242.25,
      "coal_mw": 774.75,
      "total_mw": 1017,
      "shortage_mw": 0,
      "overgen_mw": 0,
      "curtailment_mw": 2.22,
      "timestamp": "2026-04-24T17:00:00",
      "time": "17:00"
    },
    {
      "demand_mw": 999.66,
      "solar_mw": 160.66,
      "solar_used_mw": 160,
      "coal_mw": 800,
      "total_mw": 960,
      "shortage_mw": 39,
      "overgen_mw": 0,
      "curtailment_mw": 0.66,
      "timestamp": "2026-04-24T18:00:00",
      "time": "18:00"
    },
    {
      "demand_mw": 1283.91,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 483,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T19:00:00",
      "time": "19:00"
    },
    {
      "demand_mw": 1401.08,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 601,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T20:00:00",
      "time": "20:00"
    },
    {
      "demand_mw": 1283.64,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 483,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T21:00:00",
      "time": "21:00"
    },
    {
      "demand_mw": 1002.06,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 202,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T22:00:00",
      "time": "22:00"
    },
    {
      "demand_mw": 1001.94,
      "solar_mw": 0,
      "solar_used_mw": 0,
      "coal_mw": 800,
      "total_mw": 800,
      "shortage_mw": 201,
      "overgen_mw": 0,
      "curtailment_mw": 0,
      "timestamp": "2026-04-24T23:00:00",
      "time": "23:00"
    }
  ],
  "table": [
    {
      "time": "05:00",
      "action": "RAMP_UP",
      "value_mw": 20,
      "reason": "Demand increasing"
    }
  ],
  "alerts": [
    {
      "time": "00:00",
      "action": "ALERT_SHORTAGE",
      "value_mw": 199,
      "reason": "Demand exceeds physical ramp/capacity limits. Load shedding required."
    }
  ],
  "status": [
    {
      "type": "SAFE_REDUCTION_WINDOW",
      "start": "07:45",
      "end": "15:45",
      "message": "Net load stable below 500 MW. Ideal for coal optimisation."
    }
  ],
  "confidence": {
    "optimization_score": 60
  },
  "comparison": {
    "baseline_coal_mwh": 26882.85,
    "optimized_coal_mwh": 18069.75
  },
  "energy_mix": {
    "solar_percent": 19.2,
    "coal_percent": 67.22,
    "other_percent": 0
  }
}

    // 🔥 Preprocess (important)
    const filtered = {
  peak: data.peak,
  summary: {
    total_curtailed_mwh: data.summary.total_curtailed_mwh,
    solar_utilization_percent: data.summary.solar_utilization_percent,
    coal_reduction_percent: data.summary.coal_reduction_percent,
    co2_avoided_tons: data.summary.co2_avoided_tons
  },
  alerts: data.alerts,
  curtailment: data.data
    .filter(d => d.curtailment_mw > 20)
    .map(d => ({ time: d.time, curtailment_mw: d.curtailment_mw, coal_mw: d.coal_mw }))
};

    const prompt = `
You are an expert power grid analyst.

Analyze this data and return ONLY JSON:

{
  "insight": "",
  "problem": "",
  "recommendation": ""
}

Focus on:
- solar curtailment
- coal inefficiency
- peak solar

DATA:
${JSON.stringify(filtered)}
`;

    console.log(prompt);
    const result = await model.generateContent(prompt);
    console.log(result);
    
    const text = result.response.text();

console.log(text);
    // 🧠 Parse JSON safely
    const cleaned = text.replace(/```json|```/g, "").trim();
    console.log(cleaned);
    const parsed = JSON.parse(cleaned);

    res.json(result);
    console.log(result);
    

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate insights" });
  }
});

// // Temporary fallback while quota issues persist
// app.post("/generate-insights", async (req, res) => {
//   res.json({
//     insight: "Peak solar generation of 696 MW occurred at 12:00, with 90.1% utilization. However, 566 MWh was curtailed during midday hours due to coal fleet inflexibility.",
//     problem: "Coal generation remained unnecessarily high between 10:00–15:00, forcing 544 MWh of solar curtailment during the peak solar window when coal could have been ramped down.",
//     recommendation: "Begin ramping down coal by 08:00 to reach minimum stable load before peak solar at 12:00. Target coal dispatch below 550 MW during 10:00–15:00 to absorb full solar output and eliminate curtailment losses."
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});