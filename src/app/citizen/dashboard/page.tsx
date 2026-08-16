'use client';

import { useEffect, useState } from 'react';
import AppShell from '@/components/AppShell';
import { citizenDashboard, pickups, wallet, wardLeaderboard } from '@/lib/mockData';

export default function CitizenDashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AppShell
      title="Citizen Portal"
      subtitle="Track your waste requests, rewards and environmental impact."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard', active: true },
        { label: 'Report Waste', href: '/citizen/report' },
        { label: 'Pickups', href: '/citizen/pickups' },
        { label: 'Wallet', href: '/citizen/wallet' },
        { label: 'Impact', href: '/citizen/impact' },
        { label: 'Leaderboard', href: '/citizen/leaderboard' },
        { label: 'Notifications', href: '/citizen/notifications' },
      ]}
    >
      <div className="summary-grid">
        {citizenDashboard.summary.map((item) => (
          <div className="metric-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.change}</small>
          </div>
        ))}
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Live pickup activity</h3>
          </div>
          <div className="list-stack">
            {pickups.map((pickup) => (
              <div className="list-row" key={pickup.id}>
                <div>
                  <strong>{pickup.id}</strong>
                  <p className="page-subtitle" style={{ margin: 0 }}>{pickup.location}</p>
                </div>
                <span className={`status-badge ${pickup.status.toLowerCase()}`}>{pickup.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Green Wallet</h3>
          </div>
          <div className="reward-strip">
            <div>
              <span className="section-kicker">Available balance</span>
              <div className="risk-score">{wallet.currentPoints.toLocaleString()} GP</div>
            </div>
            <div>
              <small>Estimated value</small>
              <strong>₹{wallet.estimatedValue}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Environmental impact</h3>
          </div>
          <ul className="milestone-list">
            {citizenDashboard.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Ward leaderboard</h3>
          </div>
          <div className="leader-list">
            {wardLeaderboard.map((entry) => (
              <div className="list-row" key={entry.ward}>
                <strong>{entry.ward}</strong>
                <span>{entry.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
