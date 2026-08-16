'use client';

import AppShell from '@/components/AppShell';
import { dashboardSummary, hotspots, vehicles } from '@/lib/mockData';

const kpis = [
  { label: 'Total Pickups', value: dashboardSummary.totalPickups.toLocaleString() },
  { label: 'Resolution Rate', value: `${dashboardSummary.resolutionRate}%` },
  { label: 'Active Vehicles', value: dashboardSummary.activeVehicles.toString() },
  { label: 'Reward Value', value: dashboardSummary.rewardValue },
];

export default function AdminDashboardPage() {
  return (
    <AppShell
      title="Municipal Command Center"
      subtitle="Monitor live operations, route performance, hotspot risk and city-level waste analytics."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard', active: true },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles' },
        { label: 'Map', href: '/admin/map' },
        { label: 'Hotspots', href: '/admin/hotspots' },
        { label: 'Predictions', href: '/admin/predictions' },
        { label: 'Routes', href: '/admin/routes' },
        { label: 'Analytics', href: '/admin/analytics' },
        { label: 'Clean City', href: '/admin/clean-city' },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="summary-grid">
        {kpis.map((item) => (
          <div className="metric-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Live city map</h3>
          </div>
          <div className="map-surface">
            <div className="map-road road-1" />
            <div className="map-road road-2" />
            <div className="map-road road-3" />
            <div className="map-pin pin-1">V</div>
            <div className="map-pin pin-2">H</div>
            <div className="map-pin pin-3">A</div>
            <div className="map-pin pin-4">R</div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>AI alerts</h3>
          </div>
          <div className="list-stack">
            <div className="list-row"><strong>Sector 21</strong><span className="risk-pill high">High</span></div>
            <div className="list-row"><strong>Sector 7 dumping risk</strong><span className="risk-pill high">HIGH</span></div>
            <div className="list-row"><strong>Vehicle GJ01XX1234</strong><span className="risk-pill medium">Capacity</span></div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Hotspots</h3>
          </div>
          <div className="list-stack">
            {hotspots.map((hotspot) => (
              <div className="list-row" key={hotspot.id}>
                <div>
                  <strong>{hotspot.name}</strong>
                  <p className="page-subtitle" style={{ margin: 0 }}>{hotspot.reason}</p>
                </div>
                <span className="risk-pill high">{hotspot.score}/100</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Vehicle status</h3>
          </div>
          <div className="list-stack">
            {vehicles.map((vehicle) => (
              <div className="list-row" key={vehicle.id}>
                <div>
                  <strong>{vehicle.id}</strong>
                  <p className="page-subtitle" style={{ margin: 0 }}>{vehicle.driver}</p>
                </div>
                <span className="status-badge assigned">{vehicle.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
