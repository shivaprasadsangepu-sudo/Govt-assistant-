
import React from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, DollarSign, ShieldAlert, Edit2 } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Account Settings</h2>
        <button className="flex items-center space-x-2 text-orange-600 font-bold hover:underline">
          <Edit2 size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="bg-white border rounded-3xl overflow-hidden shadow-sm">
        <div className="h-32 bg-gradient-to-r from-orange-400 to-rose-400"></div>
        <div className="px-8 pb-8 -mt-12">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="h-24 w-24 rounded-3xl bg-white p-1 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                <User size={48} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-slate-800">Rahul Kumar</h3>
              <p className="text-slate-500 font-medium flex items-center gap-1">
                <MapPin size={14} /> Hyderabad, Telangana
              </p>
            </div>
            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider self-start md:self-auto">
              Verified Profile
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <section className="space-y-4">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Eligibility Basics</h4>
               <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <div className="flex items-center gap-3">
                        <GraduationCap className="text-orange-600" size={20} />
                        <span className="text-sm font-semibold text-slate-700">Education</span>
                     </div>
                     <span className="text-sm font-bold">Graduate (B.Tech)</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <div className="flex items-center gap-3">
                        <User className="text-orange-600" size={20} />
                        <span className="text-sm font-semibold text-slate-700">Category</span>
                     </div>
                     <span className="text-sm font-bold">OBC-NCL</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <div className="flex items-center gap-3">
                        <DollarSign className="text-orange-600" size={20} />
                        <span className="text-sm font-semibold text-slate-700">Annual Income</span>
                     </div>
                     <span className="text-sm font-bold">₹1,50,000</span>
                  </div>
               </div>
            </section>

            <section className="space-y-4">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Physical Standards</h4>
               <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-2xl flex justify-between">
                     <span className="text-sm font-semibold text-slate-700">Height</span>
                     <span className="text-sm font-bold">178 cm</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl flex justify-between">
                     <span className="text-sm font-semibold text-slate-700">Chest Expansion</span>
                     <span className="text-sm font-bold">85 cm</span>
                  </div>
                  <div className="p-4 bg-rose-50 rounded-2xl flex justify-between items-center">
                     <div className="flex items-center gap-2">
                        <ShieldAlert className="text-rose-600" size={18} />
                        <span className="text-sm font-semibold text-rose-700">Disability</span>
                     </div>
                     <span className="text-sm font-bold text-rose-700">No</span>
                  </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
