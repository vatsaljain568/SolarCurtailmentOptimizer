import React from 'react'
import { AlertTriangle, TrendingDown, ZapOff, DollarSign, Activity, Shield, Zap, Users, Leaf, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react'

const About = () => {
  const problemPoints = [
    {
      icon: AlertTriangle,
      title: 'Wasted Solar Energy',
      description: 'In 2025, India alone curtailed 2.3 TWh of solar power—equivalent to 400,000 households\' annual consumption.'
    },
    {
      icon: TrendingDown,
      title: 'Revenue Loss',
      description: 'Solar producers face direct financial losses due to forced power generation restrictions.'
    },
    {
      icon: ZapOff,
      title: 'Increased Coal Dependency',
      description: 'Inflexible coal plants must continue operating, preventing clean energy from meeting demand.'
    }
  ]

  const curtailmentTypes = [
    {
      icon: DollarSign,
      title: 'Economic Curtailment',
      description: 'Triggered when electricity prices go negative due to oversupply, forcing producers to stop supplying the grid.'
    },
    {
      icon: Activity,
      title: 'System/Grid Congestion',
      description: 'Occurs when too much power floods local infrastructure, overloading transmission lines and causing potential damage.'
    },
    {
      icon: Shield,
      title: 'Regulation/Policy Curtailment',
      description: 'Pre-set network limits prevent energy export regardless of actual grid capacity availability.'
    }
  ]

  const stats = [
    {
      icon: Zap,
      number: '2.3 TWh',
      label: 'Solar Power Curtailed in India (2025)',
      color: 'from-[#064E3B]/20 to-[#111827]',
      accent: 'text-[#34D399]',
      border: 'border-[#10B981]/20 hover:border-[#10B981]/40'
    },
    {
      icon: Users,
      number: '400K+',
      label: 'Households Equivalent Energy Wasted',
      color: 'from-purple-900/20 to-[#111827]',
      accent: 'text-purple-400',
      border: 'border-purple-500/20 hover:border-purple-500/40'
    },
    {
      icon: Leaf,
      number: '↓ Coal',
      label: 'Dependency Remains High',
      color: 'from-green-900/20 to-[#111827]',
      accent: 'text-green-400',
      border: 'border-green-500/20 hover:border-green-500/40'
    }
  ]

  const solutions = [
    {
      icon: Zap,
      title: 'Intelligent Prediction',
      description: 'ML models predict solar output and demand patterns, enabling proactive curtailment decisions.'
    },
    {
      icon: Activity,
      title: 'Optimized Dispatching',
      description: 'Dynamic algorithms reduce unnecessary curtailment while maintaining grid stability and safety.'
    },
    {
      icon: BarChart3Icon,
      title: 'Real-time Analytics',
      description: 'Live insights and performance metrics help operators maximize renewable integration and minimize losses.'
    }
  ]

  // Custom Icon for Analytics since lucide doesn't have the exact match from image
  function BarChart3Icon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    )
  }

  const impactPoints = [
    {
      icon: ArrowUpRight,
      title: 'More Clean Energy',
      description: 'Less curtailment = more renewable energy reaching the grid.',
      color: 'text-[#34D399]'
    },
    {
      icon: ArrowDownRight,
      title: 'Less Coal',
      description: 'Reduced reliance on inflexible fossil fuel backup power.',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Cleaner Grid',
      description: 'Lower emissions and a sustainable path to net-zero energy.',
      color: 'text-[#34D399]'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#0B1120] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">

        <div className="mb-24 flex flex-col items-center text-center">
          <p className="text-sm font-bold tracking-widest text-[#34D399] uppercase mb-4">About</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            Solar Curtailment <br />
            <span className="text-[#34D399]">Optimizer</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mx-auto">
            The Solar Curtailment Optimizer is an intelligent grid management system designed to optimize solar energy generation while maintaining grid <span className="underline decoration-gray-600 underline-offset-4">stability</span> and reducing environmental impact.
          </p>
        </div>

        {/* THE PROBLEM SECTION - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">

          {/* Left Side: Text Description */}
          <div className="space-y-6 lg:pr-8">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4 inline-block">The Problem</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-[#34D399] font-medium">Solar Curtailment</span> is the intentional restriction of solar power generation by grid operators when production exceeds demand or transmission capacity. It acts as a necessary, last-resort measure to prevent grid instability, congestion, and damage.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              While curtailment ensures grid safety, it leads to massive problems: <span className="text-[#34D399] font-medium">wasted renewable energy, revenue losses for solar producers, and continued reliance on inflexible coal plants</span> that cannot ramp down quickly enough.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              The mismatch between rapid solar expansion and infrastructure readiness has created a growing energy crisis—clean power is generated and thrown away while fossil fuels continue burning.
            </p>
          </div>

          {/* Right Side: Red Warning Cards */}
          <div className="grid grid-cols-1 gap-4 mt-16 lg:mt-0">
            {problemPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="bg-[#111827] border border-gray-800/80 rounded-2xl p-6 hover:border-red-900/50 transition-colors group">
                  <div className="flex gap-5">
                    <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl h-fit group-hover:bg-red-500/20 transition-colors">
                      <Icon size={24} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-100">{point.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* TYPES OF CURTAILMENT */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white inline-block border-b-2 border-gray-800 pb-2">Types of <span className="border-b-2 border-[#34D399] pb-2">Curtailm</span>ent</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curtailmentTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="bg-[#111827] border border-gray-800/80 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                  <div className="bg-[#064E3B]/20 border border-[#10B981]/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <Icon size={20} className="text-[#34D399]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`bg-gradient-to-b ${stat.color} border ${stat.border} rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-colors relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-5 transition-opacity ${stat.accent}`}></div>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={28} className={stat.accent} />
                  <h4 className={`text-4xl font-bold ${stat.accent} drop-shadow-[0_0_10px_rgba(currentColor,0.3)]`}>{stat.number}</h4>
                </div>
                <p className="text-sm text-gray-300 font-medium whitespace-pre-line">{stat.label.replace(' (', '\nin (')}</p>
              </div>
            )
          })}
        </div>

        {/* OUR SOLUTION */}
        <div className="mb-32">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white inline-block border-b-2 border-gray-800 pb-2">Our <span className="border-b-2 border-[#34D399] pb-2">Solut</span>ion</h2>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            The Solar Curtailment Optimizer intelligently reduces unnecessary curtailment while maintaining grid stability. Using advanced ML models, we predict solar output and demand patterns to help grid operators make optimal decisions in real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={index} className="bg-[#111827] border border-gray-800/80 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                  <div className="bg-[#064E3B]/20 border border-[#10B981]/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#34D399]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white inline-block border-b-2 border-gray-800 pb-2">Impact & <span className="border-b-2 border-[#34D399] pb-2">Visi</span>on</h2>
          </div>
          <p className="text-md text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            By optimizing curtailment decisions, we prevent waste of valuable renewable energy while reducing coal dependency. This means:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactPoints.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div key={index} className="bg-[#111827] border border-gray-800/80 rounded-2xl p-6 flex gap-5 hover:border-gray-700 transition-colors items-start">
                  <div className="mt-1">
                    <Icon size={24} className={impact.color} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{impact.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{impact.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <footer className="mt-32 pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-[#34D399]" fill="currentColor" />
            <span className="text-lg font-bold text-white tracking-wide">SolarGrid</span>
          </div>

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 Solar Curtailment Optimizer. Built for Google Solution Challenge.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <button onClick={() => navigate('/')} className="hover:text-[#34D399] transition-colors">Home</button>
            <button onClick={() => navigate('/about')} className="hover:text-[#34D399] transition-colors">About</button>
            <button onClick={() => navigate('/dashboard')} className="hover:text-[#34D399] transition-colors">Dashboard</button>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default About