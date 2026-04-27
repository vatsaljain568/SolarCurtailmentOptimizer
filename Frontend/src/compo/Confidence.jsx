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
    <div className='h-full card p-6 border rounded-xl bg-gradient-to-br from-[#0f0f12] to-[#1a1a1e] border-[#2a2a2e] hover:border-[#00f5ff]/50 '>
        <h1 className='text-xl font-semibold mb-6 text-white'>Prediction Confidence</h1>
        
        <ChartContainer config={chartConfig} className='mx-auto aspect-square w-full mt-10'>
           
            <RadialBarChart data={confidence} innerRadius={80} outerRadius={130} startAngle={0} endAngle={(confidence[0].optimization_score/100) * 180}>
            
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent className='text-white' />}
                />
                <RadialBar dataKey='optimization_score' fill="pink" stackId="a" cornerRadius={3} className="stroke-transparent stroke-2" >

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
                          fill='#00f5ff'
                          fontSize={40}
                          fontWeight='bold'
                        >
                          {confidence[0].optimization_score}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 8}
                          fill='#999'
                          fontSize={12}
                        >
                          Accuracy
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
  )
}

export default Confidence
