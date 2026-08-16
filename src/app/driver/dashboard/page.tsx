'use client';

import AppShell from '@/components/AppShell';
import { pickups, vehicles } from '@/lib/mockData';

const routeTask = pickups[0];
const currentVehicle = vehicles[0];

export default function DriverDashboardPage() {
  return (
    <AppShell
      title="Driver Portal"
      subtitle="Review assigned pickups, complete waste verification and update collection status."
      navItems={[
        { label: 'Dashboard', href: '/driver/dashboard', active: true },
        { label: 'Tasks', href: '/driver/tasks' },
        { label: 'Routes', href: '/driver/routes' },
        { label: 'Vehicle', href: '/driver/vehicle' },
        { label: 'Notifications', href: '/driver/notifications' },
      ]}
    >
      <div className="summary-grid">
        <div className="metric-card"><span>Assigned pickups</span><strong>3</strong></div>
        <div className="metric-card"><span>Avg route time</span><strong>18 min</strong></div>
        <div className="metric-card"><span>Vehicle load</span><strong>{currentVehicle.load} kg</strong></div>
        <div className="metric-card"><span>Current status</span><strong>{currentVehicle.status}</strong></div>
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Active task</h3>
          </div>
          <div className="list-row">
            <div>
              <strong>{routeTask.id}</strong>
              <p className="page-subtitle" style={{ margin: 0 }}>{routeTask.location}</p>
            </div>
            <span className="status-badge en-route">{routeTask.status}</span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Vehicle snapshot</h3>
          </div>
          <div className="list-stack">
            <div className="list-row"><strong>ID</strong><span>{currentVehicle.id}</span></div>
            <div className="list-row"><strong>Driver</strong><span>{currentVehicle.driver}</span></div>
            <div className="list-row"><strong>Location</strong><span>{currentVehicle.location}</span></div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
