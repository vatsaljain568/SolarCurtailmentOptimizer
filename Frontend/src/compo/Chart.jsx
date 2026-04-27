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
    <div className='w-full card p-8 border rounded-xl bg-gradient-to-br from-[#0f0f12] to-[#1a1a1e] border-[#2a2a2e] hover:border-[#00f5ff]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]'>
        <h1 className='text-xl font-semibold mb-6 text-white'>24-Hour Forecast</h1>
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
