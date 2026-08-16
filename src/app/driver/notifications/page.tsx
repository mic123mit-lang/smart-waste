import AppShell from '@/components/AppShell';

const notifications = [
  'New pickup assigned: WM-2026-000124',
  'Route updated to avoid traffic delay near Sector 21',
  'Priority pickup added for Market Square',
];

export default function DriverNotificationsPage() {
  return (
    <AppShell
      title="Driver Notifications"
      subtitle="Operational alerts and routing changes for your assigned loads."
      navItems={[
        { label: 'Dashboard', href: '/driver/dashboard' },
        { label: 'Tasks', href: '/driver/tasks' },
        { label: 'Routes', href: '/driver/routes' },
        { label: 'Vehicle', href: '/driver/vehicle' },
        { label: 'Notifications', href: '/driver/notifications', active: true },
      ]}
    >
      <div className="panel">
        <div className="notification-list">
          {notifications.map((message) => (
            <div className="notification-item" key={message}>
              <strong>{message}</strong>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
