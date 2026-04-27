import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data:  [],
        summary: {},
        meta: {},
        confidence: {},
        energy_mix: {},
        alerts: [],
        status: [],
        table:[],
        comparison:{},
        before:0,
        after:0,
        loading: false,
        error: null
    },

    reducers: {
        callApi: (state)=>{
            //state.data = fetch('https://localhost:8080/fetchData')
            console.log('data was fetched')
        },
        setLoading: (state)=>{
          state.loading = true;
        },
        setError: (state, action)=>{
          state.loading = false
          state.error = action.payload;
        },
        setData:(state,action)=> {
          state.loading = false;
          state.data = action.payload.data.map(item=>({
            time: item.time,
            solar: item.solar_mw,
            demand: item.demand_mw,
            coal: item.coal_mw,
            curtailment: item.curtailment_mw,
            shortage: item.shortage_mw,
            
          }));
            state.summary = action.payload.summary;
            state.meta = action.payload.meta;
            state.confidence = action.payload.confidence;
            state.energy_mix = action.payload.energy_mix;
            state.alerts = action.payload.alerts;
            state.status = action.payload.status;
            state.table = action.payload.table;
            state.comparison = action.payload.comparison;
            state.before = action.payload.comparison.baseline_coal_mwh;
            state.after = action.payload.comparison.optimized_coal_mwh
        },
        
    }

})


export const {callApi, setData, setError, setLoading} = dataSlice.actions

export const fetchData = () => async (dispatch) => {
    dispatch(setLoading());
    const date = new Date().toISOString().split('T')[0];
    try {
        const response = await fetch('https://solar-curtailment-optimizer-backend.onrender.com/optimize/schedule',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prediction_date: date,
        }),
    });
        const json = await response.json();

        console.log(json);
        
        dispatch(setData(json));
    } catch (err) {
        dispatch(setError(err.message));
    }
};


export default dataSlice.reducer

/** {
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
}*/