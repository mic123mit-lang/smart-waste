'use client';

import AppShell from '@/components/AppShell';
import { pickups } from '@/lib/mockData';

export default function CitizenPickupsPage() {
  return (
    <AppShell
      title="Pickup Tracking"
      subtitle="Monitor assigned vehicles, collection status and reward progress."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard' },
        { label: 'Report Waste', href: '/citizen/report' },
        { label: 'Pickups', href: '/citizen/pickups', active: true },
        { label: 'Wallet', href: '/citizen/wallet' },
        { label: 'Impact', href: '/citizen/impact' },
        { label: 'Leaderboard', href: '/citizen/leaderboard' },
        { label: 'Notifications', href: '/citizen/notifications' },
      ]}
    >
      <div className="panel">
        <div className="list-stack">
          {pickups.map((pickup) => (
            <div className="list-row" key={pickup.id}>
              <div>
                <strong>{pickup.id}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{pickup.location}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className={`status-badge ${pickup.status.toLowerCase()}`}>{pickup.status}</div>
                <small>{pickup.wasteType} • {pickup.weightKg} kg</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
