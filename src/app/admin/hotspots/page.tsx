import AppShell from '@/components/AppShell';
import { hotspots } from '@/lib/mockData';

export default function AdminHotspotsPage() {
  return (
    <AppShell
      title="Hotspot Detection"
      subtitle="Review dumping risk, hotspot density and municipal action triggers."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles' },
        { label: 'Map', href: '/admin/map' },
        { label: 'Hotspots', href: '/admin/hotspots', active: true },
        { label: 'Predictions', href: '/admin/predictions' },
        { label: 'Routes', href: '/admin/routes' },
        { label: 'Analytics', href: '/admin/analytics' },
        { label: 'Clean City', href: '/admin/clean-city' },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="card-grid">
        {hotspots.map((hotspot) => (
          <div className="status-card" key={hotspot.id}>
            <span>{hotspot.name}</span>
            <strong>{hotspot.score}/100</strong>
            <small>{hotspot.risk} risk</small>
            <p className="page-subtitle" style={{ margin: '10px 0 0' }}>{hotspot.action}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
