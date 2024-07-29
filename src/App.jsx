import React from 'react';
import Sidebar from './components/Sidebar';
import SystemProcesses from './pages/SystemProcesses';
import HealthMonitoring from './pages/HealthMonitoring';
import BlockingActivities from './pages/BlockingActivities';
import ThreatNotifications from './pages/ThreatNotifications';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <main style={{ marginLeft: 65, padding: 20 }}>
        <Routes>
          <Route path="/" element={<SystemProcesses />} />
          <Route path="/health-monitoring" element={<HealthMonitoring />} />
          <Route path="/blocking-activities" element={<BlockingActivities />} />
          <Route path="/threat-notifications" element={<ThreatNotifications />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
