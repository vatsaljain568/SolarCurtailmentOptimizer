import React from 'react'
import { AlertTriangle, TrendingDown, Leaf, Zap, BarChart3, Target } from 'lucide-react'

const About = () => {
  const problemPoints = [
    {
      icon: AlertTriangle,
      title: 'Wasted Solar Energy',
      description: 'In 2025, India alone curtailed 2.3 TWh of solar power—equivalent to 400,000 households\' annual consumption'
    },
    {
      icon: TrendingDown,
      title: 'Revenue Loss',
      description: 'Solar producers face direct financial losses due to forced power generation restrictions'
    },
    {
      icon: Leaf,
      title: 'Increased Coal Dependency',
      description: 'Inflexible coal plants must continue operating, preventing clean energy from meeting demand'
    }
  ]

  const curtailmentTypes = [
    {
      title: 'Economic Curtailment',
      description: 'Triggered when electricity prices go negative due to oversupply, forcing producers to stop supplying the grid'
    },
    {
      title: 'System/Grid Congestion',
      description: 'Occurs when too much power floods local infrastructure, overloading transmission lines and causing potential damage'
    },
    {
      title: 'Regulation/Policy Curtailment',
      description: 'Pre-set network limits prevent energy export regardless of actual grid capacity availability'
    }
  ]

  const stats = [
    {
      number: '2.3 TWh',
      label: 'Solar Power Curtailed in India (2025)',
      color: 'from-[#00f5ff]'
    },
    {
      number: '400K+',
      label: 'Households Equivalent Energy Wasted',
      color: 'from-[#bf00ff]'
    },
    {
      number: '↓ Coal',
      label: 'Dependency Remains High',
      color: 'from-[#39ff14]'
    }
  ]

  const solutions = [
    {
      icon: Zap,
      title: 'Intelligent Prediction',
      description: 'XGBoost ML models predict solar output and demand patterns, enabling proactive curtailment decisions'
    },
    {
      icon: Target,
      title: 'Optimized Dispatching',
      description: 'Dynamic algorithms reduce unnecessary curtailment while maintaining grid stability and safety'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Vertex AI powered insights guide grid operators to maximize renewable energy integration'
    }
  ]

  return (
    <div className='w-full min-h-screen bg-[#09090b]'>
      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center space-y-6'>
          <h1 className='text-5xl md:text-6xl font-bold'>
            <span className='bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent'>
              About
            </span>
            <br />
            <span className='text-white'>Solar Curtailment Optimizer</span>
          </h1>
          <p className='text-xl text-[#999] max-w-3xl mx-auto'>
            The Solar Curtailment Optimizer is an intelligent grid management system designed to optimize solar energy generation while maintaining grid stability and reducing environmental impact.
          </p>
        </div>

        {/* Overview Section */}
        <div className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-white mb-6'>The Problem</h2>
            <p className='text-[#999] text-lg mb-4'>
              <span className='text-[#00f5ff] font-semibold'>Solar Curtailment</span> is the intentional restriction of solar power generation by grid operators when production exceeds demand or transmission capacity. It acts as a necessary, last-resort measure to prevent grid instability, congestion, and damage.
            </p>
            <p className='text-[#999] text-lg mb-4'>
              While curtailment ensures grid safety, it leads to massive problems: <span className='text-[#bf00ff] font-semibold'>wasted renewable energy, revenue losses for solar producers, and continued reliance on inflexible coal plants</span> that cannot ramp down quickly enough.
            </p>
            <p className='text-[#999] text-lg'>
              The mismatch between rapid solar expansion and infrastructure readiness has created a growing energy crisis—clean power is generated and thrown away while fossil fuels continue burning.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {problemPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className='p-6 rounded-lg bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 hover:border-[#ff4d4d]/50 transition-all'>
                  <div className='flex gap-4'>
                    <Icon size={24} className='text-[#ff4d4d] flex-shrink-0 mt-1' />
                    <div>
                      <h3 className='font-semibold text-white mb-2'>{point.title}</h3>
                      <p className='text-[#999] text-sm'>{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Types of Curtailment Section */}
        <div className='mt-24'>
          <h2 className='text-3xl font-bold text-center text-white mb-12'>Types of Curtailment</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {curtailmentTypes.map((type, index) => (
              <div
                key={index}
                className='p-8 rounded-xl bg-[#0f0f12] border border-[#2a2a2e] hover:border-[#ff4d4d]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#ff4d4d]/10'
              >
                <div className='w-12 h-12 rounded-full bg-[#ff4d4d]/20 flex items-center justify-center mb-4'>
                  <AlertTriangle size={24} className='text-[#ff4d4d]' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-3'>{type.title}</h3>
                <p className='text-[#999]'>{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-gradient-to-br ${stat.color}/10 to-transparent border ${stat.color}/20`}
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} to-transparent bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className='text-[#999]'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className='mt-24'>
          <h2 className='text-3xl font-bold text-center text-white mb-6'>Our Solution</h2>
          <p className='text-xl text-[#999] max-w-3xl mx-auto text-center mb-12'>
            The Solar Curtailment Optimizer intelligently reduces unnecessary curtailment while maintaining grid stability. Using advanced ML models, we predict solar output and demand patterns to help grid operators make optimal decisions in real-time.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className='p-8 rounded-xl bg-gradient-to-br from-[#00f5ff]/10 to-[#bf00ff]/10 border border-[#00f5ff]/30 hover:border-[#00f5ff]/50 transition-all duration-200'
                >
                  <div className='bg-[#00f5ff]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                    <Icon size={24} className='text-[#00f5ff]' />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-3'>{solution.title}</h3>
                  <p className='text-[#999]'>{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className='mt-24 text-center space-y-6 pb-20 p-8 rounded-xl bg-gradient-to-br from-[#00f5ff]/5 to-[#bf00ff]/5 border border-[#00f5ff]/20'>
          <h2 className='text-3xl font-bold text-white'>Impact & Vision</h2>
          <p className='text-xl text-[#999] max-w-3xl mx-auto'>
            By optimizing curtailment decisions, we prevent waste of valuable renewable energy while reducing coal dependency. This means:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <div className='p-6 bg-[#0f0f12] rounded-lg border border-[#2a2a2e]'>
              <div className='text-3xl font-bold text-[#00f5ff] mb-2'>↑ More Clean Energy</div>
              <p className='text-[#999]'>Less curtailment = more renewable energy reaching the grid</p>
            </div>
            <div className='p-6 bg-[#0f0f12] rounded-lg border border-[#2a2a2e]'>
              <div className='text-3xl font-bold text-[#bf00ff] mb-2'>↓ Less Coal</div>
              <p className='text-[#999]'>Reduced reliance on inflexible fossil fuel backup power</p>
            </div>
            <div className='p-6 bg-[#0f0f12] rounded-lg border border-[#2a2a2e]'>
              <div className='text-3xl font-bold text-[#39ff14] mb-2'>🌍 Cleaner Grid</div>
              <p className='text-[#999]'>Lower emissions and a sustainable path to net-zero energy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
