import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React, { useEffect, useState } from 'react'
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { CHART_COLORS } from '@/utils/chartConfig'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/redux/data/dataSlice'

const MyRadarChart = () => {

    const dispatch = useDispatch()
    const data = useSelector((state)=> state.dataReducer.data)
    const loading = useSelector((state) => state.dataReducer.loading);

    useEffect(()=>{
        console.log(data);
        dispatch(fetchData());
    },[])

    
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (!data || data.length === 0) return;
    
        const slots = [
            { label: '9 AM-1 PM',  start: 9,  end: 13 },
            { label: '1 PM-5 PM',  start: 13, end: 17 },
            { label: '5 PM-9 PM',  start: 17, end: 21 },
            { label: '9 PM-1 AM',  start: 21, end: 25 }, // 25 = next day 1 AM (hour % 24)
            { label: '1 AM-5 AM',  start: 1,  end: 5  },
            { label: '5 AM-9 AM',  start: 5,  end: 9  },
        ];
    
        const newChartData = slots.map(({ label, start, end }) => {
            const filtered = data.filter(item => {
                const hour = parseInt(item.time.split(':')[0]); // parse "09:00" → 9
                if (start < end) return hour >= start && hour < end;
                else return hour >= start || hour < (end % 24);
            });
    
            const avg = (key) =>
                filtered.length
                    ? Math.round(filtered.reduce((sum, item) => sum + item[key], 0) / filtered.length)
                    : 0;
    
            return {
                time: label,
                solar: avg('solar'),
                demand: avg('demand'),
                coal: avg('coal'),
            };
        });

        setChartData(newChartData);
        console.log(newChartData);
    }, [data]);


    const chartConfig = {
        solar: {
            label:'Solar',
            color: CHART_COLORS.solar,
        },
        coal: {
            label: "Coal",
            color: CHART_COLORS.coal
        },
        demand: {
            label: "Demand",
            color: CHART_COLORS.demand
        }
    }
    if (loading) return <div className="text-white">Loading...</div>
  return (
    <div className='card h-full p-6 border rounded-2xl bg-[#111827] border-gray-800/80 hover:border-[#34D399]/50 '>
        <div className='flex gap-3 justify-between items-center px-4 py-3'>
  <h1 className='text-xl font-semibold text-white'>6 Hours Analysis</h1>

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
      <ChartContainer config={chartConfig} className='h-72 w-full'>
        <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
            <PolarAngleAxis dataKey='time' stroke="#9CA3AF" style={{ fontSize: 12 }} />
            <PolarGrid radialLines={true} stroke="#1F2937" />
            <Radar dataKey='solar' fillOpacity={0.1} fill={CHART_COLORS.solar} stroke={CHART_COLORS.solar} strokeWidth={2.5} />
            <Radar dataKey='demand' fillOpacity={0.1} fill={CHART_COLORS.demand} stroke={CHART_COLORS.demand} strokeWidth={2.5} />
            <Radar dataKey='coal' fillOpacity={0.1} fill={CHART_COLORS.coal} stroke={CHART_COLORS.coal} strokeWidth={2.5} />
        <Legend
            content={({payload})=>(
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
                   {payload.map((entry)=>(
                    <div key={entry.value} style={{display: "flex", gap:'6px', justifyContent:'center', alignItems:'center'}}>
                        {entry.value ==="solar" ?(
                           <div style={{ width: 10, height: 10, backgroundColor: CHART_COLORS.solar, borderRadius: 2 }} />
                        ):entry.value==='demand' ?(
                            <div style={{ width: 10, height: 10, backgroundColor: CHART_COLORS.demand, borderRadius: 2 }}/>
                        ):(
                            <div style={{ width: 10, height: 10, backgroundColor: CHART_COLORS.coal, borderRadius: 2 }} />
                        )}
                        <span style={{ color: entry.color, fontSize: 12, fontWeight: 500 }}>{entry.value}</span>
                    </div>
                   ))}
                </div>
            )}
        />
        </RadarChart>

      </ChartContainer>
    </div>
  )
}

export default MyRadarChart
