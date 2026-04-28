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
    <div className='card p-8 border rounded-2xl bg-[#111827] border-gray-800/80 hover:border-[#34D399]/50 '>
        <div className='flex gap-3 justify-between items-center px-4 py-3'>
            <h1 className='text-xl font-semibold text-white'>Solar Generation vs Grid Demand</h1>

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
  right-8
                ">
                {/* Arrow */}
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2
                   w-2.5 h-2.5 bg-[#0f0f1a] border-r border-t border-gray-700
                   rotate-45" />

                <p className="font-semibold text-white mb-1">24-Hour Bar Chart</p>
                <p>
                    Shows predicted grid behaviour for the next 24 hours. Each point on the line = one hourly reading. 
                    Use this to plan dispatch and manage load in advance.
                </p>
                </div>
            </div>
    </div>
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
                                fontSize={0}
                                name='Solar'
                              />
            </Bar>
            <Bar dataKey="demand" fill={CHART_COLORS.demand} radius={0} name='Demand' legendType='circle' >
                <LabelList
                                position="top"
                                offset={12}
                                style={{fill: CHART_COLORS.demand}}
                                fontSize={0}
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