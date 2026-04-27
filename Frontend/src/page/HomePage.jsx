import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, BarChart3, Leaf, ArrowRight } from 'lucide-react'

const HomePage = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Track solar generation and grid demand in real-time with live updates'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Visualize trends with multiple chart types and detailed performance metrics'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce coal consumption and carbon emissions with intelligent curtailment'
    }
  ]

  return (
    <div className='w-full min-h-screen bg-[#09090b]'>
      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center space-y-8'>
          {/* Logo */}
          <div className='flex justify-center'>
            <div className='bg-gradient-to-br from-[#00f5ff] to-[#bf00ff] p-4 rounded-2xl'>
              <Zap size={48} className='text-black' strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <div className='space-y-4'>
            <h1 className='text-5xl md:text-6xl font-bold'>
              <span className='bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent'>
                Solar Curtailment
              </span>
              <br />
              <span className='text-white'>Optimizer</span>
            </h1>
            <p className='text-xl text-[#999] max-w-2xl mx-auto'>
              Intelligent grid management system that optimizes solar energy generation while reducing coal consumption and environmental impact.
            </p>
          </div>

          {/* CTA Buttons */}
          
            <button
              onClick={() => navigate('/dashboard')}
              className='px-8 py-3 border border-[#2a2a2e] text-white font-semibold rounded-lg hover:bg-[#1a1a1e] transition-all duration-200'
            >
              View Dashboard
            </button>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className='p-8 rounded-xl bg-[#0f0f12] border border-[#2a2a2e] hover:border-[#00f5ff]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#00f5ff]/10'
              >
                <div className='bg-[#00f5ff]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Icon size={24} className='text-[#00f5ff]' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
                <p className='text-[#999]'>{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pb-20'>
          <div className='text-center p-8 rounded-xl bg-gradient-to-br from-[#00f5ff]/10 to-transparent border border-[#00f5ff]/20'>
            <div className='text-4xl font-bold text-[#00f5ff] mb-2'>76%</div>
            <div className='text-[#999]'>Average Confidence Score</div>
          </div>
          <div className='text-center p-8 rounded-xl bg-gradient-to-br from-[#bf00ff]/10 to-transparent border border-[#bf00ff]/20'>
            <div className='text-4xl font-bold text-[#bf00ff] mb-2'>24/7</div>
            <div className='text-[#999]'>Real-time Monitoring</div>
          </div>
          <div className='text-center p-8 rounded-xl bg-gradient-to-br from-[#39ff14]/10 to-transparent border border-[#39ff14]/20'>
            <div className='text-4xl font-bold text-[#39ff14] mb-2'>100+</div>
            <div className='text-[#999]'>Data Points Daily</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

