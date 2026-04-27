// Consistent color palette for all charts
export const CHART_COLORS = {
  solar: '#00f5ff',      // Cyan - Solar Generation
  demand: '#bf00ff',     // Magenta - Electricity Demand
  coal: '#39ff14',       // Lime Green - Coal Usage
  confidence: '#f59e0b', // Amber - Confidence Score
  diff: '#ef4444',   // red
};

// Chart styling constants
export const CHART_GRID_CONFIG = {
  vertical: false,
  strokeDasharray: '3 3',
  stroke: '#2a2a2e',
};

export const CHART_AXIS_CONFIG = {
  stroke: '#636368',
  tickLine: false,
};

// Shared chart container class
export const CHART_CARD_CLASS = 'card mt-5 p-5 border rounded-md bg-[#0f0f12] border-[#2a2a2e]';
export const CHART_TITLE_CLASS = 'text-2xl tracking-tighter mb-3 text-[#636368]';

// Data metric colors for consistency
export const METRIC_COLORS = {
  solar: CHART_COLORS.solar,
  demand: CHART_COLORS.demand,
  coal: CHART_COLORS.coal,
  confidence: CHART_COLORS.confidence,
  diff: CHART_COLORS.diff,
};
