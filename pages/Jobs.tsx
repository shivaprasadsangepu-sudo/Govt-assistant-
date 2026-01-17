
import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import { JobCard } from '../components/Cards';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Police', 'Banking', 'Railway', 'UPSC', 'SSC'];

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Explore Government Jobs</h2>
        <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Sorted by:</span>
            <select className="bg-transparent text-sm font-bold text-orange-600 focus:outline-none">
                <option>Newest First</option>
                <option>Deadline</option>
                <option>Salary</option>
            </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by role, department or state..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="p-4 bg-white border rounded-2xl flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all md:w-auto w-full">
           <SlidersHorizontal size={20} className="text-slate-600" />
           <span className="font-bold text-slate-700">Filters</span>
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
              selectedCategory === cat 
                ? 'bg-orange-600 text-white' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 font-medium">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
