import AppShell from '@/components/AppShell';

const flags = [
  { id: 'WM-2026-000991', reason: 'Unusual weight compared with historical average', status: 'Manual Review Required' },
  { id: 'WM-2026-001104', reason: 'GPS mismatch between driver and pickup location', status: 'Review Pending' },
  { id: 'WM-2026-001230', reason: 'Duplicate evidence uploaded for same collection', status: 'Flagged' },
];

export default function AdminFraudPage() {
  return (
    <AppShell
      title="Anti-Fraud Monitoring"
      subtitle="Flag suspicious collection activity before Green Points are credited."
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
        { label: 'Clean City', href: '/admin/clean-city' },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud', active: true },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="panel">
        <div className="list-stack">
          {flags.map((flag) => (
            <div className="list-row" key={flag.id}>
              <div>
                <strong>{flag.id}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{flag.reason}</p>
              </div>
              <span className="risk-pill high">{flag.status}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
