import AppShell from '@/components/AppShell';
import { cleanCityScores } from '@/lib/mockData';

export default function AdminCleanCityPage() {
  return (
    <AppShell
      title="Clean City Score"
      subtitle="Ward-level cleanliness scoring with actionable municipal recommendations."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles' },
        { label: 'Map', href: '/admin/map' },
        { label: 'Hotspots', href: '/admin/hotspots' },
        { label: 'Predictions', href: '/admin/predictions' },
        { label: 'Routes', href: '/admin/routes' },
        { label: 'Analytics', href: '/admin/analytics' },
        { label: 'Clean City', href: '/admin/clean-city', active: true },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="card-grid">
        {cleanCityScores.map((item) => (
          <div className="status-card" key={item.ward}>
            <span>{item.ward}</span>
            <strong>{item.score}/100</strong>
            <small>{item.status}</small>
            <p className="page-subtitle" style={{ margin: '10px 0 0' }}>{item.recommendation}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
