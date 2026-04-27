import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart3, Leaf, Activity, Monitor, ArrowRight, Zap } from 'lucide-react'
import HomeHero from '../assets/HomeHero.jpeg'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-[#0B1120] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">

        {/* HERO SECTION */}
        {/* Increased bottom margin to mb-32 for more breathing room */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Solar Curtailment <br />
              <span className="text-[#34D399]">Optimizer</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Intelligent grid management system that optimizes solar energy generation while reducing coal consumption and environmental impact.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 px-6 py-3 bg-[#064E3B]/40 border border-[#10B981]/50 text-[#34D399] font-medium rounded-lg hover:bg-[#064E3B]/60 transition-all duration-200"
              >
                <BarChart3 size={20} />
                View Dashboard
              </button>
              
              {/* Restored and Wired 'Learn More' Button */}
              <button 
                onClick={() => navigate('/about')}
                className="flex items-center gap-2 text-[#34D399] font-medium hover:text-[#10B981] transition-colors duration-200"
              >
                Learn More <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Image/Graphic - Cleaned up nesting */}
          <div className="relative w-full flex items-center justify-center lg:justify-end lg:pl-8 mt-10 lg:mt-0">
             {/* Glow Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#10B981]/10 blur-[120px] rounded-full pointer-events-none"></div>
             
             {/* Image Container */}
             <div className="relative z-10 w-full max-w-[600px] rounded-2xl overflow-hidden border border-[#10B981]/20 shadow-2xl shadow-[#064E3B]/30 transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={HomeHero} 
                  alt="Solar Grid Optimization" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"
                  style={{ animationDuration: '4s' }}
                />
             </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        {/* Increased bottom margin to mb-16 for better visual separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111827] border border-gray-800/80 rounded-2xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex gap-5">
              <div className="bg-[#064E3B]/20 border border-[#10B981]/20 p-3 rounded-xl h-fit">
                <Activity size={24} className="text-[#34D399]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Real-time Monitoring</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track solar generation and grid demand in real time with live data visualization.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-800/80 rounded-2xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex gap-5">
              <div className="bg-[#064E3B]/20 border border-[#10B981]/20 p-3 rounded-xl h-fit">
                <BarChart3 size={24} className="text-[#34D399]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Advanced Analytics</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Visualize trends with multiple chart types and detailed performance metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-800/80 rounded-2xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex gap-5">
              <div className="bg-[#064E3B]/20 border border-[#10B981]/20 p-3 rounded-xl h-fit">
                <Leaf size={24} className="text-[#34D399]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Eco-Friendly</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Reduce coal consumption and carbon emissions with intelligent curtailment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-[#111827] to-[#064E3B]/20 border border-[#10B981]/20 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#10B981]/40 transition-colors">
            <div className="absolute inset-0 bg-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-5 left-5 text-[#34D399]/40"><Activity size={20} /></div>
            <h4 className="text-4xl font-bold text-[#34D399] mb-3 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">76%</h4>
            <p className="text-sm text-gray-400 font-medium">Average Confidence Score</p>
          </div>

          <div className="bg-gradient-to-b from-[#111827] to-[#064E3B]/20 border border-[#10B981]/20 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#10B981]/40 transition-colors">
            <div className="absolute inset-0 bg-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-5 left-5 text-[#34D399]/40"><Monitor size={20} /></div>
            <h4 className="text-4xl font-bold text-[#34D399] mb-3 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">24/7</h4>
            <p className="text-sm text-gray-400 font-medium">Real-time Monitoring</p>
          </div>

          <div className="bg-gradient-to-b from-[#111827] to-[#064E3B]/20 border border-[#10B981]/20 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#10B981]/40 transition-colors">
            <div className="absolute inset-0 bg-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-5 left-5 text-[#34D399]/40"><Leaf size={20} /></div>
            <h4 className="text-4xl font-bold text-[#34D399] mb-3 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">100+</h4>
            <p className="text-sm text-gray-400 font-medium">Data Points Daily</p>
          </div>
        </div>

        {/* MINIMAL FOOTER SECTION */}
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

export default HomePage