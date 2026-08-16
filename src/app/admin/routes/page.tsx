import AppShell from '@/components/AppShell';
import { routeOptimizations } from '@/lib/mockData';

export default function AdminRoutesPage() {
  return (
    <AppShell
      title="AI Route Optimization"
      subtitle="Optimized route plans for collection vehicles based on load, hotspot priority and distance."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles' },
        { label: 'Map', href: '/admin/map' },
        { label: 'Hotspots', href: '/admin/hotspots' },
        { label: 'Predictions', href: '/admin/predictions' },
        { label: 'Routes', href: '/admin/routes', active: true },
        { label: 'Analytics', href: '/admin/analytics' },
        { label: 'Clean City', href: '/admin/clean-city' },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="card-grid">
        {routeOptimizations.map((route) => (
          <div className="status-card" key={route.vehicle}>
            <span>{route.vehicle}</span>
            <strong>{route.route}</strong>
            <small>{route.savings}</small>
            <p className="page-subtitle" style={{ margin: '10px 0 0' }}>{route.distanceKm} km • {route.timeMinutes} mins</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
