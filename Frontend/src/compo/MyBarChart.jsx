import React, { useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, Legend, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CHART_COLORS, CHART_GRID_CONFIG, CHART_AXIS_CONFIG } from '@/utils/chartConfig'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/redux/data/dataSlice'



const MyBarChart = () => {

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
}

    if (loading) return <div className="text-white">Loading...</div>
  return (
    <div className='card p-8 border rounded-xl  from-[#0f0f12] to-[#1a1a1e] border-[#2a2a2e] hover:border-[#00f5ff]/50 '>
        <h1 className='text-xl font-semibold mb-6 text-white'>Solar Generation vs Grid Demand</h1>
        <ChartContainer config={chartConfig} className="h-80 w-full text-[#636368]">
        <BarChart data={data} margin={{
            top: 24,
              left: 20,
              right: 20,
            }}>

            <CartesianGrid {...CHART_GRID_CONFIG} />
            <XAxis dataKey="time" {...CHART_AXIS_CONFIG} />
            <YAxis {...CHART_AXIS_CONFIG} />
            <ChartTooltip content={<ChartTooltipContent className="w-37.5" />} />
            <Bar dataKey="solar" fill={CHART_COLORS.solar} radius={0} name='Solar' >
                <LabelList
                                position="top"
                                offset={12}
                                style={{fill: CHART_COLORS.solar}}
                                fontSize={8}
                                name='Solar'
                              />
            </Bar>
            <Bar dataKey="demand" fill={CHART_COLORS.demand} radius={0} name='Demand' legendType='circle' >
                <LabelList
                                position="top"
                                offset={12}
                                style={{fill: CHART_COLORS.demand}}
                                fontSize={8}
                                name='Demand'
                              />
            </Bar>
            <Legend
                formatter={(value, entry) => (
                    <span style={{ color: entry.color }}>{value}</span>
                )}
                content={({ payload }) => (
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px' }}>
                    {payload.map((entry) => (
                        <div key={entry.value} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                        {entry.value === 'Solar' ? (
                            <div style={{ width: 12, height: 12, backgroundColor: CHART_COLORS.solar, borderRadius: 3 }} />
                        ) : (
                            <div style={{ width: 12, height: 12, backgroundColor: CHART_COLORS.demand, borderRadius: 3 }} />
                        )}
                        <span style={{ color: entry.color, fontSize: 13, fontWeight: 500 }}>{entry.value}</span>
                        </div>
                    ))}
                    </div>
                )}
            />

        </BarChart>
        </ChartContainer>

    </div>
  )
}


export default MyBarChart;