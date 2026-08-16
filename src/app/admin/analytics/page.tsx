import AppShell from '@/components/AppShell';
import { cleanCityScores, dashboardSummary } from '@/lib/mockData';

export default function AdminAnalyticsPage() {
  return (
    <AppShell
      title="Analytics"
      subtitle="City-level waste trends, clean city scores and operational outcomes."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles' },
        { label: 'Map', href: '/admin/map' },
        { label: 'Hotspots', href: '/admin/hotspots' },
        { label: 'Predictions', href: '/admin/predictions' },
        { label: 'Routes', href: '/admin/routes' },
        { label: 'Analytics', href: '/admin/analytics', active: true },
        { label: 'Clean City', href: '/admin/clean-city' },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="summary-grid">
        <div className="metric-card"><span>Waste collected today</span><strong>{dashboardSummary.wasteCollectedToday}</strong></div>
        <div className="metric-card"><span>Recyclable waste</span><strong>{dashboardSummary.recyclableWaste}</strong></div>
        <div className="metric-card"><span>Predicted demand</span><strong>{dashboardSummary.predictedDemand}</strong></div>
        <div className="metric-card"><span>Avg response time</span><strong>{dashboardSummary.avgResponseTime}</strong></div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h3>Clean City Score</h3>
        </div>
        <div className="list-stack">
          {cleanCityScores.map((item) => (
            <div className="list-row" key={item.ward}>
              <strong>{item.ward}</strong>
              <span>{item.score}/100</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
