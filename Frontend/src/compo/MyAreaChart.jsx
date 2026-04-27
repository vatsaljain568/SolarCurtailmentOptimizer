import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Legend, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useDispatch, useSelector } from 'react-redux'
import { callApi, fetchData } from '@/redux/data/dataSlice'
import { CHART_COLORS, CHART_AXIS_CONFIG } from '@/utils/chartConfig'

const MyAreaChart = () => {

  const dispatch = useDispatch()
  const data = useSelector((state)=> state.dataReducer.data)
  const [chartData, setChartData] = useState([]);

  useEffect(()=>{
    dispatch(fetchData());
  },[])

  useEffect(()=>{
    if(!data || data.length===0){
      return;
    }

    const newAreaData = data.map((item)=>{
      console.log(item)
      const difference = parseFloat(item.demand) - parseFloat(item.solar);
      const coal = item.coal;

      return{
        time: item.time,
        diff: difference,
        coal: coal
      }
    });

    console.log(newAreaData);
    setChartData(newAreaData);
  },[data])
   


    const chartConfig = {
    solar: { label: "Solar", color: "#f59e0b" },
    demand: { label: "Demand", color: CHART_COLORS.demand }
    } 
  return (
    <div className='h-full card p-6 border rounded-xl bg-gradient-to-br  from-[#0f0f12] to-[#1a1a1e] border-[#2a2a2e] hover:border-[#00f5ff]/50 '>
        <h1 className='text-lg font-semibold mb-6 text-white'>Generation Overlap</h1>
      <ChartContainer config={chartConfig} className='h-72 w-full'>
        <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 20
            }}

          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#2a2a2e" />
            <XAxis dataKey='time' {...CHART_AXIS_CONFIG}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area dataKey='diff' type='natural' fill= "#facc15" fillOpacity={0.3} stroke="#facc15" strokeWidth={2} stackId='a' />
            <Area dataKey='coal' type='natural' fill="#f97316" fillOpacity={0.3} stroke="#f97316" strokeWidth={2} stackId='a' />
            <Legend />
          </AreaChart>
      </ChartContainer>
    </div>
  )
}

export default MyAreaChart
