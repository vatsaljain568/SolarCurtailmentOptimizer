import React, { useEffect } from 'react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../components/ui/chart'
import { CartesianGrid, LabelList, Legend, Line, LineChart, XAxis, YAxis } from 'recharts'
import { useDispatch, useSelector } from 'react-redux'
import { callApi } from '@/redux/data/dataSlice'
import { CHART_COLORS, CHART_GRID_CONFIG, CHART_AXIS_CONFIG } from '@/utils/chartConfig'
import { fetchData } from '@/redux/data/dataSlice'

const Chart = () => {

  const dispatch = useDispatch()
  const data = useSelector((state)=> state.dataReducer.data)
  const loading = useSelector((state) => state.dataReducer.loading);

  useEffect(()=>{
    console.log(data);
    
    dispatch(fetchData());
  },[])

const chartConfig = {
  solar: { label: "Solar", color: CHART_COLORS.solar },
  demand: { label: "Demand", color: CHART_COLORS.demand },
  coal: {label: "Coal", color: CHART_COLORS.coal}
}

  if (loading) return <div className="text-white">Loading...</div>
  return (
    <div className='w-full card p-8 border rounded-2xl bg-[#111827] border-gray-800/80 hover:border-[#34D399]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]'>
      <div className='flex gap-3 justify-between items-center px-4 py-3'>
  <h1 className='text-xl font-semibold text-white'>24-Hour Forecast</h1>

  <div className="relative inline-flex items-center group">
    {/* ⓘ button */}
    <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center
                    text-sm text-gray-400 cursor-pointer hover:bg-gray-800 hover:border-gray-300
                    transition-all duration-200 select-none">
      i
    </div>

    {/* Tooltip — flips left on small screens */}
    <div className="
      pointer-events-none opacity-0 group-hover:opacity-100
      transition-opacity duration-200
      absolute z-20 w-60 p-3
      bg-[#0f0f1a] border border-gray-700 rounded-lg
      text-xs text-gray-300 leading-relaxed
      top-1/2 -translate-y-1/2
      left-8 sm:left-8
      max-[300px]:left-auto max-[300px]:right-8
    ">
      {/* Arrow */}
      <span className="absolute -left-1.5 top-1/2 -translate-y-1/2
                       w-2.5 h-2.5 bg-[#0f0f1a] border-l border-b border-gray-700
                       rotate-45 max-[300px]:hidden" />

      <p className="font-semibold text-white mb-1">24-Hour Bar Chart</p>
      <p>
        Shows predicted grid behaviour for the next 24 hours. Each point on the line = one hourly reading. 
        Use this to plan dispatch and manage load in advance.
      </p>
    </div>
  </div>
</div>
        
      <ChartContainer config={chartConfig} className="h-72 w-full border-0 -ml-3 text-[#636368]">
      <LineChart accessibilityLayer data={data} margin={{
            top: 20,
              left: 12,
              right: 12,
            }} >
        <CartesianGrid {...CHART_GRID_CONFIG} />
        <XAxis dataKey="time" {...CHART_AXIS_CONFIG} />
        <YAxis {...CHART_AXIS_CONFIG} />
        <ChartTooltip content={<ChartTooltipContent className="w-[150px]" />}/>
        <Line type="monotone" dataKey="solar" stroke={CHART_COLORS.solar} dot={{
                fill: CHART_COLORS.solar,
                r: 3
              }}
              activeDot={{
                r: 6,
               }} cursor={true} name='Solar' strokeWidth={2}>
               <LabelList
                position="top"
                offset={12}
                style={{fill: CHART_COLORS.solar}}
                fontSize={0}
              />
              </Line>
        <Line type="monotone" dataKey="demand" stroke={CHART_COLORS.demand} dot={{
                fill: CHART_COLORS.demand,
                r: 3
              }}
              activeDot={{
                r: 6,
               }} cursor={true} name='Demand' strokeWidth={2}>
                <LabelList
                position="top"
                offset={12}
                style={{fill: CHART_COLORS.demand}}
                fontSize={0}
              />
               </Line>
          <Line type="monotone" dataKey="coal" stroke={CHART_COLORS.coal} dot={{
                fill: CHART_COLORS.coal,
                r: 3
              }}
              activeDot={{
                r: 6,
               }} cursor={true} name='Coal' strokeWidth={2}>
                <LabelList
                position="top"
                offset={12}
                style={{fill: CHART_COLORS.coal}}
                fontSize={0}
              />
               </Line>
               <Legend />
      </LineChart>

    </ChartContainer>
    </div>
  )
}

export default Chart
