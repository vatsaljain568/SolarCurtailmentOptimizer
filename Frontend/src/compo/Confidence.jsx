import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';


import React, { useEffect } from 'react'
import { Label, LabelList, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { CHART_COLORS } from '@/utils/chartConfig';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '@/redux/data/dataSlice';



const Confidence = () => {

  const dispatch = useDispatch()
  const confidence = [useSelector((state)=> state.dataReducer.confidence)||0]
  const loading = useSelector((state) => state.dataReducer.loading);

  useEffect(()=>{
    console.log("hi");
    console.log(confidence);
    
    dispatch(fetchData());
  },[])

    const chartConfig = {
        desktop: {
            label:"Confidence" ,
            color: CHART_COLORS.confidence
        }
    }
    const total = 76;

  return (
    <div className='h-full flex flex-col card p-6 border rounded-xl bg-gradient-to-br from-[#0f0f12] to-[#1a1a1e] border-[#2a2a2e] hover:border-[#00f5ff]/50 '>
        <div className='flex gap-3 justify-between items-center px-4 py-3'>
  <h1 className='text-xl font-semibold text-white'>Confidence Score</h1>

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
        <div className='flex-1 flex items-center justify-center'>

        <ChartContainer config={chartConfig} className='mx-auto w-full mt-12' style={{ height: '260px', minHeight: '260px' }}>
           
            <RadialBarChart data={confidence} innerRadius={80} outerRadius={130} startAngle={0} endAngle={(confidence[0].optimization_score/100) * 180}>
            
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent className='text-white' />}
                />
                <RadialBar dataKey='optimization_score' fill="#22c55e" stackId="a" cornerRadius={3} className="stroke-transparent stroke-2" >

                </RadialBar>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <PolarRadiusAxis tick={false} axisLine={false}></PolarRadiusAxis>
                <PolarRadiusAxis tick={false}  axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 20}
                          fill='#fff'
                          fontSize={40}
                          fontWeight='bold'
                        >
                          {confidence[0].optimization_score}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 8}
                          fill='#fff'
                          fontSize={12}
                        >
                          Confidence
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>

            </RadialBarChart>
        </ChartContainer>
        </div>
    </div>
  )
}

export default Confidence
