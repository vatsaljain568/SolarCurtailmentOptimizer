import React, { useEffect, useState } from 'react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { LabelList, Legend, RadialBar, RadialBarChart } from "recharts"
import { CHART_COLORS } from '@/utils/chartConfig'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/redux/data/dataSlice'

const MyRadialChart = () => {

    const [radialData, setRadialData] = useState([])

    const Radialdata = [
        { electricity: 'solar' , production: 190, fill: CHART_COLORS.solar },
        { electricity: 'demand', production: 229, fill: CHART_COLORS.demand },
        { electricity:'coal' , production: 300, fill: CHART_COLORS.coal },

    ]
    const chartConfig = {
        production: {
            label: "Production"
        },
        solar: {
            label: "solar",
            color: CHART_COLORS.solar,
        },
        demand: {
            label: "demand",
            color: CHART_COLORS.demand
        },
        coal: {
            label: "coal",
            color: CHART_COLORS.coal
        }

    }

    const dispatch = useDispatch();
    const data = useSelector((state)=>(state.dataReducer.data))
    const loading = useSelector((state)=>(state.dataReducer.loading))


    useEffect(()=>{
        dispatch(fetchData())
    },[])

    useEffect(()=>{
        console.log("hello");
        let curtailment=0
        let coalProduced = 0
        let demand=0
        let solarProduced= 0
         data.map((item)=>{
            demand += item.demand
            curtailment += item.curtailment
            coalProduced += item.coal
            solarProduced += item.solar
        })

        const newData = [
            {electricity: "curtailment", production: curtailment, fill: "#ef4444"},
            {electricity:"solar", production: solarProduced, fill: CHART_COLORS.solar},
            {electricity:"coal", production: coalProduced, fill: CHART_COLORS.coal }
        ]

        setRadialData(newData);
    },[data])


  return (
    <div className='card h-full p-6 border rounded-xl bg-gradient-to-br from-[#0f0f12] to-[#1a1a1e] border-[#2a2a2e] hover:border-[#00f5ff]/50 '>
            <div className='flex gap-3 justify-between items-center px-4 py-3'>
  <h1 className='text-xl font-semibold text-white'>Production Metrics</h1>

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
            <ChartContainer config={chartConfig} className="mx-auto h-72 w-full">

                <RadialBarChart
                    data={radialData}
                    innerRadius={30}
                    outerRadius={100}
                    startAngle={0}
                    endAngle={310}
                >

                <ChartTooltip cursor={false} content={<ChartTooltipContent className='text-white' />} />

                <RadialBar dataKey="production" radius={4} >
                    <LabelList
                        position="insideStart"
                        dataKey="electricity"
                        style={{ fill: '#999', fontSize: 0, fontWeight: 600 }}
                    />
                </RadialBar>
                <Legend
                            content={({payload})=>(
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
                                   {payload.map((entry)=>(
                                    <div key={entry.payload.electricity} style={{display: "flex", gap:'6px', justifyContent:'center', alignItems:'center'}}>
                                        {entry.payload.electricity ==="solar" ?(
                                           <div style={{ width: 10, height: 10, backgroundColor: CHART_COLORS.solar, borderRadius: 2 }} />
                                        ):entry.payload.electricity==='curtailment' ?(
                                            <div style={{ width: 10, height: 10, backgroundColor: "#ef4444", borderRadius: 2 }}/>
                                        ):(
                                            <div style={{ width: 10, height: 10, backgroundColor: CHART_COLORS.coal, borderRadius: 2 }} />
                                        )}
                                        <span style={{ color: entry.color, fontSize: 12, fontWeight: 500 }}>{entry.payload.electricity}</span>
                                    </div>
                                   ))}
                                </div>
                            )}
                        />
                </RadialBarChart>
            </ChartContainer>
        </div>
  )
}

export default MyRadialChart
