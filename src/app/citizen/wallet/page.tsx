import Link from 'next/link';
import AppShell from '@/components/AppShell';
import { wallet } from '@/lib/mockData';

const transactionHistory = [
  { title: '+2,500 GP', detail: 'Verified plastic collection', date: '13 Aug 2026' },
  { title: '+500 GP', detail: 'Segregation bonus', date: '12 Aug 2026' },
  { title: '-10,000 GP', detail: 'Reward redemption', date: '08 Aug 2026' },
];

export default function CitizenWalletPage() {
  return (
    <AppShell
      title="Green Wallet"
      subtitle="Your verified rewards, balance and payment history stay transparent."
      navItems={[
        { label: 'Dashboard', href: '/citizen/dashboard' },
        { label: 'Report Waste', href: '/citizen/report' },
        { label: 'Pickups', href: '/citizen/pickups' },
        { label: 'Wallet', href: '/citizen/wallet', active: true },
        { label: 'Impact', href: '/citizen/impact' },
        { label: 'Leaderboard', href: '/citizen/leaderboard' },
        { label: 'Notifications', href: '/citizen/notifications' },
      ]}
    >
      <div className="summary-grid">
        <div className="metric-card">
          <span>Current points</span>
          <strong>{wallet.currentPoints.toLocaleString()} GP</strong>
          <small>₹{wallet.estimatedValue}</small>
        </div>
        <div className="metric-card">
          <span>Lifetime points</span>
          <strong>{wallet.lifetimePoints.toLocaleString()} GP</strong>
        </div>
        <div className="metric-card">
          <span>Redeemed points</span>
          <strong>{wallet.redeemedPoints.toLocaleString()} GP</strong>
        </div>
        <div className="metric-card">
          <span>Conversion</span>
          <strong>{wallet.conversionRate.toLocaleString()} GP = ₹10</strong>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h3>Transaction history</h3>
          <Link href="/citizen/wallet/transactions" className="secondary-btn small-btn">View all</Link>
        </div>
        <div className="list-stack">
          {transactionHistory.map((entry) => (
            <div className="list-row" key={entry.title + entry.date}>
              <div>
                <strong>{entry.title}</strong>
                <p className="page-subtitle" style={{ margin: 0 }}>{entry.detail}</p>
              </div>
              <small>{entry.date}</small>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
