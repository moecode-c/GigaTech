"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNetwork from "@/components/FloatingNetwork";
import Link from "next/link";
import { ArrowRight, Zap, Target, Layers, ShieldCheck, BriefcaseBusiness, Building2, Handshake, Users2, ArrowUpRight, ArrowRightCircle, Flag, Store, Factory, Radar, LineChart, MonitorSmartphone, Server, Wrench, Cpu, Activity, Mail, PhoneCall, MapPin, Clock3 } from "lucide-react";
import Image from "next/image";

export default function DemoV2() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#060e1c] text-slate-100 font-sans selection:bg-blue-500/30">
      <Header />
      
      <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8 max-w-[90rem] mx-auto space-y-12">
        
        {/* Asymmetrical Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[75vh]">
          <div className="lg:col-span-7 space-y-8 z-10 pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium animate-pulse">
              <Zap className="w-4 h-4" /> Structural V2 Preview
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
              Electromechanical <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">Excellence.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
              We design and deliver integrated solutions focused on reliability, visibility, and long-term operational value. Simple architecture, strong execution.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#solutions" className="px-8 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg flex items-center gap-3 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_-5px_rgba(37,99,235,0.7)] group">
                Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0c1f3d] to-[#040914] border border-slate-800 shadow-2xl flex items-center justify-center">
             <FloatingNetwork
              className="absolute inset-0 z-0 opacity-100"
              nodeColor="#60a5fa"
              lineColor="#1e3a8a"
              nodeCount={65}
              interactionStrength={0.5}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#040914]/80 to-transparent z-[1]" />
             <div className="relative z-10 p-8 text-center backdrop-blur-xl bg-[#060e1c]/60 border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
               <Image src="/gigatech.png" alt="Hero Visualization" width={800} height={600} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" />
               <div className="relative z-20">
                 <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Giga Technology</h3>
                 <p className="text-sm tracking-[0.2em] uppercase text-cyan-400 font-bold mb-4">Future Ready Core</p>
                 <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
               </div>
             </div>
          </div>
        </section>

        {/* Bento Box Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-6 lg:gap-8 pt-12">
           {/* Big Bento Item */}
           <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#0e2140] to-[#061124] p-10 sm:p-12 rounded-[2.5rem] border border-slate-800/80 relative overflow-hidden group shadow-lg">
              <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 transform group-hover:scale-110">
                <Target className="w-80 h-80 text-blue-400" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                  <ShieldCheck className="w-7 h-7 text-blue-400" />
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-6">Industrial Expansion</h2>
                <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg font-light">
                  Upgraded factory-floor systems with safer control architecture, better uptime, and faster response cycles. We build systems that perform dynamically under pressure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 font-medium text-slate-300 text-lg"><Layers className="text-cyan-400 w-6 h-6" /> Zero-downtime integration</li>
                  <li className="flex items-center gap-4 font-medium text-slate-300 text-lg"><Zap className="text-cyan-400 w-6 h-6" /> Scalable field infrastructure</li>
                </ul>
              </div>
           </div>

           {/* Stats Bento Items */}
           <div className="bg-[#0b162a] p-8 rounded-[2.5rem] border border-slate-800/80 flex flex-col justify-center items-center text-center hover:bg-[#112444] transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Users2 className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">250+</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Active Clients</div>
           </div>
           
           <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)] flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
              <BriefcaseBusiness className="w-12 h-12 text-blue-100 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">420+</div>
              <div className="text-sm uppercase tracking-widest text-blue-200 font-bold">Projects Delivered</div>
           </div>
           
           <div className="bg-[#0b162a] p-8 rounded-[2.5rem] border border-slate-800/80 flex flex-col justify-center items-center text-center hover:bg-[#112444] transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Building2 className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">18</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Years Experience</div>
           </div>
           
           <div className="bg-[#0b162a] p-8 rounded-[2.5rem] border border-slate-800/80 flex flex-col justify-center items-center text-center hover:bg-[#112444] transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Handshake className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">96%</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Client Retention</div>
           </div>
        </section>

        {/* Cinematic About Block (V2 Redesign) */}
        <section className="relative rounded-[2.5rem] overflow-hidden min-h-[60vh] flex items-center justify-center border border-slate-800 shadow-2xl mt-20">
          <Image src="/gigatech.png" alt="Company Core" width={1600} height={800} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#060e1c]/80 to-transparent" />
          <div className="relative z-10 text-center max-w-4xl px-6 py-20">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-8 border border-blue-500/30">
               <Zap className="w-8 h-8 text-blue-400" />
             </div>
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
               Extraordinary Teams Building Inspiring Projects
             </h2>
             <p className="text-xl sm:text-2xl text-slate-400 font-light leading-relaxed mb-10">
               Our teams are trusted to solve complex engineering challenges with clear execution, strong quality, and dependable delivery across industrial operations.
             </p>
             <Link href="/about" className="inline-flex items-center gap-3 text-lg font-bold text-white bg-blue-600 px-8 py-4 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:scale-105 transition-all">
               View Corporate Vision <ArrowRightCircle className="w-6 h-6" />
             </Link>
          </div>
        </section>

        {/* Horizontal Scrolling Timeline (V2 Redesign) */}
        <section className="pt-20">
          <div className="mb-10 pl-4 sm:pl-0">
             <p className="text-sm tracking-[0.2em] font-bold uppercase text-blue-400 mb-2">Evolution</p>
             <h2 className="text-4xl sm:text-5xl font-black text-white">Journey of Growth</h2>
          </div>
          
          {/* A horizontal scrolling container bypassing the max-w layout constraints slightly by using negative margins on mobile */}
          <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { year: "2008", title: "Inception", summary: "Completed first electromechanical control-panel integration.", icon: Flag },
              { year: "2012", title: "Retail Rollout", summary: "Delivered connected monitoring across multiple branches.", icon: Store },
              { year: "2017", title: "Industrial", summary: "Upgraded factory-floor systems with safer controls.", icon: Factory },
              { year: "2021", title: "Intelligence", summary: "Introduced remote monitoring dashboards and alerting.", icon: Radar },
              { year: "2025", title: "Optimization", summary: "Cross-sector optimization initiative.", icon: LineChart }
            ].map((milestone, idx) => {
               const IconName = milestone.icon;
               return (
                 <div key={idx} className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] bg-[#0b162a] border border-slate-800 rounded-[2rem] p-8 hover:bg-[#0f1f3a] transition-all group group relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                   <div className="flex justify-between items-start mb-6 text-slate-700/50 group-hover:text-blue-500/50 transition-colors">
                     <div className="text-5xl font-black">{milestone.year}</div>
                     <IconName className="w-10 h-10" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{milestone.title}</h3>
                   <p className="text-slate-400 font-light text-lg leading-relaxed relative z-10">{milestone.summary}</p>
                   <div className="mt-8 relative h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[40px] group-hover:w-full transition-all duration-700" />
                   </div>
                 </div>
               );
            })}
          </div>
        </section>

        {/* Hover-reveal Accordion List for Services & Products (V2 Redesign) */}
        <section className="pt-10">
           <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
             <div className="space-y-6">
                <p className="text-sm tracking-[0.2em] font-bold uppercase text-blue-400 mb-2">Capabilities</p>
                <h2 className="text-5xl font-black text-white leading-tight">What We Deliver</h2>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Simple architecture and clear implementation plans. Strong execution from kickoff to support.
                </p>
             </div>
             
             <div className="flex flex-col border-t border-slate-800">
                {[
                  { title: "CP Solutions", icon: MonitorSmartphone },
                  { title: "Retail Integration", icon: Store },
                  { title: "Operational Support", icon: Wrench },
                  { title: "Control Panels", icon: Cpu },
                  { title: "Automation Modules", icon: Server },
                  { title: "Monitoring Dashboards", icon: Activity }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group flex items-center justify-between py-8 border-b border-slate-800 cursor-pointer hover:px-8 transition-all duration-500">
                      <div className="flex items-center gap-6">
                        <Icon className="w-8 h-8 text-blue-500/50 group-hover:text-cyan-400 transition-colors" />
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-transform duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 shrink-0 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                      </div>
                    </div>
                  );
                })}
             </div>
           </div>
        </section>

        {/* Heavy Split-Screen Contact Block (V2 Redesign) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-24">
           <div className="bg-gradient-to-br from-blue-600 to-[#0e2140] p-10 sm:p-16 rounded-[2.5rem] flex flex-col justify-between shadow-[0_0_50px_-15px_rgba(37,99,235,0.4)]">
             <div>
               <p className="text-sm tracking-[0.2em] font-bold uppercase text-blue-200 mb-4">Start A Conversation</p>
               <h2 className="text-5xl sm:text-6xl font-black text-white leading-[1.1] mb-8">
                 Let us support your next breakthrough.
               </h2>
             </div>
             <a href="mailto:contact@gigatech.com" className="inline-flex max-w-max items-center gap-3 text-lg font-bold text-blue-900 bg-white px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all">
               Send us an email <ArrowUpRight className="w-5 h-5" />
             </a>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:h-full content-between">
              {[
                { title: "Email", value: "contact@gigatech.com", icon: Mail },
                { title: "Phone", value: "+20 100 000 0000", icon: PhoneCall },
                { title: "HQ Office", value: "Smart Village, Cairo", icon: MapPin },
                { title: "Ops Hours", value: "Sun-Thu, 9:00 - 18:00", icon: Clock3 }
              ].map((card, idx) => {
                const IconName = card.icon;
                return (
                  <div key={idx} className="bg-[#0b162a] border border-slate-800 p-8 rounded-[2rem] hover:bg-[#112444] transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700/50 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-colors">
                       <IconName className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">{card.title}</h4>
                    <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{card.value}</p>
                  </div>
                );
              })}
           </div>
        </section>

      </main>
      
      <Footer />
      
      {/* V2 Specific Navigation */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col sm:flex-row items-end sm:items-center gap-3 backdrop-blur-md bg-black/20 p-2 rounded-full border border-white/5">
        <Link href="/" className="rounded-full bg-[#0b162a] border border-slate-700/50 px-5 py-3 text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800 shadow-xl transition-all">
          Original UI
        </Link>
        <Link href="/demo-grey" className="rounded-full bg-[#0b162a] border border-slate-700/50 px-5 py-3 text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800 shadow-xl transition-all">
          Grey Palette UI
        </Link>
        <div className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-blue-500">
          V2 Structure UI
        </div>
      </div>
    </div>
  );
}
