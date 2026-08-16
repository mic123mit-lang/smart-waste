import AppShell from '@/components/AppShell';
import { vehicles } from '@/lib/mockData';

export default function AdminVehiclesPage() {
  return (
    <AppShell
      title="Vehicle Fleet"
      subtitle="Live status, capacity and driver allocation for municipal collection vehicles."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles', active: true },
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
          {vehicles.map((vehicle) => (
            <div className="list-row" key={vehicle.id}>
              <div>
                <strong>{vehicle.id}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{vehicle.driver} • {vehicle.location}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="status-badge assigned">{vehicle.status}</div>
                <small>{vehicle.load} kg / {vehicle.capacity} kg</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
