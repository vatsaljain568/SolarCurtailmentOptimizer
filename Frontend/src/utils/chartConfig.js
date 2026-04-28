// Consistent color palette for all charts
export const CHART_COLORS = {
  solar: '#34D399',      // Emerald - Solar Generation
  demand: '#3B82F6',     // Blue - Electricity Demand
  coal: '#064E3B',       // Dark Emerald - Coal Usage
  confidence: '#34D399', // Emerald - Confidence Score
  diff: '#ef4444',   // red
};

// Chart styling constants
export const CHART_GRID_CONFIG = {
  vertical: false,
  strokeDasharray: '3 3',
  stroke: '#1F2937',
};

export const CHART_AXIS_CONFIG = {
  stroke: '#9CA3AF',
  tickLine: false,
};

// Shared chart container class
export const CHART_CARD_CLASS = 'card mt-5 p-5 border rounded-2xl bg-[#111827] border-gray-800/80 shadow-lg';
export const CHART_TITLE_CLASS = 'text-2xl tracking-tighter mb-3 text-gray-400';

// Data metric colors for consistency
export const METRIC_COLORS = {
  solar: CHART_COLORS.solar,
  demand: CHART_COLORS.demand,
  coal: CHART_COLORS.coal,
  confidence: CHART_COLORS.confidence,
  diff: CHART_COLORS.diff,
};
