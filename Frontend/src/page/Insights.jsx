import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Lightbulb, Zap } from 'lucide-react'
import InsightsHero from '../assets/InsightsHero.jpeg'

const Insights = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full min-h-screen bg-[#0B1120] text-white font-sans overflow-hidden flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 flex-grow w-full">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                    <div className="space-y-6 z-10">
                        <p className="text-sm font-bold tracking-widest text-[#34D399] uppercase mb-2">Insights</p>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                            Gemini-Powered <br />
                            <span className="text-[#34D399]">Operational Insights</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xl leading-relaxed mt-4 mb-8">
                            AI-assisted insights for better operational understanding and smarter decision support.
                        </p>

                        <button className="flex items-center gap-2 px-6 py-3 bg-[#064E3B]/10 border border-[#10B981]/40 text-[#34D399] font-medium rounded-lg hover:bg-[#064E3B]/30 transition-all duration-200">
                            <Sparkles size={20} />
                            Generate New Insights
                        </button>
                    </div>


                    <div className="relative w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0 lg:pl-10">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#10B981]/10 blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10 w-full rounded-3xl overflow-hidden border border-[#10B981]/20 shadow-2xl shadow-[#064E3B]/20 transition-transform duration-500 hover:scale-[1.02]">
                            <img
                                src={InsightsHero}
                                alt="AI Operational Insights"
                                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>

                    </div>
                </div>

                <div className="relative bg-[#111827] border border-gray-800/80 rounded-2xl p-8 md:p-10 mt-10 hover:border-[#10B981]/30 transition-colors duration-300 shadow-2xl">

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#34D399] to-transparent shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>

                    <div className="flex items-center gap-3 mb-8 pl-4">
                        <Lightbulb size={28} className="text-[#34D399]" />
                        <h2 className="text-2xl font-bold text-[#34D399]">Today's AI Insight</h2>
                    </div>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed pl-4">
                        <p>
                            High solar curtailment is expected between 11:00 AM – 2:00 PM due to peak solar generation and relatively low daytime industrial demand.
                        </p>
                        <p>
                            Coal generation during this period may remain unnecessarily high, causing renewable energy wastage and reduced system efficiency.
                        </p>
                        <p className="bg-[#064E3B]/10 p-4 rounded-lg border border-[#10B981]/10">
                            <span className="text-[#34D399] font-semibold">Recommended action:</span> Gradually reduce coal dispatch before 10:00 AM and prioritize battery charging or flexible industrial loads during peak solar hours.
                        </p>
                    </div>
                </div>

            </div>

            <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-auto border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Zap size={20} className="text-[#34D399]" fill="currentColor" />
                    <span className="text-lg font-bold text-white tracking-wide">SolarGrid</span>
                </div>

                <p className="text-sm text-gray-500 text-center md:text-left">
                    © 2026 Solar Curtailment Optimizer.<br />Built for Google Solution Challenge.
                </p>

                <div className="flex gap-6 text-sm text-gray-400">
                    <button onClick={() => navigate('/')} className="hover:text-[#34D399] transition-colors">Home</button>
                    <button onClick={() => navigate('/about')} className="hover:text-[#34D399] transition-colors">About</button>
                    <button onClick={() => navigate('/dashboard')} className="hover:text-[#34D399] transition-colors">Dashboard</button>
                </div>
            </footer>
        </div>
    )
}

export default Insights