import AppShell from '@/components/AppShell';

const badges = ['First Pickup', 'Plastic Recycler', 'Eco Warrior', '10 Verified Pickups', '50 kg Recycled', 'Community Champion'];

export default function CitizenImpactPage() {
  return (
    <AppShell
      title="Environmental Impact"
      subtitle="See the real difference your verified collection activity is making."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard' },
        { label: 'Report Waste', href: '/citizen/report' },
        { label: 'Pickups', href: '/citizen/pickups' },
        { label: 'Wallet', href: '/citizen/wallet' },
        { label: 'Impact', href: '/citizen/impact', active: true },
        { label: 'Leaderboard', href: '/citizen/leaderboard' },
        { label: 'Notifications', href: '/citizen/notifications' },
      ]}
    >
      <div className="summary-grid">
        <div className="metric-card"><span>Verified pickups</span><strong>18</strong></div>
        <div className="metric-card"><span>Waste recycled</span><strong>42 kg</strong></div>
        <div className="metric-card"><span>Green points</span><strong>12,500</strong></div>
        <div className="metric-card"><span>Ward ranking</span><strong>Top 8%</strong></div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h3>Achievements</h3>
        </div>
        <div className="card-grid">
          {badges.map((badge) => (
            <div className="status-card" key={badge}>
              <span>Badge</span>
              <strong>{badge}</strong>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
