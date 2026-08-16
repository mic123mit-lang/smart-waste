export type ReportPriority = 'Low' | 'Medium' | 'High';
export type ReportStatus = 'Open' | 'Assigned' | 'In Progress' | 'Resolved';

export type WasteReport = {
  id: number;
  reporter: string;
  location: string;
  type: string;
  volumeKg: number;
  priority: ReportPriority;
  status: ReportStatus;
  createdAt: string;
};

export type PickupStatus =
  | 'REQUESTED'
  | 'ASSIGNED'
  | 'EN_ROUTE'
  | 'ARRIVED'
  | 'COLLECTING'
  | 'COLLECTED'
  | 'VERIFYING'
  | 'VERIFIED'
  | 'REWARD_CREDITED'
  | 'COMPLETED';

export type Pickup = {
  id: string;
  citizen: string;
  location: string;
  wasteType: string;
  weightKg: number;
  status: PickupStatus;
  assignedVehicle: string;
  driver: string;
  rewardPoints: number;
  verified: boolean;
};

export type RewardRule = {
  category: string;
  pointsPerKg: number;
  bonus?: number;
};

export const wasteCategories = [
  'Plastic',
  'Paper',
  'Metal',
  'Glass',
  'Organic',
  'E-waste',
  'Mixed waste',
  'Construction waste',
  'Other',
];

export const rewardRules: RewardRule[] = [
  { category: 'Plastic', pointsPerKg: 500, bonus: 500 },
  { category: 'Paper', pointsPerKg: 200, bonus: 300 },
  { category: 'Metal', pointsPerKg: 700, bonus: 600 },
  { category: 'Glass', pointsPerKg: 400, bonus: 400 },
  { category: 'E-waste', pointsPerKg: 1000, bonus: 900 },
  { category: 'Organic', pointsPerKg: 100, bonus: 200 },
  { category: 'Mixed waste', pointsPerKg: 100, bonus: 0 },
];

export const wallet = {
  currentPoints: 125000,
  lifetimePoints: 872500,
  redeemedPoints: 16000,
  availableBalance: 125000,
  conversionRate: 10000,
  estimatedValue: 125,
};

export const citizenDashboard = {
  summary: [
    { label: 'Verified pickups', value: '18', change: '+4 this month' },
    { label: 'Waste recycled', value: '42 kg', change: '+8 kg' },
    { label: 'Green points', value: '12,500 GP', change: '+2,500' },
    { label: 'Eco level', value: '4 · Eco Warrior', change: 'Top 8%' },
  ],
  achievements: ['First Pickup', 'Plastic Recycler', 'Eco Warrior', '10 Verified Pickups'],
  notifications: [
    'Your pickup WM-2026-000124 has been assigned.',
    'Vehicle is approaching your area.',
    'Collection verified. 2,500 GP credited.',
    'Waste Passport is ready.',
  ],
};

export const wasteReports: WasteReport[] = [
  {
    id: 1,
    reporter: 'Nina Patel',
    location: 'Sector 21',
    type: 'Plastic',
    volumeKg: 120,
    priority: 'High',
    status: 'Assigned',
    createdAt: '2026-08-16T09:20:00Z',
  },
  {
    id: 2,
    reporter: 'Marcus Lee',
    location: 'Market Square',
    type: 'Organic',
    volumeKg: 86,
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2026-08-16T08:10:00Z',
  },
  {
    id: 3,
    reporter: 'Aisha Khan',
    location: 'Green Park',
    type: 'Paper',
    volumeKg: 64,
    priority: 'Low',
    status: 'Resolved',
    createdAt: '2026-08-15T16:45:00Z',
  },
  {
    id: 4,
    reporter: 'Rohit Sharma',
    location: 'Sector 7',
    type: 'Mixed waste',
    volumeKg: 138,
    priority: 'High',
    status: 'Open',
    createdAt: '2026-08-16T11:05:00Z',
  },
];

