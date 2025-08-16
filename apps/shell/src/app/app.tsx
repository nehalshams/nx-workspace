import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { loadRemote } from '@module-federation/enhanced/runtime';

const MachineDashboard = React.lazy(
  () => loadRemote('machineDashboard/Module') as any
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/machine-dashboard">MachineDashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/machine-dashboard" element={<MachineDashboard />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
