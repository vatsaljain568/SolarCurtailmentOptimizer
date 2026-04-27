import React, { useEffect, useState } from 'react'
import Headers from '../compo/Headers'
import Chart from '../compo/Chart'
import { Link } from 'react-router-dom';
import MyBarChart  from '../compo/MyBarChart';
import MyRadialChart from '../compo/MyRadialChart';
import MyRadarChart from '@/compo/MyRadarChart';
import MyAreaChart from '@/compo/MyAreaChart';
import Confidence from '@/compo/Confidence';
import MyTable from '@/compo/MyTable';
import BeforeAfter from '@/compo/BeforeAfter';


const Dashboard = () => {

    const [backdata, setbackdata] = useState(null);
    const [error, seterror] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:8080/')
        .then(res=> res.text())
        .then(data=>setbackdata(data))
        .catch(err => seterror(err.message))
    },[])

  return (
    <div className='w-full min-h-screen bg-[#09090b]'>
      {/* Main Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Page Title */}
        <div className='mb-12'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent mb-2'>
            Grid Control Center
          </h1>
          <p className='text-[#999]'>Real-time solar curtailment optimization & grid monitoring</p>
        </div>

        {/* Key Metrics Header */}
        <Headers />

        {/* Primary Analytics Section */}
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center'>
          <div className='lg:col-span-2'>
            <Chart/>
          </div>
          <div>
            <Confidence />
          </div>
        </div>

        {/* Secondary Charts Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-semibold text-white mb-6 flex items-center gap-2'>
            <div className='w-1 h-6 bg-gradient-to-b from-[#00f5ff] to-[#bf00ff]'></div>
            Analysis Metrics
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <MyRadialChart />
            <MyRadarChart />
            <MyAreaChart />
          </div>
        </div>

        {/* Main Chart Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-semibold text-white mb-6 flex items-center gap-2'>
            <div className='w-1 h-6 bg-gradient-to-b from-[#00f5ff] to-[#bf00ff]'></div>
            Demand vs Supply
          </h2>
          <MyBarChart />
        </div>

        {/* Data Table & Before/After Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-semibold text-white mb-6 flex items-center gap-2'>
            <div className='w-1 h-6 bg-gradient-to-b from-[#00f5ff] to-[#bf00ff]'></div>
            System Operations
          </h2>
          <div className='flex gap-10 items-top'>
          
            <MyTable />
         
         
            <BeforeAfter />
          
        </div>
        </div>
        {/* Footer Spacing */}
        <div className='mt-16 pb-8'></div>
      </div>
    </div>
  )
}

export default Dashboard

