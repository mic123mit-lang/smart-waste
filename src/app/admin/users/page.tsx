import AppShell from '@/components/AppShell';

const users = [
  { name: 'Nina Patel', role: 'Citizen', status: 'Active' },
  { name: 'Anil Verma', role: 'Driver', status: 'Active' },
  { name: 'Maya Chen', role: 'Municipal', status: 'Active' },
  { name: 'Aisha Khan', role: 'Citizen', status: 'Verified' },
];

export default function AdminUsersPage() {
  return (
    <AppShell
      title="Users"
      subtitle="Manage roles, access and city-system users."
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
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users', active: true },
      ]}
    >
      <div className="panel">
        <div className="list-stack">
          {users.map((user) => (
            <div className="list-row" key={user.name}>
              <div>
                <strong>{user.name}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{user.role}</p>
              </div>
              <span className="status-badge resolved">{user.status}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
