import AppShell from '@/components/AppShell';
import { wardLeaderboard } from '@/lib/mockData';

export default function LeaderboardPage() {
  return (
    <AppShell
      title="Cleanest Ward Challenge"
      subtitle="Track local performance across monthly and quarterly city-wide competitions."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard' },
        { label: 'Report Waste', href: '/citizen/report' },
        { label: 'Pickups', href: '/citizen/pickups' },
        { label: 'Wallet', href: '/citizen/wallet' },
        { label: 'Impact', href: '/citizen/impact' },
        { label: 'Leaderboard', href: '/citizen/leaderboard', active: true },
        { label: 'Notifications', href: '/citizen/notifications' },
      ]}
    >
      <div className="panel">
        <div className="leader-list">
          {wardLeaderboard.map((entry, index) => (
            <div className="list-row" key={entry.ward}>
              <strong>{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '•'} {entry.ward}</strong>
              <span>{entry.score}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
