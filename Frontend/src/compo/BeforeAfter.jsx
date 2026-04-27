import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { fetchData } from '@/redux/data/dataSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts'


const BeforeAfter = () => {


    
    const dispatch = useDispatch();
    const comparison = useSelector((state)=>(state.dataReducer.comparison))
    const [chartData, setChartData] = useState([])

    useEffect(()=>{
        dispatch(fetchData());
    },[])

    useEffect(()=>{
        const newChartData = [
        { label: "Before", value: Math.round(comparison.baseline_coal_mwh) },
        { label: "After",  value: Math.round(comparison.optimized_coal_mwh) },
        ]

    setChartData(newChartData);
    
    },[comparison])





    const chartConfig = {
        value: { label: "kWh Curtailed" }
    }

    return (
        <div className='card  hover:border-[#00f5ff]/50 border rounded-xl bg-[#111] border-[#1e1e1e] p-6 flex flex-col h-full w-150  '>

            <div className='flex gap-3 justify-between items-center px-4 py-3'>
            
            <div className='mb-3'>

            <h1 className='text-xl font-semibold text-white '>Solar Optimizer Impact</h1>
            <h1 className='text-sm text-[#aaaa]'>With vs Without Solar optimizer</h1>
            </div>

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

            <ChartContainer config={chartConfig} className='flex-1 w-full'>
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                    <CartesianGrid vertical={false} stroke='#1e1e1e' />
                    <XAxis
                        dataKey='label'
                        tick={{ fill: '#666', fontSize: 13, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#444', fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <ChartTooltip cursor={{ fill: 'rgba(255,255,255,0.03)' }} content={<ChartTooltipContent />} />
                    <Bar dataKey='value' radius={[8, 8, 0, 0]}>
                        <Cell fill='#f97316' />
                        <Cell fill='#4ade80' />
                    </Bar>
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default BeforeAfter