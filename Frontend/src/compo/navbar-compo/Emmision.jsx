import { fetchData } from '@/redux/data/dataSlice';
import { Sprout } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Emmision = () => {

    const dispatch = useDispatch();

    const emissionAvoided = useSelector((state)=>(state.dataReducer.summary.co2_avoided_tons))
    const savings = useSelector((state)=>(state.dataReducer.summary.cost_savings_inr))
    useEffect(()=>{
        dispatch(fetchData());
    },[])
  return (

    <div className='card rounded-md flex flex-col items-start gap-2 p-5 border border-t-3 bg-gradient-to-br from-[#2d1b47] to-[#1a0f2e] border-t-[#bf00ff] border-[#2a2a2e] w-1/4 hover:outline hover:outline-2 hover:outline-[#bf00ff] transition-all duration-200'>
        <div className='flex flex-row items-center justify-center gap-3'>
            <Sprout strokeWidth={2.25} size={42} className='text-[#bf00ff]' />
            <h1 className='text-[#f4f4f8] text-xl'>CO2 EMISSION AVOIDED</h1>
        </div>
        <div>
            <span className='text-[#bf00ff] text-3xl'>{emissionAvoided} </span><span className='text-[#636368] text-xl'>tons</span>
        </div>
        <div className='text-[#636368] text-sm' >
            <h1>Valued at <span className='text-[#e2e2e4]'> {parseInt(savings/94.25)}$</span></h1>
        </div>

    </div>

  )
}

export default Emmision
