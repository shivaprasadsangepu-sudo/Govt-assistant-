
import React, { useState, useEffect } from 'react';
import { JobCard, SchemeCard, AISummaryCard } from '../components/Cards';
import { MOCK_JOBS, MOCK_SCHEMES, INDIAN_STATES } from '../constants';
import { UserProfile, EducationLevel, CasteCategory, Gender } from '../types';
import { calculateJobEligibility } from '../services/eligibilityEngine';
import { getAIEligibilitySummary } from '../services/gemini';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  ChevronRight, 
  Briefcase, 
  ShieldCheck, 
  Zap, 
  Bell, 
  Globe, 
  UserPlus, 
  SearchCheck, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Twitter,
  Facebook,
  Linkedin,
  MapPin,
  // Fix: Added missing Sparkles icon import
  Sparkles
} from 'lucide-react';

const INITIAL_USER: UserProfile = {
  id: 'u1',
  name: 'Rahul Kumar',
  age: 24,
  gender: Gender.MALE,
  state: 'Telangana',
  education: EducationLevel.GRADUATE,
  caste: CasteCategory.OBC,
  annualIncome: 150000,
  physicalDisability: false,
  jobInterests: ['Police', 'Banking']
};

export const Home: React.FC = () => {
  const [user] = useState<UserProfile>(INITIAL_USER);
  const [activeTab, setActiveTab] = useState<'jobs' | 'schemes'>('jobs');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All India');

  // Hero Stats & Interactions
  const matches = MOCK_JOBS.map(job => ({
    job,
    ...calculateJobEligibility(user, job)
  })).sort((a, b) => b.score - a.score);

  return (
    <div className="space-y-24 pb-20 -mt-8">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-br from-indigo-100/50 via-white to-orange-50/50 blur-3xl -z-10 rounded-full"></div>
        <div className="text-center space-y-8 px-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/5 px-4 py-2 rounded-full border border-slate-900/10">
            <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse"></span>
            <span className="text-xs font-black text-slate-800 tracking-wider uppercase">Live: 4,203 New Vacancies Today</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            All Government Jobs <br />
            <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent italic">& Schemes.</span> One Platform.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Central • State • Schemes • Eligibility • Alerts. <br className="hidden md:block" />
            AI-powered matching for your career growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-3xl font-bold text-lg hover:bg-orange-600 hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3">
              <span>Check My Eligibility</span>
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-slate-800 rounded-3xl font-bold text-lg hover:border-orange-200 hover:bg-orange-50 transition-all flex items-center justify-center">
              Browse Latest Jobs
            </button>
          </div>
        </div>
      </section>

      {/* 2. SMART SEARCH SECTION */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-3 rounded-[32px] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
            <input 
              type="text" 
              placeholder="Search job, scheme, department, exam..."
              className="w-full pl-14 pr-4 py-5 bg-transparent focus:outline-none font-semibold text-slate-800 placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="h-10 w-[1px] bg-slate-100 hidden md:block self-center"></div>
          <select 
            className="px-6 py-5 bg-transparent font-bold text-slate-700 focus:outline-none cursor-pointer"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option>All India</option>
            {INDIAN_STATES.map(s => <option key={s}>{s}</option>)}
          </select>
          <button className="bg-orange-600 text-white p-5 rounded-2xl hover:bg-orange-700 transition-all flex items-center justify-center shadow-lg">
            <Filter size={24} />
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {['SSC', 'Banking', 'Police', 'Defence', 'Scholarships', 'Agriculture'].map(chip => (
            <button key={chip} className="px-5 py-2.5 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm">
              #{chip}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURE HIGHLIGHTS */}
      <section className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: 'Central & State Jobs', desc: 'Direct access to all UPSC, SSC, RRB and State PSC notifications.', color: 'bg-blue-50 text-blue-600' },
            { icon: ShieldCheck, title: 'Government Schemes', desc: 'Welfare, educational and financial schemes based on your income.', color: 'bg-green-50 text-green-600' },
            { icon: Zap, title: 'Eligibility Checker', desc: 'Instantly know if you qualify based on age, education and caste.', color: 'bg-orange-50 text-orange-600' },
            { icon: SearchCheck, title: 'Verified Data', desc: 'Our team verifies every single listing from official gazettes.', color: 'bg-purple-50 text-purple-600' },
            { icon: Globe, title: 'Regional Language Support', desc: 'Read notifications in Telugu, Hindi, and English.', color: 'bg-rose-50 text-rose-600' },
            { icon: Sparkles, title: 'AI Matching Assistant', desc: 'Personalized job summaries and interview tips powered by AI.', color: 'bg-indigo-50 text-indigo-600', badge: 'Coming Soon' },
          ].map((feat, i) => (
            <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${feat.color}`}>
                  <feat.icon size={28} />
                </div>
                {feat.badge && <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1 rounded-full">{feat.badge}</span>}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">{feat.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="bg-slate-900 rounded-[48px] py-20 px-8 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black">Success in 3 Simple Steps</h2>
          <p className="text-slate-400 font-medium">Getting your dream government job has never been this organized.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative z-10">
          {[
            { step: 1, icon: UserPlus, title: 'Create Profile', desc: 'Add your education, age and caste to get relevant results.' },
            { step: 2, icon: SearchCheck, title: 'Check Eligibility', desc: 'Our engine filters thousands of jobs to find your perfect matches.' },
            { step: 3, icon: Bell, title: 'Get Alerts & Apply', desc: 'Get notified before anyone else and apply through official links.' }
          ].map((item, i) => (
            <div key={i} className="space-y-6 flex flex-col items-center">
              <div className="relative">
                <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20">
                  <item.icon size={32} className="text-orange-500" />
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 bg-orange-600 rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                  {item.step}
                </div>
              </div>
              <h5 className="text-xl font-bold">{item.title}</h5>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LATEST UPDATES SECTION */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
              <TrendingUp className="text-orange-600" />
              Recent Feed
            </h2>
            <p className="text-slate-500 font-medium">Updates from the last 24 hours.</p>
          </div>
          <div className="flex p-1.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <button 
              onClick={() => setActiveTab('jobs')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'jobs' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Latest Jobs
            </button>
            <button 
              onClick={() => setActiveTab('schemes')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'schemes' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
            >
              New Schemes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'jobs' ? (
            MOCK_JOBS.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            MOCK_SCHEMES.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} isEligible={true} />)
          )}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-800 rounded-2xl font-bold hover:bg-slate-50 transition-all inline-flex items-center space-x-2">
            <span>Show More Results</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* 6. TRUST & AUTHORITY */}
      <section className="text-center space-y-12">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Our Commitment to Authenticity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: CheckCircle2, title: 'Verified Sources', desc: 'Data only from gov.in & nic.in' },
            { icon: CheckCircle2, title: 'Official Gazettes', desc: 'Notification PDFs attached' },
            { icon: CheckCircle2, title: 'No Fake Alerts', desc: 'Spam-free direct links only' }
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <t.icon size={32} className="text-green-500" />
              <h6 className="font-bold text-slate-800 leading-tight">{t.title}</h6>
              <p className="text-xs font-semibold text-slate-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-gradient-to-br from-orange-600 to-rose-600 rounded-[48px] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">Never Miss a Government Opportunity</h2>
          <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed">
            Join 1.4 Lakh+ users receiving daily localized alerts and eligibility matching.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-orange-600 rounded-3xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95">
              Sign Up for Free
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-orange-700/30 border-2 border-white/20 rounded-3xl font-bold text-xl hover:bg-orange-700/50 transition-all active:scale-95">
              Login Now
            </button>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-slate-100 pt-16 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              GovAssist
            </h1>
            <p className="text-slate-400 font-medium leading-relaxed max-w-xs">
              India's most trusted AI-driven platform for government career resources and welfare schemes.
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all"><Twitter size={20} /></button>
              <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all"><Facebook size={20} /></button>
              <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all"><Linkedin size={20} /></button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h6 className="font-black text-xs uppercase tracking-widest text-slate-400">Platform</h6>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Latest Jobs</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Welfare Schemes</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Eligibility Checker</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">State-wise Alerts</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-black text-xs uppercase tracking-widest text-slate-400">Company</h6>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-black text-xs uppercase tracking-widest text-slate-400">Language</h6>
            <div className="space-y-3">
              <button className="flex items-center space-x-2 text-sm font-black text-orange-600">
                <Globe size={16} />
                <span>English (India)</span>
              </button>
              <button className="flex items-center space-x-2 text-sm font-bold text-slate-400 hover:text-orange-600">
                <Globe size={16} />
                <span>తెలుగు (Telugu)</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 pb-4 border-t border-slate-50 text-center text-xs font-bold text-slate-400">
          © 2024 GovAssist Technologies Private Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
