import AppShell from '@/components/AppShell';
import { pickups } from '@/lib/mockData';

export default function AdminPickupsPage() {
  return (
    <AppShell
      title="Pickup Requests"
      subtitle="Track scheduled pickups, verification progress and reward generation outcomes."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups', active: true },
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
      <div className="panel">
        <div className="list-stack">
          {pickups.map((pickup) => (
            <div className="list-row" key={pickup.id}>
              <div>
                <strong>{pickup.id}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{pickup.citizen} • {pickup.location}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className={`status-badge ${pickup.status.toLowerCase()}`}>{pickup.status}</div>
                <small>{pickup.assignedVehicle} • {pickup.rewardPoints} GP</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
