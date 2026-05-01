import React, { useState } from 'react';
import { 
  Play, 
  Code, 
  Palette, 
  PenTool, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Mail,
  ChevronRight,
  FolderOpen,
  CreditCard,
  PlayCircle,
  UploadCloud,
  Headset,
  Lock
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('video');

  // Contact Links
  const whatsappLink = "https://wa.me/message/HHMMNG7WBRL4E1";
  const emailLink = "mailto:info@docdril.in";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="./logo.svg" alt="Docdril Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-tight">Docdril</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-slate-900 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="https://docdril.com" target="_blank" rel="noreferrer" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Website
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Let's Build
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#e5eff8] via-[#f0f6fa] to-white relative overflow-hidden">
        
        {/* Soft Volumetric Background Clouds */}
        <div className="absolute top-24 left-[-10%] md:left-[5%] w-[500px] h-[300px] opacity-80 pointer-events-none mix-blend-screen">
          <div className="absolute top-10 left-10 w-56 h-56 bg-white rounded-full blur-[50px]"></div>
          <div className="absolute top-0 left-40 w-72 h-72 bg-white rounded-full blur-[60px]"></div>
          <div className="absolute top-20 left-72 w-48 h-48 bg-white rounded-full blur-[45px]"></div>
        </div>
        <div className="absolute top-10 right-[-10%] md:right-[5%] w-[500px] h-[300px] opacity-80 pointer-events-none mix-blend-screen">
          <div className="absolute top-16 right-10 w-56 h-56 bg-white rounded-full blur-[50px]"></div>
          <div className="absolute top-0 right-40 w-80 h-80 bg-white rounded-full blur-[60px]"></div>
          <div className="absolute top-24 right-72 w-56 h-56 bg-white rounded-full blur-[50px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Build your digital <br />presence like a pro
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            High-end creative production, custom software, and automated systems all in one place. From first script to final deployment, we've got your back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a href="#services" className="w-full sm:w-auto bg-white/70 backdrop-blur-md text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-slate-100 hover:-translate-y-1">
              See services
            </a>
          </div>
        </div>

        {/* Docdril OS Promotional Banner Mockup */}
        <div className="max-w-5xl mx-auto mt-24 relative z-10 perspective-1000">
          
          {/* Banner Intro Label */}
          <div className="flex justify-center mb-6">
            <a href="https://os.docdril.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-sm font-bold text-slate-900">Experience Docdril OS</span>
              <span className="text-sm font-medium text-slate-500 hidden sm:inline border-l border-slate-300 pl-3">Your dedicated client portal</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
            
            {/* Browser Top Bar */}
            <div className="bg-[#F9FAFB] border-b border-slate-100 px-4 py-3 flex items-center gap-2 relative">
              <div className="flex gap-1.5 absolute left-4">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
              <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1.5 text-[10px] font-medium text-slate-400 flex items-center gap-2 w-64 justify-center shadow-sm">
                <Lock className="w-3 h-3" /> os.docdril.com
              </div>
            </div>

            <div className="flex h-[480px]">
              {/* Sidebar */}
              <div className="w-64 bg-[#F9FAFB] border-r border-slate-100 p-6 flex flex-col gap-2 hidden md:flex">
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-xl font-bold text-slate-900 tracking-tight">Docdril</div>
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shadow-sm">OS</span>
                </div>
                
                {/* Client Profile (Google Login) */}
                <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-inner">G</div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Client Workspace</p>
                    <p className="text-[10px] text-slate-500">hello@startup.com</p>
                  </div>
                </div>
                
                <div className="w-full h-10 bg-white rounded-lg border border-slate-200 flex items-center px-4 shadow-sm gap-3 text-sm font-bold text-slate-800">
                  <div className="w-4 h-4 rounded-[4px] border-2 border-slate-800"></div> Pipeline
                </div>
                <div className="w-full h-10 flex items-center px-4 gap-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">
                  <FolderOpen className="w-4 h-4 text-slate-400" /> Files & Folders
                </div>
                <div className="w-full h-10 flex items-center px-4 gap-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">
                  <CreditCard className="w-4 h-4 text-slate-400" /> Billing & Milestones
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-200 space-y-1">
                  <div className="w-full h-9 flex items-center px-4 gap-3 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">
                    <PlayCircle className="w-4 h-4 text-slate-400" /> OS Tutorials
                  </div>
                  <div className="w-full h-9 flex items-center px-4 gap-3 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">
                    <Headset className="w-4 h-4 text-slate-400" /> Managed by Team
                  </div>
                </div>
              </div>
              
              {/* Main Area */}
              <div className="flex-1 p-8 bg-[#FAFAFA] overflow-hidden flex flex-col relative">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-900">Active Pipeline</h3>
                    <p className="text-sm text-slate-500">Track stages, manage files, and clear payments.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-lg text-xs font-bold text-slate-700 flex items-center gap-2 hover:bg-slate-50 transition-colors">
                      <UploadCloud className="w-4 h-4" /> Upload Assets
                    </button>
                    <button className="px-4 py-2 bg-blue-600 shadow-sm rounded-lg text-xs font-bold text-white flex items-center gap-2 hover:bg-blue-700 transition-colors">
                      Book New Project
                    </button>
                  </div>
                </div>
                
                {/* Project Pipeline List */}
                <div className="space-y-4 overflow-y-auto pr-2 pb-10">
                  
                  {/* Item 1: In Production */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-bold text-slate-900">Cinematic Brand Anthem</p>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">Stage 3/5: Production</span>
                        </div>
                        <p className="text-xs text-slate-500">High-end video edit • Delivery in 48hrs</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Payment Status</p>
                        <p className="text-xs font-bold text-green-600 flex items-center gap-1 justify-end"><CheckCircle2 className="w-3 h-3"/> 50% Advance Paid</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm">
                          <FolderOpen className="w-3 h-3 text-blue-500" /> RAW Footage
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm">
                          <FolderOpen className="w-3 h-3 text-purple-500" /> Brand Guidelines
                        </div>
                      </div>
                      <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-blue-500 rounded-full"></div></div>
                    </div>
                  </div>

                  {/* Item 2: Delivered & Pending Payment */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-bold text-slate-900">SaaS Web App Platform</p>
                          <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <Lock className="w-3 h-3" /> Awaiting Final Payment
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">Custom Dev & UI/UX • Final Review Passed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Payment Status</p>
                        <button className="text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-1.5 rounded-md transition-colors shadow-sm">Pay Balance</button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-slate-50 rounded-xl p-3 border border-slate-100 opacity-70">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center"><Code className="w-4 h-4 text-slate-400" /></div>
                         <div>
                           <p className="text-xs font-bold text-slate-700">Source_Code_Final.zip</p>
                           <p className="text-[10px] text-slate-500">Locked until payment is cleared</p>
                         </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Built for visionaries,<br/>powered by execution</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Video (Large) */}
          <div className="lg:col-span-2 bg-[#F7F7F8] rounded-[2rem] p-10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
              <Play className="text-slate-900 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Cinematic Video & Motion</h3>
            <p className="text-slate-600 mb-8 max-w-md">End-to-end production. We edit, animate, and generate visuals that capture attention and drive conversions.</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-semibold mb-2">Editing & Ads</h4>
                <p className="text-sm text-slate-500">Short-form Reels, YT Long-form, Brand promos, and Performance Ad creatives.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-semibold mb-2">Animation & Motion</h4>
                <p className="text-sm text-slate-500">2D explainer videos, dynamic logo animations, and high-end motion graphics.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-semibold mb-2">AI Video Gen</h4>
                <p className="text-sm text-slate-500">AI Talking Avatars, faceless automated content, and text-to-video pipelines.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-semibold mb-2">AI Audio & Song</h4>
                <p className="text-sm text-slate-500">Custom jingles, background scores, and branded voice-based tracks.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Design */}
          <div className="bg-[#F7F7F8] rounded-[2rem] p-10 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
              <Palette className="text-slate-900 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Brand & Design</h3>
            <p className="text-slate-600 mb-8">Crafting visual identities that radiate premium trust.</p>
            
            <ul className="space-y-3 mt-auto">
              {['Logo & Brand Kits', 'UI/UX App Interfaces', 'Pitch & Investor Decks', 'Social Media Creatives', 'Custom Cover Thumbnails'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Tech & Dev */}
          <div className="bg-[#F7F7F8] rounded-[2rem] p-10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
              <Code className="text-slate-900 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Tech & Development</h3>
            <p className="text-slate-600 mb-6">Scalable apps and high-converting web platforms.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">Full-stack Websites</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">Mobile iOS/Android Apps</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">Custom CRMs</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">AI Chatbots</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">Billing Systems</span>
            </div>
          </div>

      {/* Content Strategy Card inside Services Section */}
          <div className="lg:col-span-2 bg-slate-900 text-white rounded-[2rem] p-10 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            {/* Background design accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <PenTool className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Content Strategy & Management</h3>
                <p className="text-slate-300 mb-6 max-w-md">We don't just create; we distribute. End-to-end management to ensure your brand dominates the feed.</p>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-300">
                  <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-400"/> Social Management</p>
                  <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-400"/> Content Calendars</p>
                  <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-400"/> Video Scriptwriting</p>
                  <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-400"/> Page Optimization</p>
                </div>
              </div>
              
              {/* Visual Mockup inside card */}
              <div className="w-full md:w-64 bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-8 bg-slate-700 rounded flex items-center px-2"><div className="w-1/2 h-2 bg-slate-600 rounded"></div></div>
                  <div className="w-full h-8 bg-slate-700 rounded flex items-center px-2"><div className="w-3/4 h-2 bg-slate-600 rounded"></div></div>
                  <div className="w-full h-8 bg-blue-500/20 rounded flex items-center px-2 border border-blue-500/30"><div className="w-2/3 h-2 bg-blue-400 rounded"></div></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Portfolio / Insights Section */}
      <section id="portfolio" className="py-24 px-6 bg-[#f0f6fa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proof in production</h2>
            </div>
            <a href="https://portfolio.docdril.com" target="_blank" rel="noreferrer" className="bg-white border border-slate-200 text-slate-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              Explore Full Portfolio <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Portfolio Item 1 (Hero size) */}
            <a href="https://portfolio.docdril.com" target="_blank" rel="noreferrer" className="group block lg:col-span-2 bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-72 bg-slate-200 overflow-hidden">
                {/* Premium 3D Abstract Glassmorphism for UI/UX */}
                <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2564&auto=format&fit=crop" alt="UI Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Web & App</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Fintech Dashboard UI/UX Design</h3>
                <p className="text-slate-500">Complete redesign of a scalable financial application, focusing on user retention and clean data visualization.</p>
              </div>
            </a>

            {/* Portfolio Item 2 */}
            <a href="https://portfolio.docdril.com" target="_blank" rel="noreferrer" className="group block bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="h-48 bg-slate-200 overflow-hidden">
                {/* Premium Cinematic Grading/Editing Bay */}
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop" alt="Video Edit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Video</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Cinematic Brand Anthem</h3>
                <p className="text-slate-500 text-sm mt-auto">High-end promotional video editing including color grading and custom audio scoring.</p>
              </div>
            </a>

            {/* Portfolio Item 3 */}
            <a href="https://portfolio.docdril.com" target="_blank" rel="noreferrer" className="group block bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="h-48 bg-slate-200 overflow-hidden">
                {/* Premium Sleek 3D AI Visualization */}
                <img src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2670&auto=format&fit=crop" alt="AI Avatar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">AI Content</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">AI Presenter Generation</h3>
                <p className="text-slate-500 text-sm mt-auto">Creating scalable training modules using hyper-realistic AI avatars and text-to-speech.</p>
              </div>
            </a>

            {/* Portfolio Item 4 */}
            <a href="https://portfolio.docdril.com" target="_blank" rel="noreferrer" className="group block lg:col-span-2 bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto bg-slate-200 overflow-hidden">
                {/* Premium Brand Mockup/Stationery */}
                <img src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2647&auto=format&fit=crop" alt="Social Media" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Brand & Social</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Complete Agency Rebrand</h3>
                <p className="text-slate-500 mb-4">Developed visual identity, color palettes, pitch decks, and a 30-day social content calendar driving a 400% engagement boost.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Ready to scale your <br/>creative output?</h2>
          <p className="text-xl text-slate-500 mb-10">Stop juggling multiple freelancers. Partner with a dedicated team that handles your entire digital pipeline.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" />
              Message on WhatsApp
            </a>
            <a href={emailLink} className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-full text-lg font-medium hover:border-slate-300 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Mail className="w-6 h-6" />
              Email the Team
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-100 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Docdril. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;