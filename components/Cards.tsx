
import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, IndianRupee, ExternalLink, ChevronRight, Sparkles, Gift, Bookmark, BookmarkCheck } from 'lucide-react';
import { GovJob, GovScheme } from '../types';

interface JobCardProps {
  job: GovJob;
  matchScore?: number;
  isEligible?: boolean;
  onApply?: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, matchScore, isEligible, onApply }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {isEligible && (
        <div className="absolute top-0 right-12 bg-green-500 text-white text-[10px] px-3 py-1 font-bold uppercase tracking-wider rounded-b-lg shadow-sm">
          Eligible
        </div>
      )}
      
      <button 
        onClick={() => setIsSaved(!isSaved)}
        className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isSaved ? 'text-orange-600 bg-orange-50' : 'text-slate-300 hover:text-slate-400'}`}
      >
        {isSaved ? <BookmarkCheck size={20} fill="currentColor" /> : <Bookmark size={20} />}
      </button>

      <div className="flex items-start justify-between mb-4">
        <div className="space-y-1 pr-8">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{job.category}</span>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-tight">{job.title}</h3>
          <p className="text-sm text-slate-500 font-medium">{job.department}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 mt-6 border-t border-slate-50 pt-5">
        <div className="flex items-center space-x-2 text-slate-500">
          <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400">
            <IndianRupee size={14} />
          </div>
          <span className="text-xs font-semibold">{job.salaryRange}</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-500">
          <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400">
            <Calendar size={14} />
          </div>
          <span className="text-xs font-semibold">{job.deadline}</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-500 col-span-2">
          <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400">
            <MapPin size={14} />
          </div>
          <span className="text-xs font-semibold truncate">{job.states.join(', ')}</span>
        </div>
      </div>

      <div className="mt-8 flex items-center space-x-3">
        <button 
          onClick={onApply}
          className="flex-1 bg-slate-900 text-white py-3 rounded-2xl font-bold text-sm hover:bg-orange-600 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 active:scale-95"
        >
          <span>View Details</span>
          <ChevronRight size={16} />
        </button>
        <a 
          href={job.applyLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 border-2 border-slate-50 rounded-2xl hover:bg-slate-50 transition-all text-slate-400 hover:text-orange-600"
          title="Apply on official site"
        >
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};

export const SchemeCard: React.FC<{ scheme: GovScheme; isEligible?: boolean }> = ({ scheme, isEligible }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
       <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
             <Gift size={24} />
          </div>
          {isEligible && (
            <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter">Match Found</span>
          )}
       </div>
       <h3 className="text-lg font-bold text-slate-800 mb-1 leading-snug">{scheme.title}</h3>
       <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">{scheme.ministry}</p>
       
       <p className="text-sm text-slate-600 line-clamp-2 mb-8 leading-relaxed">
         {scheme.benefits}
       </p>

       <button className="w-full border-2 border-slate-50 text-slate-700 py-3 rounded-2xl font-bold text-sm hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/30 transition-all">
         Check Benefits
       </button>
    </div>
  );
};

export const AISummaryCard: React.FC<{ summary: string }> = ({ summary }) => (
  <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
    <div className="flex items-center space-x-2 mb-4 relative z-10">
      <div className="p-2 bg-yellow-400/20 rounded-xl">
        <Sparkles size={18} className="text-yellow-400" />
      </div>
      <h4 className="font-bold text-xs tracking-widest uppercase">Smart Eligibility Summary</h4>
    </div>
    <p className="text-base leading-relaxed font-medium opacity-95 relative z-10">{summary}</p>
  </div>
);