export const pickups: Pickup[] = [
  {
    id: 'WM-2026-000124',
    citizen: 'Nina Patel',
    location: 'Sector 21, Lane 4',
    wasteType: 'Plastic',
    weightKg: 5,
    status: 'REWARD_CREDITED',
    assignedVehicle: 'GJ01XX1234',
    driver: 'Anil Verma',
    rewardPoints: 3000,
    verified: true,
  },
  {
    id: 'WM-2026-000125',
    citizen: 'Aisha Khan',
    location: 'Market Square',
    wasteType: 'Organic',
    weightKg: 14,
    status: 'VERIFYING',
    assignedVehicle: 'GJ01XX5678',
    driver: 'Rakesh Mehta',
    rewardPoints: 1500,
    verified: false,
  },
  {
    id: 'WM-2026-000126',
    citizen: 'Rahul Sethi',
    location: 'Sector 12, Service Road',
    wasteType: 'Metal',
    weightKg: 9,
    status: 'EN_ROUTE',
    assignedVehicle: 'GJ01XX4321',
    driver: 'Sunil Yadav',
    rewardPoints: 6500,
    verified: false,
  },
];

export const vehicles = [
  { id: 'GJ01XX1234', driver: 'Anil Verma', status: 'ASSIGNED', location: 'Sector 21', capacity: 2000, load: 780 },
  { id: 'GJ01XX5678', driver: 'Rakesh Mehta', status: 'EN_ROUTE', location: 'Market Square', capacity: 1800, load: 520 },
  { id: 'GJ01XX4321', driver: 'Sunil Yadav', status: 'AVAILABLE', location: 'Depot 7', capacity: 2200, load: 0 },
  { id: 'GJ01XX9051', driver: 'Vikram Joshi', status: 'MAINTENANCE', location: 'Workshop', capacity: 1600, load: 0 },
];

export const hotspots = [
  { id: 1, name: 'Sector 21', score: 92, risk: 'High', reason: '47 reports and repeated overflow incidents', action: 'Increase collection frequency.' },
  { id: 2, name: 'Sector 7', score: 88, risk: 'High', reason: 'Illegal dumping clusters detected', action: 'Dispatch inspection crew.' },
  { id: 3, name: 'Market Square', score: 74, risk: 'Medium', reason: 'High commercial waste volume', action: 'Add route adjustment.' },
];

export const wardLeaderboard = [
  { ward: 'Ward 12', score: 94.2, points: 220000 },
  { ward: 'Ward 7', score: 91.8, points: 208500 },
  { ward: 'Ward 21', score: 89.4, points: 196300 },
  { ward: 'Ward 5', score: 86.7, points: 184100 },
];

export const cleanCityScores = [
  { ward: 'Sector 21', score: 54, status: 'Needs Attention', recommendation: 'Increase collection frequency by 20%.' },
  { ward: 'Ward 7', score: 88, status: 'Good', recommendation: 'Maintain current recycling rates.' },
  { ward: 'Ward 12', score: 94, status: 'Excellent', recommendation: 'Keep weekly hotspot inspection active.' },
];

export const notifications = [
  { title: 'Pickup assigned', detail: 'WM-2026-000124 assigned to Vehicle GJ01XX1234', kind: 'Citizen' },
  { title: 'Route update', detail: 'Pickup priority approved for Sector 7', kind: 'Driver' },
  { title: 'Hotspot alert', detail: 'Sector 21 predicted high waste tomorrow', kind: 'Municipal' },
  { title: 'Reward credited', detail: '2,500 Green Points added to your wallet', kind: 'Citizen' },
];

export const wastePassports = [
  {
    id: 'WP-82941',
    location: 'Sector 21',
    date: '13 Aug 2026',
    category: 'Plastic',
    weightKg: 7.4,
    vehicle: 'GJ01XX1234',
    collectionVerified: true,
  },
  {
    id: 'WP-82942',
    location: 'Market Square',
    date: '15 Aug 2026',
    category: 'Organic',
    weightKg: 14.2,
    vehicle: 'GJ01XX5678',
    collectionVerified: true,
  },
];

export const routeOptimizations = [
  { vehicle: 'Vehicle A', route: 'Depot → Sector 12 → Sector 15 → Sector 21 → Recycling Center', distanceKm: 18.2, timeMinutes: 42, savings: '18% shorter distance' },
  { vehicle: 'Vehicle B', route: 'Depot → Market Square → Sector 7 → Recycling Center', distanceKm: 16.6, timeMinutes: 38, savings: '23% lower travel time' },
];

