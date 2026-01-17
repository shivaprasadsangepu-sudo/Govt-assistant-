
import React from 'react';
import { Plus, Users, Briefcase, FileText, Settings, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DATA = [
  { name: 'Jan', jobs: 400 },
  { name: 'Feb', jobs: 300 },
  { name: 'Mar', jobs: 600 },
  { name: 'Apr', jobs: 800 },
  { name: 'May', jobs: 500 },
];

export const Admin: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Admin Command Center</h2>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
          <Plus size={20} />
          <span>Post New Job</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
               <Users size={24} />
             </div>
             <span className="text-green-500 text-sm font-bold">+12%</span>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase">Total Users</p>
          <h3 className="text-3xl font-black text-slate-800">142,892</h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
             <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
               <Briefcase size={24} />
             </div>
             <span className="text-red-500 text-sm font-bold">-2%</span>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase">Active Listings</p>
          <h3 className="text-3xl font-black text-slate-800">4,102</h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
             <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
               <BarChart3 size={24} />
             </div>
             <span className="text-green-500 text-sm font-bold">+28%</span>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase">Matches Created</p>
          <h3 className="text-3xl font-black text-slate-800">89,203</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border shadow-sm h-96">
          <h4 className="text-lg font-bold mb-6 text-slate-800">Jobs Posted Trend</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#f8fafc' }} />
              <Bar dataKey="jobs" radius={[10, 10, 0, 0]}>
                {DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 3 ? '#ea580c' : '#cbd5e1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-8 rounded-3xl border shadow-sm flex flex-col">
          <h4 className="text-lg font-bold mb-6 text-slate-800">System Logs</h4>
          <div className="space-y-4 flex-1 overflow-y-auto">
            {[
              { time: '2m ago', msg: 'New SSC CGL Job scraped successfully', type: 'info' },
              { time: '15m ago', msg: 'Admin rahul.p updated Sukanya Scheme', type: 'update' },
              { time: '1h ago', msg: 'Push notification sent to 12,000 users', type: 'push' },
              { time: '3h ago', msg: 'Database backup completed', type: 'system' }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-sm font-medium text-slate-700">{log.msg}</span>
                <span className="text-xs text-slate-400 font-bold">{log.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors border-t">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
};
