import AppShell from '@/components/AppShell';
import { predictionData } from '@/lib/mockData';

export default function AdminPredictionsPage() {
  return (
    <AppShell
      title="Waste Generation Prediction"
      subtitle="AI forecasts for city, ward and date-specific waste demand."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports' },
        { label: 'Pickups', href: '/admin/pickups' },
        { label: 'Vehicles', href: '/admin/vehicles' },
        { label: 'Map', href: '/admin/map' },
        { label: 'Hotspots', href: '/admin/hotspots' },
        { label: 'Predictions', href: '/admin/predictions', active: true },
        { label: 'Routes', href: '/admin/routes' },
        { label: 'Analytics', href: '/admin/analytics' },
        { label: 'Clean City', href: '/admin/clean-city' },
        { label: 'Rewards', href: '/admin/rewards' },
        { label: 'Fraud', href: '/admin/fraud' },
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="summary-grid">
        <div className="metric-card"><span>City</span><strong>{predictionData.city}</strong></div>
        <div className="metric-card"><span>Predicted demand</span><strong>{predictionData.demandKg} kg</strong></div>
        <div className="metric-card"><span>Risk</span><strong>{predictionData.risk}</strong></div>
        <div className="metric-card"><span>Action</span><strong>{predictionData.recommendation}</strong></div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h3>Historical vs predicted trend</h3>
        </div>
        <div className="list-stack">
          {predictionData.historical.map((value, index) => (
            <div className="list-row" key={`${value}-${index}`}>
              <strong>Day {index + 1}</strong>
              <span>Historical {value} vs Predicted {predictionData.predicted[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
