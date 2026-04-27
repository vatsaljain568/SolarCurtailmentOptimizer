import { fetchData } from '@/redux/data/dataSlice';
import { Plug } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CoalSaved = () => {


  const dispatch = useDispatch();
  const coalSaved = useSelector((state)=>(state.dataReducer.summary.coal_saved_mwh))
  const coalSavedPercent = useSelector((state)=>(state.dataReducer.summary.coal_reduction_percent))

  useEffect(()=>{
    dispatch(fetchData());
  },[])

  return (
    <div className=' card flex flex-col items-start gap-2 p-5 border border-t-3 border-t-[#00f5ff] bg-gradient-to-br from-[#1a3a4d] to-[#0d2233]   border-[#2a2a2e] w-1/4 rounded-md hover:outline hover:outline-2 hover:outline-[#00f5ff] transition-all duration-200'>
        <div className='flex flex-row items-center justify-center gap-2'>
            <Plug size={38} strokeWidth={2.25} className='text-[#00f5ff]' />
            <h1 className='text-[#f4f4fb] text-xl'>COAL SAVED</h1>
        </div>
        <div>
            <span className='text-[#00f5ff] text-3xl'>{coalSaved} </span><span className='text-[#636368] text-xl'>MW</span>
        </div>
        <div>
                <h1 className='text-md text-[#e2e2e4] bg-[#3d8eb0] px-2 py-1 rounded-xl'>{coalSavedPercent}% reduction</h1>
        </div>
        
    </div>
  )
}

export default CoalSaved
