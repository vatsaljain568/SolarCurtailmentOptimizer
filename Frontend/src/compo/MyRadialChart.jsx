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
            <h1 className='text-lg font-semibold mb-6 text-white'>Production Metrics</h1>
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
