import AppShell from '@/components/AppShell';
import { wasteReports } from '@/lib/mockData';

export default function AdminReportsPage() {
  return (
    <AppShell
      title="Waste Reports"
      subtitle="Review and manage citizen-submitted waste reports and assigned incidents."
      navItems={[
        { label: 'Overview', href: '/admin/dashboard' },
        { label: 'Reports', href: '/admin/reports', active: true },
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
        { label: 'Users', href: '/admin/users' },
      ]}
    >
      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Reporter</th>
              <th>Location</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {wasteReports.map((report) => (
              <tr key={report.id}>
                <td>{report.reporter}</td>
                <td>{report.location}</td>
                <td>{report.type}</td>
                <td><span className={`severity-pill ${report.priority.toLowerCase()}`}>{report.priority}</span></td>
                <td><span className={`status-badge ${report.status.toLowerCase().replace(/\s+/g, '-')}`}>{report.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