export const predictionData = {
  city: 'Sector 21',
  demandKg: 1840,
  risk: 'High',
  recommendation: 'Deploy additional collection vehicle.',
  historical: [42, 56, 61, 58, 74, 83, 95],
  predicted: [48, 62, 70, 66, 80, 92, 110],
};

export const dashboardSummary = {
  totalPickups: 12482,
  resolutionRate: 94.2,
  activeVehicles: 37,
  rewardValue: '₹82,450',
  pendingComplaints: 26,
  highRiskHotspots: 8,
  avgResponseTime: '17 min',
  avgResolutionTime: '2.4 hr',
  wasteCollectedToday: '3,420 kg',
  recyclableWaste: '1,860 kg',
  predictedDemand: '1,840 kg',
};

export const demoCredentials = [
  { role: 'Citizen', email: 'citizen@smartwaste.ai', password: 'citizen123' },
  { role: 'Driver', email: 'driver@smartwaste.ai', password: 'driver123' },
  { role: 'Municipal', email: 'municipal@smartwaste.ai', password: 'municipal123' },
  { role: 'Administrator', email: 'admin@smartwaste.com', password: 'admin123' },
];

export function getDashboardData() {
  return {
    summary: dashboardSummary,
    wasteMix: [
      { name: 'Plastic', value: 46, color: '#34d399' },
      { name: 'Paper', value: 27, color: '#60a5fa' },
      { name: 'Organic', value: 18, color: '#fbbf24' },
      { name: 'Metal', value: 9, color: '#f87171' },
    ],
    routeAlerts: [
      { id: 1, bin: 'Bin A-12', location: 'City Center', fillLevel: 91, eta: '8 min', status: 'Critical' },
      { id: 2, bin: 'Bin B-05', location: 'Green Park', fillLevel: 73, eta: '16 min', status: 'Warning' },
      { id: 3, bin: 'Bin C-17', location: 'Old Market', fillLevel: 67, eta: '21 min', status: 'Scheduled' },
    ],
    weeklyTrend: [32, 41, 48, 46, 59, 63, 71],
    recentReports: wasteReports.slice(0, 3).map((report) => ({
      id: report.id,
      title: `${report.type} waste report`,
      zone: report.location,
      severity: report.priority,
    })),
    topZones: ['Central Plaza', 'Market Square', 'Green Park', 'Old Town'],
    hotspots,
    vehicles,
    routes: routeOptimizations,
    predictions: predictionData,
  };
}

export function getReports(): WasteReport[] {
  return wasteReports;
}

export function getReportById(id: number) {
  return wasteReports.find((report) => report.id === id) ?? null;
}

export function updateReport(id: number, updates: Partial<WasteReport>) {
  const index = wasteReports.findIndex((report) => report.id === id);
  if (index === -1) return null;
  wasteReports[index] = { ...wasteReports[index], ...updates };
  return wasteReports[index];
}

export function deleteReport(id: number) {
  const index = wasteReports.findIndex((report) => report.id === id);
  if (index === -1) return false;
  wasteReports.splice(index, 1);
  return true;
}

export function createReport(input: {
  reporter: string;
  location: string;
  type: string;
  volumeKg: number;
  priority: ReportPriority;
}) {
  const newReport: WasteReport = {
    id: Date.now(),
    reporter: input.reporter,
    location: input.location,
    type: input.type,
    volumeKg: input.volumeKg,
    priority: input.priority,
    status: 'Open',
    createdAt: new Date().toISOString(),
  };

  wasteReports.unshift(newReport);
  return newReport;
}

export function getAdminOverview() {
  return {
    members: [
      { name: 'Maya Chen', role: 'Operations Manager', active: true },
      { name: 'Daniel Cruz', role: 'Route Coordinator', active: true },
      { name: 'Priya Nair', role: 'Field Inspector', active: false },
    ],
    tasks: [
      'Review Sector 21 overflow alert',
      'Assign new collection route for Market Square',
      'Confirm recycled volume summary for today',
    ],
  };
}
