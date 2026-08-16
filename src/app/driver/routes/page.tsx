import AppShell from '@/components/AppShell';
import { routeOptimizations } from '@/lib/mockData';

export default function DriverRoutesPage() {
  return (
    <AppShell
      title="Optimized Routes"
      subtitle="Navigational route planning for each collection trip."
      navItems={[
        { label: 'Dashboard', href: '/driver/dashboard' },
        { label: 'Tasks', href: '/driver/tasks' },
        { label: 'Routes', href: '/driver/routes', active: true },
        { label: 'Vehicle', href: '/driver/vehicle' },
        { label: 'Notifications', href: '/driver/notifications' },
      ]}
    >
      <div className="card-grid">
        {routeOptimizations.map((route) => (
          <div className="status-card" key={route.vehicle}>
            <span>{route.vehicle}</span>
            <strong>{route.route}</strong>
            <small>{route.savings}</small>
            <p className="page-subtitle" style={{ margin: '10px 0 0' }}>{route.distanceKm} km • {route.timeMinutes} min</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
