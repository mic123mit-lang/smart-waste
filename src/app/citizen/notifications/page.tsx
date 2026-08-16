import AppShell from '@/components/AppShell';
import { notifications } from '@/lib/mockData';

export default function CitizenNotificationsPage() {
  return (
    <AppShell
      title="Notifications"
      subtitle="Stay informed on collection updates, verification messages and reward events."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard' },
        { label: 'Report Waste', href: '/citizen/report' },
        { label: 'Pickups', href: '/citizen/pickups' },
        { label: 'Wallet', href: '/citizen/wallet' },
        { label: 'Impact', href: '/citizen/impact' },
        { label: 'Leaderboard', href: '/citizen/leaderboard' },
        { label: 'Notifications', href: '/citizen/notifications', active: true },
      ]}
    >
      <div className="panel">
        <div className="notification-list">
          {notifications.map((item) => (
            <div className="notification-item" key={item.title + item.kind}>
              <div>
                <strong>{item.title}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{item.detail}</p>
              </div>
              <span className="severity-pill low">{item.kind}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
