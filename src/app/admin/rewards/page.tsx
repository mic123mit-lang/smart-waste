import AppShell from '@/components/AppShell';

const rules = [
  { category: 'Plastic', points: '500 points/kg', bonus: '+500 segregation bonus' },
  { category: 'Paper', points: '200 points/kg', bonus: '+300 segregation bonus' },
  { category: 'Metal', points: '700 points/kg', bonus: '+600 segregation bonus' },
  { category: 'E-waste', points: '1000 points/kg', bonus: '+900 segregation bonus' },
];

export default function AdminRewardsPage() {
  return (
    <AppShell
      title="Reward Engine"
      subtitle="Admin-configurable Green Points rules and waste reward categories."
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
        { label: 'Rewards', href: '/admin/rewards', active: true },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="card-grid">
        {rules.map((rule) => (
          <div className="status-card" key={rule.category}>
            <span>{rule.category}</span>
            <strong>{rule.points}</strong>
            <small>{rule.bonus}</small>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
