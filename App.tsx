
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { SchemeCard } from './components/Cards';
import { MOCK_SCHEMES } from './constants';

const SchemesPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-800">Welfare Schemes</h2>
    <p className="text-slate-500">Discover financial and educational benefits from Central and State governments.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_SCHEMES.map(scheme => (
        <SchemeCard key={scheme.id} scheme={scheme} isEligible={true} />
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
