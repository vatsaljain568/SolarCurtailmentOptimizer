import { fetchData } from '@/redux/data/dataSlice'
import { SquareCheck, SquareX } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Status = () => {
  
  //const [status, setStatus] = useState(" Safe to Reduce");
  const dispatch = useDispatch();
  const status = useSelector((state)=>(state.dataReducer.status))
  const loading = useSelector((state) => state.dataReducer.loading);
  useEffect(()=>{
    dispatch(fetchData());
  },[])


  if (loading || !status || status.length === 0) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    (status[0].type==="SAFE_REDUCTION_WINDOW")?(<div className='card rounded-md w-1/4 flex flex-col items-start gap-2 p-5 border bg-gradient-to-br from-[#1a4426] to-[#0e2a14]   border-[#2a2a2e] border-t-3 border-t-[#39ff14] hover:outline hover:outline-2 hover:outline-[#39ff14] transition-all duration-200'>
        <div className='flex flex-row items-center justify-center gap-2'>
            <SquareCheck strokeWidth={2.25} size={38} className='text-[#39ff14]' />
            <h1 className='text-[#f9f9fc] text-xl'>STATUS</h1>
        </div>
        <div>
          
            <h1 className='bg-[#2e861f] px-2 py-1 rounded-xl'>Safe to Reduce</h1>
        </div>
        <div>
            <h1 className='text-[#636368] text-sm'>Form <span className='text-[#e2e2e4]'>{status[0].start}</span> to <span className='text-[#e2e2e4]'>{status[0].end}</span></h1>
        </div>
    </div>):(<div className='card rounded-md w-1/4 flex flex-col items-start gap-2 p-5 border bg-gradient-to-br from-[#4d1a1a] to-[#2b0d0d]   border-[#2a2a2e] border-t-3 border-t-[#ff3333] hover:outline hover:outline-2 hover:outline-[#ff3333] transition-all duration-200'>
        <div className='flex flex-row items-center justify-center gap-2'>
            <SquareX strokeWidth={2.25} size={38} className='text-[#ff3333]' />
            <h1 className='text-[#636368] text-xl'>STATUS</h1>
        </div>
        <div>
          
            <h1 className='bg-[#ff3333] px-2 py-1 rounded-xl'>Unsafe to Reduce</h1>
        </div>
    </div>)
    
  )
}

export default Status
