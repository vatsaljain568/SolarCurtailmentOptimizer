import React, { useEffect, useState } from 'react'
import { Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/redux/data/dataSlice'

const SolarOuput = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.dataReducer.data)
    const totalSolarOutput = useSelector((state)=>(state.dataReducer.summary.avg_solar_output_mw))
    const loading = useSelector((state) => state.dataReducer.loading);

    const [peakValue, setPeakValue] = useState(0);
    
    const [peakTime, setPeakTime] = useState("")

    useEffect(()=>{
        console.log(data);
        
        dispatch(fetchData());
    },[])

    useEffect(()=>{
        data.map((item)=>{
            if(peakValue<item.solar){
                setPeakValue(item.solar)
                setPeakTime(item.time)
            }
        })
    },[data])

  return (
    <div className='card rounded-md w-1/4 flex flex-col items-start gap-2 p-5 border  border-[#2a2a2e] border-t-3 border-t-[#39ff14] bg-gradient-to-br from-[#1a4426] to-[#0d2b1a] hover:outline hover:outline-2 hover:outline-[#39ff14] transition-all duration-200'>
        <div className='flex flex-row items-center justify-center gap-2'>
            <Sun size={38} strokeWidth={2.25} className='text-[#39ff14]'/>
            <h1 className='text-[#f9f9fb] text-xl'>SOLAR OUTPUT</h1>
        </div>
        <div>
            <span className='text-[#39ff14] text-3xl'>{totalSolarOutput} </span><span className='text-[#636368] text-xl'>MW</span>
        </div>
        <div>
            <h1 className='text-[#636368] text-sm'>Peak <span className='text-[#e2e2e4]'>{peakValue} MW</span> at {peakTime}</h1>
        </div>

    </div>
  )
}

export default SolarOuput
