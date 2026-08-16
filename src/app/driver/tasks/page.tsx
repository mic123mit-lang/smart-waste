'use client';

import AppShell from '@/components/AppShell';
import { pickups } from '@/lib/mockData';

export default function DriverTasksPage() {
  return (
    <AppShell
      title="Assigned Tasks"
      subtitle="Review pickup requests, verify collection details and upload evidence."
      navItems={[
        { label: 'Dashboard', href: '/driver/dashboard' },
        { label: 'Tasks', href: '/driver/tasks', active: true },
        { label: 'Routes', href: '/driver/routes' },
        { label: 'Vehicle', href: '/driver/vehicle' },
        { label: 'Notifications', href: '/driver/notifications' },
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
                <span className={`status-badge ${pickup.status.toLowerCase()}`}>{pickup.status}</span>
                <small>{pickup.weightKg} kg • {pickup.wasteType}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
