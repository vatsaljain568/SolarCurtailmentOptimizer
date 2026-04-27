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

            <div className='mb-6'>
                <span className='font-medium tracking-widest uppercase text-[#aaa] text-sm'>
                    Solar Optimizer Impact
                </span>
                <p className='text-[#555] text-xs mt-1 tracking-wide'>With vs Without Optimizer</p>
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