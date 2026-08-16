import AppShell from '@/components/AppShell';
import { vehicles } from '@/lib/mockData';

export default function DriverVehiclePage() {
  const vehicle = vehicles[0];

  return (
    <AppShell
      title="Vehicle Overview"
      subtitle="Fleet and route details for the driver's assigned vehicle."
      navItems={[
        { label: 'Dashboard', href: '/driver/dashboard' },
        { label: 'Tasks', href: '/driver/tasks' },
        { label: 'Routes', href: '/driver/routes' },
        { label: 'Vehicle', href: '/driver/vehicle', active: true },
        { label: 'Notifications', href: '/driver/notifications' },
      ]}
    >
      <div className="panel">
        <div className="list-stack">
          <div className="list-row"><strong>Vehicle ID</strong><span>{vehicle.id}</span></div>
          <div className="list-row"><strong>Driver</strong><span>{vehicle.driver}</span></div>
          <div className="list-row"><strong>Status</strong><span>{vehicle.status}</span></div>
          <div className="list-row"><strong>Current location</strong><span>{vehicle.location}</span></div>
          <div className="list-row"><strong>Capacity</strong><span>{vehicle.capacity} kg</span></div>
          <div className="list-row"><strong>Load</strong><span>{vehicle.load} kg</span></div>
        </div>
      </div>
    </AppShell>
  );
}
