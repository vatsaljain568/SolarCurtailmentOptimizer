import { KeySquare } from 'lucide-react'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formSubmitted = async (e)=>{
    e.preventDefault();
    const response =  await fetch('https://solarcurtailmentoptimizer.onrender.com/auth/login' ,{
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if(response.ok){
      navigate('/Dashboard')
    }else{
      navigate('/login')
    }
  }
  return (
    <div className='bg-[#0e0e0e] w-full min-h-screen flex items-center justify-center gap-2 '>
      <form onSubmit={(e)=>{
        formSubmitted(e)
      }} className='bg-[#1a1a1a] p-8 rounded-lg flex flex-col w-100'>


        <div className='flex flex-col justify-center items-center  mb-4'>
          <KeySquare className='bg-[#00f5c4] rounded p-2 text-black mb-4' size={48} strokeWidth={2.25} />
          <h1 className='text-2xl'>Welcome Back</h1>
          <h1 className='text-sm text-[#666]'>Sign in your Dashboard</h1>
        </div>

        <div className='= flex flex-col mb-5'>
          <h1 className='text-[#666] mb-1 text-sm'>USERNAME</h1>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className='text-[#666] bg-[#333] rounded-md py-2 px-3 border-1 border-[#666]' placeholder='your@email.com '  />
        </div>

        <div className=' flex flex-col mb-4'>
          <h1 className='text-[#666] mb-1 text-sm '>PASSWORD</h1>
          <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className='text-[#666] bg-[#333] rounded-md py-2 px-3 border-1 border-[#666]'  />
        </div>

        <div className='flex flex-row gap-3 items-center justify-between mb-5'>
          <div className='flex flex-row gap-2 items-center'>
            <input type='checkbox' className='bg-[#333] '/> 
            <span className='text-sm text-[#666]'>REMEMBER ME</span>
          </div >
          <button className='text-purple-500 text-sm'>Forgot Password?</button>
        </div>

        <button className='w-full border border-[#333] rounded-lg px-3 py-2'>Sign In</button>

        


      </form>
    </div>
  )
}

export default Login
