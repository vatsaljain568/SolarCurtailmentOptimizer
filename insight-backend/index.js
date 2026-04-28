const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

// CORS Configuration - Allow multiple origins
const allowedOrigins = [
    'https://solarcurtailmentoptimizer.vercel.app',
    'https://www.solarcurtailmentoptimizer.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    process.env.FRONTEND_URL
].filter(Boolean);

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('CORS blocked:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
  maxAge: 3600
}));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Get optimizer backend URL based on environment
const OPTIMIZER_BACKEND_URL = process.env.OPTIMIZER_BACKEND_URL || 'https://solar-curtailment-optimizer-backend.onrender.com';

app.post("/generate-insights", async (req, res) => {
  try {
    // Get prediction date from request or use today
    const { prediction_date } = req.body;
    const date = prediction_date || new Date().toISOString().split('T')[0];

    console.log(`Fetching data from: ${OPTIMIZER_BACKEND_URL}/optimize/schedule`);

    // Fetch data from optimizer backend
    const optimizerResponse = await fetch(`${OPTIMIZER_BACKEND_URL}/optimize/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prediction_date: date }),
    });

    if (!optimizerResponse.ok) {
      throw new Error(`Failed to fetch from optimizer backend: ${optimizerResponse.statusText}`);
    }

    const optimizationData = await optimizerResponse.json();
    console.log('Successfully fetched optimization data');

    // Preprocess data for Gemini
    const filtered = {
      peak: optimizationData.peak,
      summary: {
        total_curtailed_mwh: optimizationData.summary.total_curtailed_mwh,
        solar_utilization_percent: optimizationData.summary.solar_utilization_percent,
        coal_reduction_percent: optimizationData.summary.coal_reduction_percent,
        co2_avoided_tons: optimizationData.summary.co2_avoided_tons,
        coal_saved_mwh: optimizationData.summary.coal_saved_mwh,
        avg_solar_output_mw: optimizationData.summary.avg_solar_output_mw
      },
      alerts: optimizationData.alerts,
      status: optimizationData.status,
      curtailment: optimizationData.data
        .filter(d => d.curtailment_mw > 20)
        .map(d => ({ time: d.time, curtailment_mw: d.curtailment_mw, coal_mw: d.coal_mw }))
    };

    const prompt = `You are an expert power grid analyst. Analyze this grid optimization data and return ONLY valid JSON (no markdown, no code blocks, just raw JSON):

{
  "insight": "",
  "problem": "",
  "recommendation": ""
}

Focus on:
- Solar curtailment patterns and reasons
- Coal generation efficiency and reduction opportunities
- Peak solar generation time and impact
- Grid stability during transitions

Be concise and actionable. Here's the data:
${JSON.stringify(filtered, null, 2)}`;

    console.log('Sending to Gemini API...');
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Parse JSON safely - remove markdown code blocks if present
    const cleaned = text.replace(/^```json\s*|\s*```$/g, '').trim();
    const parsed = JSON.parse(cleaned);

    // Validate response has required fields
    if (!parsed.insight || !parsed.problem || !parsed.recommendation) {
      throw new Error('Invalid response structure from Gemini');
    }

    console.log('Successfully generated insights');
    res.json(parsed);

  } catch (err) {
    console.error('Error generating insights:', err.message);

    // Fallback: Return error response
    res.status(500).json({
      error: "Failed to generate insights",
      message: err.message,
      insight: "Unable to generate AI insights at this time. Please try again later.",
      problem: "The system is temporarily unable to process optimization data.",
      recommendation: "Check back soon or contact support if the issue persists."
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "insight-backend" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✨ Insight Backend running on port ${PORT}`);
  console.log(`📍 CORS enabled for:`, allowedOrigins);
  console.log(`🔗 Optimizer Backend URL: ${OPTIMIZER_BACKEND_URL}`);
});